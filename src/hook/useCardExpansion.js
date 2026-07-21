import { useState, useEffect, useCallback } from "react";

export const useCardExpansion = (projetId, expansionProjetId, setExpansionProjetId) => {
    // État binaire simple et robuste pour éviter les conflits de layout
    const isExpanded = expansionProjetId === projetId;

    // Déclencheur d'ouverture
    const expand = useCallback(() => {
        setExpansionProjetId(projetId);
    }, [projetId, setExpansionProjetId]);

    // Déclencheur de fermeture
    const collapse = useCallback(() => {
        setExpansionProjetId(null);
    }, [setExpansionProjetId]);

    // Gel du défilement global (Scroll Lock) conforme au Cahier des Charges (Section 2.4)[cite: 2]
    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isExpanded]);

    return {
        status: isExpanded ? 'EXPANDED' : 'COLLAPSED',
        isActive: isExpanded,
        expand,
        collapse
    };
};