export const portfolioData = [

    // Projet 1 : Estimmo-Savoies, il représente le projet phare de mon portfolio.
    {
        id: 1,
        isFeatured: true,  // Détermine que ce projet ira dans la Tuile D (8 colonnes)
        titre: "Estimmo-Savoies",
        slug: "estimmo-savoies",

        // Médias ( CaC Réf: Section 6.1 - Assets en WebP dans le dossier Public)
        coverImage: "/images/projects/estimmo/screen1.webp",
        gallery: [ 
            "/images/projects/estimmo/screen1.webp",
            "/images/projects/estimmo/screen2.webp",
            "/images/projects/estimmo/screen3.webp",
            "/images/projects/estimmo/screen4.webp",
            "/images/projects/estimmo/screen5.webp",
            "/images/projects/estimmo/screen6.webp" 
        ],

        // Stack Technique simplifiée pour les badges (Tuiles D)
        technologies: [ "ReactJS", "Symfony", "PostgreSQL", "PostGIS"],

        // Zone conceptuelle pour l'état "Expanded" (section 2.4)
        details: {
            contexte: "Application d'estimation immoblière croisant les données DVF et INSEE IRIS pour la région Savoie.",
            aspectsTechniques: " Utilisation de PostGIS pour la gestion des requêtes spatiales et de React-Hook-Form pour le front.",
            defis: "Croisement performant de gros volumes de données géolocalisées en temps réel.",
            solutions: "Mise en place d'index spatiaux sur PostgreSQL et optimisation des requêtes avec Doctrine ORM.",
            resultats: "MVP fonctionnel validé et évolutif pour la Haute-Savoie."
        },

        githubURL: "",
        liveURL: "https://estimmo-savoies.fr/",

    },

    // Projet 2 : Trouve ton artisan, il présenté dans la partie Mosaïque (Tuile F ou G)
    {
        id: 2,
        isFeatured: false, 
        titre: "Trouve Ton Artisan",
        slug: "trouve-ton-artisan",

        // Médias
        coverImage: "/images/projects/trouve-ton-artisan.webp",
        gallery: [
            "/images/projects/trouve-ton-artisan/screen1.webp",
            "/images/projects/trouve-ton-artisan/screen2.webp",
            "/images/projects/trouve-ton-artisan/screen3.webp",
            "/images/projects/trouve-ton-artisan/screen4.webp",
            "/images/projects/trouve-ton-artisan/screen5.webp"
        ],

        // Stack Technique simplifiée pour les badges (Tuiles D)
        technologies: ["ReactJS", "NodeJS", ""],

        // Zone conceptuelle pour l'état "Expanded"
        details: {
            contexte: "Annuaire interactif de mise en relation entre particulier et artisans locaux.",
            aspectsTechniques: "",
            defis: "",
            solutions: "",
            resultats: ""
        },

        githubUrl: "https://github.com/ton-profil/trouve-ton-artisan",
        liveUrl: ""
    },

    // Projet 3 : Touche pas au klaxon, il présenté dans la partie Mosaïque (Tuile F ou G)
    {
    id: 3,
    isFeatured: false,
    titre: "Touche Pas Au Klaxon",
    slug: "touche-pas-au-klaxon",
    
    coverImage: "/images/projects/tpk/cover.webp",
    gallery: [
      "/images/projects/touche-pas-klaxon/screen1.webp",
      "/images/projects/touche-pas-klaxon/screen2.webp",
      "/images/projects/touche-pas-klaxon/screen3.webp",
      "/images/projects/touche-pas-klaxon/screen4.webp",
      "/images/projects/touche-pas-klaxon/screen5.webp",
      "/images/projects/touche-pas-klaxon/screen6.webp",
      "/images/projects/touche-pas-klaxon/screen7.webp",
      "/images/projects/touche-pas-klaxon/screen8.webp"
    ],
    
    technologies: ["PHP", "MySQL", "Bootstrap"],
    
    details: {
      contexte: "Application web de gestion et création de trajets.",
      aspectsTechniques: "Backend robuste en PHP natif avec base de données relationnelle MySQL.",
      defis: "Sécurisation des données utilisateurs et gestion des droits d'accès (CRUD).",
      solutions: "Implémentation d'un système de session sécurisé et requêtes SQL préparées.",
      resultats: "Plateforme fonctionnelle avec espace d'administration complet."
    },
    
    githubUrl: "https://github.com/ton-profil/touche-pas-au-klaxon",
    liveUrl: ""
  },

  //Projet 4 : 
  {
    id: 4,
    isFeatured: false,
    titre: "API Russel Port",
    slug: "api-russel-port",
    
    coverImage: "/images/projects/api_russel/screen1.webp",
    gallery: [
      "/images/projects/api_russel/screen1.webp",
      "/images/projects/api_russel/screen2.webp",
      "/images/projects/api_russel/screen3.webp",
      "/images/projects/api_russel/screen4.webp",
      "/images/projects/api_russel/screen5.webp",
      "/images/projects/api_russel/screen6.webp"
    ],
    
    technologies: ["Node.js", "Express", "MongoDB"],
    
    details: {
      contexte: "",
      aspectsTechniques: "",
      defis: "",
      solutions: "",
      resultats: ""
    },
    
    githubUrl: "",
    liveUrl: ""
  },

  //Projet 5 : 
  {
    id: 5,
    isFeatured: false,
    titre: "",
    slug: "",
    
    coverImage: "/images/projects/",
    gallery: [
      "/images/projects/",
    ],
    
    technologies: [""],
    
    details: {
      contexte: "",
      aspectsTechniques: "",
      defis: "",
      solutions: "",
      resultats: ""
    },
    
    githubUrl: "",
    liveUrl: ""
  }
]