const img = (chemin) => `${import.meta.env.BASE_URL}${chemin}`;

// Configuration centralisée des types de projet, sur le même principe que techData.js
// Objectif : informer clairement le visiteur du contexte de réalisation
// (un projet "professionnel" implique un client réel, contrairement à un exercice de formation)
export const projectTypeData = {

    formation: {
        label: "Projet de formation",
        logoUrl: img("/images/projects/cef.svg"), // Logo officiel du centre de formation
        iconBehavior: "colored" 
    },

    professionnel: {
        label: "Projet professionnel",
        icon: "briefcase"
    },

    personnel: {
        label: "Projet personnel",
        icon: "lightbulb"
    }
}