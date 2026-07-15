import { useState, useEffect, useCallback, useRef } from "react";

// Durée de l'animation, à synchroniser avec les classes Tailwind
const TRANSITION_DURATION = 500; 

export const useCardExpansion = (projetId, expansionProjetId, setExpansionProjetId, cardRef) => {

   // 1. FSM : Les 4 états stricts
   const [status, setStatus] = useState('COLLAPSED');

   // 2. Stockage des dimensions spatiales initiales
   const [coords, setCoords] = useState(null);

   // Détermine si le projet courant est celui qui est étendu au niveau global
   const isActive = expansionProjetId === projetId ;

   // Référence pour nettoyer les timeouts et éviter les fuites de mémoire
   const timerRef = useRef(null);

   // Déclencheur d'ouverture
   const expand = useCallback(() => {

    // Sécurité : on n'étend que si la carte est au repos et que la référence existe
    if (!cardRef.current || status !== 'COLLAPSED') return;

    // Capture des dimensions eactes dans le viewport (DOM natif)
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
    });

    // Début de la cinématique
    setStatus('TRANSITIONING');
    setExpansionProjetId(projetId);

    // Passage automatique à EXPANDED après la durée de l'animation CSS 
    timerRef.current = setTimeout(() => {
        setStatus('EXPANDED');
    }, TRANSITION_DURATION);
   }, [projetId, setExpansionProjetId, status, cardRef]);

   // Déclencheur de fermeture
   const collapse = useCallback(() => {
    // Sécurité : on ne ferme que si la carte est totalement ouverte
    if(status !== 'EXPANDED') return

    setStatus('REVERTING');

    // Retour à la normale après l'animation
    timerRef.current = setTimeout(() => {
        setStatus('COLLAPSED');
        setExpansionProjetId(null);
    }, TRANSITION_DURATION);
   }, [status, setExpansionProjetId]);

   // 3. Effet de bord : Gel du défilement (Scroll Lock)
   useEffect(() => {
    if(status === 'TRANSITIONING' || status === 'EXPANDED') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    // Cleanup function (Performances / React 18 Strict Mode)
    return() => {
        document.body.style.overflow = '';
    };
   }, [status]);

   // Nettoyage des timeouts au démontage du composant
   useEffect(() => {
    return() => {
        if(timerRef.current) clearTimeout(timerRef.current);
    };
   }, []);

   // On expose unique les éléments nécessaire pour l'UI (Principe d'encapsulation)
   return {
    status,
    coords,
    isActive,
    expand,
    collapse
   };
};