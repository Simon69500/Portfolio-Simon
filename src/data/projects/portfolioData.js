const img = (chemin) => `${import.meta.env.BASE_URL}${chemin}`;

export const portfolioData = [

    // Projet 1 : Estimmo-Savoies, il représente le projet phare de mon portfolio.
    {
        id: 1,
        isFeatured: true,  // Détermine que ce projet ira dans la Tuile D (8 colonnes)
        titre: "Estimmo-Savoies",
        slug: "estimmo-savoies",

        // Médias ( CaC Réf: Section 6.1 - Assets en WebP dans le dossier Public)
        coverImage: img("/images/projects/estimmo/cover.webp"),
        gallery: [ 
            img("/images/projects/estimmo/screen1.webp"),
            img("/images/projects/estimmo/screen2.webp"),
            img("/images/projects/estimmo/screen3.webp"),
            img("/images/projects/estimmo/screen4.webp"),
            img("/images/projects/estimmo/screen5.webp"),
            img("/images/projects/estimmo/screen6.webp") 
        ],

        // Stack Technique simplifiée pour les badges (Tuiles D)
        technologies: [ "React", "Symfony", "PostgreSQL", "PostGIS"],

        // Zone conceptuelle pour l'état "Expanded" (section 2.4)
        details: {
            contexte: "Application d'estimation immoblière croisant les données DVF et INSEE IRIS pour la région Savoie.",
            aspectsTechniques: " Utilisation de PostGIS pour la gestion des requêtes spatiales et de React-Hook-Form pour le front.",
            defis: "Croisement performant de gros volumes de données géolocalisées en temps réel.",
            solutions: "Mise en place d'index spatiaux sur PostgreSQL et optimisation des requêtes avec Doctrine ORM.",
            resultats: "MVP fonctionnel validé et évolutif pour la Haute-Savoie."
        },

        githubUrl: "",
        liveUrl: "https://estimmo-savoies.fr/",

    },

    // Projet 2 : Trouve ton artisan, il présenté dans la partie Mosaïque (Tuile F ou G)
    {
        id: 2,
        isFeatured: false, 
        titre: "Trouve Ton Artisan",
        slug: "trouve-ton-artisan",

        // Médias
        coverImage: img("/images/projects/trouve-ton-artisan/screen1.webp"),
        gallery: [
            img("/images/projects/trouve-ton-artisan/screen1.webp"),
            img("/images/projects/trouve-ton-artisan/screen2.webp"),
            img("/images/projects/trouve-ton-artisan/screen3.webp"),
            img("/images/projects/trouve-ton-artisan/screen4.webp"),
            img("/images/projects/trouve-ton-artisan/screen5.webp")
        ],

        // Stack Technique simplifiée pour les badges (Tuiles D)
        technologies: ["React", "Node.js", ""],

        // Zone conceptuelle pour l'état "Expanded"
        details: {
            contexte: "Devoir CEF - Création d’une plateforme web pour aider les habitants de la région Auvergne-Rhône-Alpes à trouver et contacter des artisans via un site accessible, responsive et sécurisé.",
            aspectsTechniques: "Mise en place d'une architecture REST sécurisée avec Express et Sequelize, développement du front-end en ReactJS et intégration des requêtes API via Axios.",
            defis: "Assurer la cohérence entre le frontend et l’API, garantir la sécurité et la performance, maintenir un design accessible et responsive, et déployer une solution hébergée fiable et maintenable.",
            solutions: "Mise en place d’une architecture REST sécurisée avec Express et Sequelize, développement du frontend avec ReactJS et Bootstrap/Sass, intégration des requêtes API via Axios sécurisées, tests pour conformité W3C et accessibilité, versionnage sur GitHub et déploiement en ligne du front et du back.",
            resultats: "Application fonctionnelle et accessible, avec recherche dynamique, fiches détaillées des artisans, formulaire de contact opérationnel, page 404 personnalisée et design validé. Le site est responsive, conforme aux standards WCAG 2.1, et entièrement hébergé."
        },

        githubUrl: "https://github.com/Simon69500/Trouve_ton_artisan_React.JS",
        liveUrl: "https://trouve-ton-artisan.vercel.app/"
    },

    // Projet 3 : Touche pas au klaxon, il présenté dans la partie Mosaïque (Tuile F ou G)
    {
    id: 3,
    isFeatured: false,
    titre: "Touche Pas Au Klaxon",
    slug: "touche-pas-au-klaxon",
    
    coverImage: img("/images/projects/touche-pas-klaxon/screen1.webp"),
    gallery: [
      img("/images/projects/touche-pas-klaxon/screen1.webp"),
      img("/images/projects/touche-pas-klaxon/screen2.webp"),
      img("/images/projects/touche-pas-klaxon/screen3.webp"),
      img("/images/projects/touche-pas-klaxon/screen4.webp"),
      img("/images/projects/touche-pas-klaxon/screen5.webp"),
      img("/images/projects/touche-pas-klaxon/screen6.webp"),
      img("/images/projects/touche-pas-klaxon/screen7.webp"),
      img("/images/projects/touche-pas-klaxon/screen8.webp")
    ],
    
    technologies: ["PHP", "MySQL"],
    
    details: {
      contexte: "Devoir CEF - Application web de gestion et création de trajets.",
      aspectsTechniques: "Backend robuste en PHP natif avec base de données relationnelle MySQL.",
      defis: "Sécurisation des données utilisateurs et gestion des droits d'accès (CRUD).",
      solutions: "Implémentation d'un système de session sécurisé et requêtes SQL préparées.",
      resultats: "Plateforme fonctionnelle avec espace d'administration complet."
    },
    
    githubUrl: "https://github.com/Simon69500/Touche-pas-au-klaxon",
    liveUrl: ""
  },

  //Projet 4 : 
  {
    id: 4,
    isFeatured: false,
    titre: "API Russel Port",
    slug: "api-russel-port",
    
    coverImage: img("/images/projects/api_russel/screen1.webp"),
    gallery: [
      img("/images/projects/api_russel/screen1.webp"),
      img("/images/projects/api_russel/screen2.webp"),
      img("/images/projects/api_russel/screen3.webp"),
      img("/images/projects/api_russel/screen4.webp"),
      img("/images/projects/api_russel/screen5.webp"),
      img("/images/projects/api_russel/screen6.webp")
    ],
    
    technologies: ["Node.js", "Express", "MongoDB"],
    
    details: {
      contexte: "Devoir CEF - Développement d’une API et d’un frontend administrateur pour le Port de Plaisance de Russell afin de gérer les catways, réservations et utilisateurs de manière sécurisée.",
      aspectsTechniques: "Architecture REST avec Express et Mongoose, authentification par JWT et documentation technique des endpoints.",
      defis: "Mettre en place une API REST sécurisée, gérer les relations entre catways et réservations, assurer un tableau de bord administrateur fonctionnel et documenté, et déployer l’application en ligne.",
      solutions: "Architecture REST avec Express et Mongoose, routes CRUD sécurisées, authentification via JWT, frontend minimal en EJS pour l’administration, documentation incluse, et hébergement de l’API en ligne avec accès sécurisé. Versionnage du projet sur GitHub.",
      resultats: "API fonctionnelle avec gestion complète des catways, réservations et utilisateurs. Tableau de bord administrateur opérationnel, sécurisation via JWT, validation des données et base MongoDB. L’ensemble est versionné sur GitHub."
    },
    
    githubUrl: "https://github.com/Simon69500/Creer_une_API",
    liveUrl: ""
  },

  //Projet 5 : 
  {
    id: 5,
    isFeatured: false,
    titre: "Au Petit Village",
    slug: "au_petit_village",
    
    coverImage: img("/images/projects/Au-petit-village/screen1.webp"),
    gallery: [
      img("/images/projects/Au-petit-village/screen1.webp"),
      img("/images/projects/Au-petit-village/screen2.webp"),
      img("/images/projects/Au-petit-village/screen3.webp"),
    ],
    
    technologies: ["Angular", "TypeScript"],
    
    details: {
      contexte: "Devoir CEF - Création d’un site e-commerce Angular pour la vente de figurines artisanales, avec catalogue interactif, tri et recherche, et respect de la charte graphique client.",
      aspectsTechniques: "Structuration autour de composants modulaires, routing paramétré, pipes personnalisées et services de centralisation des données.",
      defis: "Respecter la charte graphique imposée, intégrer les requis techniques liés à Angular (composants, routing, services et pipes), tout en assurant la cohérence visuelle et la performance du site sur tous les supports.",
      solutions: "Structuration du projet autour de cinq composants principaux, mise en place d’un routing paramétré, de pipes personnalisées pour le tri et la recherche, et d’un service pour centraliser les données produits. Les tests et ajustements visuels ont permis de garantir une expérience utilisateur fluide et conforme à la charte.",
      resultats: "Un site fluide et esthétique, respectant la charte graphique du client, permettant aux utilisateurs de consulter, trier et rechercher des produits facilement. L’ensemble du code est organisé en composants modulaires et versionné sur GitHub."
    },
    
    githubUrl: "https://github.com/Simon69500/Angular",
    liveUrl: ""
  },

    //Projet 6 : 
  {
    id: 5,
    isFeatured: false,
    titre: "",
    slug: "",
    
    coverImage: img("/images/projects/"),
    gallery: [
      img("/images/projects/"),
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