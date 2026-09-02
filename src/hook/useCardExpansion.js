import { useState, useEffect, useCallback } from "react";

/**
 * Pilote l'état "ouvert / fermé" d'UNE carte projet, à partir d'un état global partagé
 * entre toutes les cartes (voir Home.jsx, qui possède `expansionProjetId`).
 *
 * Une seule carte peut être ouverte à la fois sur toute la page : plutôt que de donner à
 * chaque carte son propre booléen local `isOpen`, l'état "qui est ouvert" est centralisé
 * dans le composant parent (Home.jsx) et transmis ici via `expansionProjetId`. Ce hook ne
 * fait que DÉRIVER, pour la carte `projetId` qui l'utilise, si elle est concernée ou non.
 *
 * @param {number|string} projetId - identifiant de la carte qui utilise ce hook.
 * @param {number|string|null} expansionProjetId - id de la carte actuellement ouverte
 *   sur toute la page (ou null si aucune carte n'est ouverte). Vient de Home.jsx.
 * @param {Function} setExpansionProjetId - setter du state global (id: number|string|null) => void,
 *   également fourni par Home.jsx.
 * @returns {{
 *   status: 'EXPANDED' | 'COLLAPSED',
 *   isActive: boolean,
 *   expand: Function,
 *   collapse: Function
 * }}
 */
export const useCardExpansion = (projetId, expansionProjetId, setExpansionProjetId) => {
    // État DÉRIVÉ plutôt que dupliqué : isExpanded n'est pas un useState à part, c'est
    // simplement le résultat d'une comparaison entre l'état global et l'id de cette carte.
    // Si on stockait un booléen séparé ici, il faudrait le garder manuellement synchronisé
    // avec expansionProjetId à chaque changement — source classique de bugs (deux sources
    // de vérité qui finissent par se contredire). Ici, une seule source de vérité existe
    // (expansionProjetId dans Home.jsx), et cette ligne ne fait que la lire.
    const isExpanded = expansionProjetId === projetId;

    // useCallback mémorise la fonction elle-même entre deux rendus du composant, tant que
    // les valeurs du tableau de dépendances [projetId, setExpansionProjetId] ne changent pas.
    // Sans useCallback, `expand` serait une NOUVELLE fonction (un nouvel objet en mémoire) à
    // chaque rendu, même si son comportement est identique. Ça compte ici parce que `expand`
    // est ensuite utilisée comme handler onClick sur un élément animé par Motion : une
    // référence de fonction stable évite des recalculs inutiles côté animation/rendu enfant.
    const expand = useCallback(() => {
        setExpansionProjetId(projetId);
    }, [projetId, setExpansionProjetId]);

    const collapse = useCallback(() => {
        setExpansionProjetId(null);
    }, [setExpansionProjetId]);

    // Gel du défilement global (Scroll Lock) conforme au Cahier des Charges (Section 2.4)[cite: 2]
    //
    // On modifie ici directement le style d'un élément du DOM (document.body) EN DEHORS de
    // React, ce qui est inhabituel dans une app React classique (où le DOM est normalement
    // entièrement piloté par le JSX). C'est justifié : le scroll du <body> est un état global
    // du navigateur, pas une donnée qui appartient à un composant précis, donc le manipuler
    // en effet de bord direct est plus simple que de le faire transiter par le state React.
    useEffect(() => {
        if (isExpanded) {
            // 'hidden' bloque tout défilement de la page pendant que la carte est en plein écran.
            document.body.style.overflow = 'hidden';
        } else {
            // Chaîne vide plutôt que 'visible'/'auto' : ça RETIRE la règle inline posée par ce
            // hook et laisse le navigateur retomber sur le comportement par défaut défini par
            // les feuilles de style (Tailwind ici), plutôt que d'imposer une valeur en dur qui
            // pourrait entrer en conflit avec d'autres styles.
            document.body.style.overflow = '';
        }

        // Fonction de "cleanup" : useEffect peut retourner une fonction, que React appelle
        // automatiquement juste avant de ré-exécuter l'effet suivant, OU quand le composant
        // qui utilise ce hook est démonté (retiré du DOM). Elle sert de filet de sécurité :
        // si jamais cette carte disparaît du DOM alors qu'elle était ouverte (isExpanded true),
        // sans ce cleanup le scroll de la page resterait bloqué en permanence.
        return () => {
            document.body.style.overflow = '';
        };
    }, [isExpanded]);

    return {
        // Exposé à la fois comme chaîne lisible ('EXPANDED'/'COLLAPSED', pratique pour du
        // debug ou un affichage conditionnel explicite) et comme booléen `isActive` (plus
        // direct à utiliser dans une condition JS comme `if (isActive)`).
        status: isExpanded ? 'EXPANDED' : 'COLLAPSED',
        isActive: isExpanded,
        expand,
        collapse
    };
};
