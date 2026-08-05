const img = (chemin) => `${import.meta.env.BASE_URL}${chemin}`;

export const portfolioData = [

    // Projet 1 : Estimmo-Savoies, il représente le projet phare de mon portfolio.
    {
        id: 1,
        isFeatured: true,  // Détermine que ce projet ira dans la Tuile D (8 colonnes)
        type: "professionnel",
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
        technologies: [ "React", "Symfony", "PostgreSQL", "PostGIS", "OVH Cloud", "Docker", "Figma"],

        // Zone conceptuelle pour l'état "Expanded" (section 2.4)
       details: {
            demoMedia: {
                src: img("/videos/projects/estimmo/demo.mp4"),
                poster: img("/images/projects/estimmo/cover.webp")
            },
            contexte: "Un agent immobilier indépendant en Savoie constatait que les outils d'estimation nationaux (type SeLoger) lissaient trop les données pour être pertinents sur un marché local aux fortes disparités. Objectif : concevoir et livrer de bout en bout un outil d'estimation sur-mesure basé sur des règles métier locales, permettant de générer des leads qualifiés en échange d'une estimation précise du bien.",         
            aspectsTechniques: {
                intro: "Une stack complète, du frontend mobile-first jusqu'au déploiement en production.",
                points: [
                    "Frontend : React (Vite), React Hook Form + Yup pour la validation, Axios pour les appels API, Bootstrap/Sass pour l'intégration mobile-first",
                    "Backend : API REST Symfony avec Doctrine ORM, PostgreSQL couplé à PostGIS pour l'ingénierie géospatiale",
                    "Sécurité & déploiement : authentification JWT en cookies HttpOnly, conteneurisation Docker sur VPS OVH avec Nginx et certificat SSL/TLS"
                ]
            },
            defis: {
                intro: "Piloter un projet de bout en bout tout en résolvant des contraintes techniques et légales fortes.",
                points: [
                    "Cycle de vie complet : cadrage du besoin, maquettage Figma mobile-first, pilotage Agile (sprints, démos régulières), développement, mise en production et maintenance",
                    "Croisement de données géospatiales complexes (DVF, IRIS INSEE) sans latence perceptible",
                    "Conformité RGPD et accessibilité (WCAG 2.1 AA)",
                    "Prévention des failles de sécurité (IDOR)"
                ]
            },
            solutions: {
                intro: "Des choix techniques concrets pour répondre à ces défis.",
                points: [
                    "Index spatial GIST + requêtes PostGIS natives (ST_Intersects) via Doctrine DBAL pour la détection instantanée des quartiers",
                    "Tables analytiques pré-calculées garantissant des temps de réponse instantanés",
                    "Sécurisation de l'API via le pattern DTO/Mapper et contrôle systématique de propriété des ressources",
                    "Couverture du moteur de calcul par des tests unitaires (PHPUnit)"
                ]
            },
            resultats: {
                intro: "Un produit livré, validé sur le terrain, et maintenu dans la durée.",
                points: [
                    "Déployé en production sur un nom de domaine dédié (estimmo-savoies.fr)",
                    "Validé par une phase de tests utilisateurs (UAT) avec agents immobiliers et particuliers",
                    "Sécurisation continue via audits de dépendances (composer audit, npm audit)",
                    "Feuille de route V2 déjà définie : refactoring et amélioration UX/UI, avant l'extension de l'algorithme au marché de la Haute-Savoie"
                ]
            },
            metrics: {
                total: {
                    label: "Estimations réalisées",
                    value: 240,
                    sublabel: "depuis la mise en production"
                },
                origine: [
                    {
                        label: "Par des professionnels",
                        value: 105,
                        sublabel: "usage récurrent par mon client et son réseau professionnel"
                    },
                    {
                        label: "Par des particuliers",
                        value: 135,
                        sublabel: "dont 96 prospects uniques ayant généré un lead qualifié pour mon client"
                    }
                ]
            },
            role: [
                { 
                    title: "Pilotage de projet & relation client", 
                    description: "Cadrage du besoin avec le client et rédaction du cahier des charges, pilotage en méthodologie Agile (sprints de deux semaines, démonstrations régulières) et arbitrage du backlog entre valeur métier et faisabilité technique. Rôle tenu en autonomie complète, du premier échange client à la mise en production."
                },
                { 
                    title: "Conception technique & architecture", 
                    description: "Conception de l'architecture Frontend/Backend (React, API REST Symfony) et des choix de sécurité associés (authentification JWT en cookie httpOnly, protection CSRF, prévention des failles IDOR, pattern DTO/Mapper). Choix assumé de faire évoluer l'architecture de données vers PostgreSQL/PostGIS pour permettre des calculs géospatiaux fiables."
                },
                { 
                    title: "Data engineering & algorithme métier", 
                    description: "Sélection, nettoyage et croisement de sources de données publiques (transactions DVF, découpage IRIS de l'INSEE) via un script Python, pour alimenter un moteur de calcul statistique et géospatial sur-mesure. Mise en place de tables analytiques pré-calculées garantissant des temps de réponse instantanés."
                },
                { 
                    title: "Qualité & mise en production", 
                    description: "Sécurisation du moteur de calcul par une suite de tests unitaires (PHPUnit), gestion versionnée des évolutions de la base de données (Doctrine Migrations), déploiement conteneurisé (Docker) sur une infrastructure française (OVH Cloud)."
                }
            ],         
            },

            githubUrl: "https://github.com/Simon69500/estimmo-savoies-presentation",
            liveUrl: "https://estimmo-savoies.fr/",

    },

    // Projet 2 : Trouve ton artisan, il présenté dans la partie Mosaïque (Tuile F ou G)
    {
        id: 2,
        isFeatured: false, 
        type: "formation",        
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
        technologies: ["React", "Node.js", "Express", "MySQL", "Railway", "Vercel"],

        // Zone conceptuelle pour l'état "Expanded"
        details: {
            contexte: "La région Auvergne-Rhône-Alpes ne disposait d'aucune plateforme pour mettre en relation ses habitants avec les artisans locaux. Objectif : permettre à tout particulier de trouver facilement un artisan par catégorie et de le contacter via un formulaire, sur un site accessible (WCAG 2.1) et pensé mobile first.",
            aspectsTechniques: "Développement du frontend avec ReactJS, Bootstrap et Sass, associé à une API REST sécurisée construite avec Express et Sequelize pour l'accès à la base de données MySQL.",
            defis: "Concevoir une interface accessible à tous les publics (jeunes, personnes âgées, personnes en situation de handicap) tout en respectant une contrainte mobile first, et sécuriser l'accès à l'API afin qu'elle ne soit interrogeable que par le frontend de l'application.",
            solutions: "Mise en place d'une architecture REST sécurisée avec Express et Sequelize, développement du frontend avec ReactJS et Bootstrap/Sass, intégration de requêtes API sécurisées via Axios, tests de conformité W3C et accessibilité, versionnage sur GitHub et déploiement en ligne du front et du back.",
            resultats: "Application fonctionnelle et accessible, avec recherche dynamique, fiches détaillées des artisans, formulaire de contact opérationnel, page 404 personnalisée et design validé. Le site est responsive, conforme aux standards WCAG 2.1, et entièrement hébergé."
          },

        githubUrl: "https://github.com/Simon69500/Trouve_ton_artisan_React.JS",
        liveUrl: "https://trouve-ton-artisan-react-js.vercel.app/"
    },

    // Projet 3 : Touche pas au klaxon, il présenté dans la partie Mosaïque (Tuile F ou G)
    {
    id: 3,
    isFeatured: false,
    type: "formation",    
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
    
    technologies: ["PHP", "MySQL","Railway"],
    
    details: {
        contexte: "Dans une grande entreprise multi-sites, de nombreux trajets inter-sites étaient réalisés en doublon avec un faible taux d'occupation des véhicules. Objectif : développer une application intranet permettant de diffuser les trajets planifiés au sein de l'entreprise pour favoriser le covoiturage entre collaborateurs.",
        aspectsTechniques: "Backend en PHP natif structuré selon une architecture MVC, connecté à une base de données MySQL, avec un frontend construit sur Bootstrap et Sass.",
        defis: "Distinguer les droits d'accès selon trois profils (visiteur, employé connecté, administrateur), sécuriser l'authentification et les données utilisateurs, et garantir la cohérence des trajets saisis (agences de départ/arrivée distinctes, chronologie des dates).",
        solutions: "Mise en place d'un système de session sécurisé, de requêtes SQL préparées pour prévenir les injections, et de contrôles de cohérence métier sur la création des trajets.",
        resultats: "Plateforme fonctionnelle avec trois niveaux d'accès (visiteur, utilisateur connecté, administrateur), gestion complète des trajets et des agences, et espace d'administration pour la supervision des données."
    },
    
    githubUrl: "https://github.com/Simon69500/Touche-pas-au-klaxon",
    liveUrl: "https://touche-pas-au-klaxon-production.up.railway.app/"
  },

  //Projet 4 : 
  {
    id: 4,
    isFeatured: false,
    type: "formation",
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
    
    technologies: ["Node.js", "Express", "MongoDB","Render"],
    
    details: {
      contexte: "La capitainerie du port de plaisance de Russell ne disposait d'aucune solution pour digitaliser la gestion de ses réservations de catways. Objectif : concevoir une API privée sécurisée, accompagnée d'un frontend permettant la gestion complète (CRUD) des catways, réservations et utilisateurs.",
      aspectsTechniques: "Architecture REST avec Express et Mongoose, authentification par JWT et documentation technique des endpoints.",
      defis: "Concevoir des routes REST respectant les conventions du protocole (verbes HTTP, sous-ressources pour les réservations rattachées à un catway) sur trois entités liées, sécuriser l'accès à une API destinée à rester privée, et garantir la cohérence des données entre catways et réservations.",
      solutions: "Architecture REST avec Express et Mongoose, routes CRUD sécurisées, authentification via JWT, frontend minimal en EJS pour l'administration, documentation incluse, et hébergement de l'API en ligne avec accès sécurisé. Versionnage du projet sur GitHub.",
      resultats: "API fonctionnelle avec gestion complète des catways, réservations et utilisateurs. Tableau de bord administrateur opérationnel, sécurisation via JWT, validation des données et base MongoDB. L'ensemble est versionné sur GitHub."
    },

    githubUrl: "https://github.com/Simon69500/Creer_une_API",
    liveUrl: "https://api-port-de-plaisance-russel.onrender.com/"
  },

  //Projet 5 : 
  {
    id: 5,
    isFeatured: false,
    type: "formation",
    titre: "Au Petit Village",
    slug: "au_petit_village",
    
    coverImage: img("/images/projects/Au-petit-village/screen1.webp"),
    gallery: [
      img("/images/projects/Au-petit-village/screen1.webp"),
      img("/images/projects/Au-petit-village/screen2.webp"),
      img("/images/projects/Au-petit-village/screen3.webp"),
    ],
    
    technologies: ["Angular", "TypeScript", "Vercel"],
    
    details: {
        contexte: "L'entreprise \"Au petit village\", qui confectionne des figurines artisanales inspirées d'Astérix & Obélix, ne disposait d'aucune vitrine en ligne. Objectif : concevoir avec Angular un site responsive respectant sa charte graphique, permettant de consulter le catalogue de produits, de trier/rechercher parmi les figurines, et de contacter l'entreprise.",
        aspectsTechniques: "Structuration autour de composants modulaires, routing paramétré, pipes personnalisées et services de centralisation des données.",
        defis: "Respecter une charte graphique stricte (typographies et palette imposées) tout en couvrant les exigences techniques du framework Angular (routing, services, pipes, composants), et garantir une expérience cohérente et performante sur l'ensemble des supports.",
        solutions: "Structuration du projet autour de cinq composants principaux, mise en place d'un routing paramétré, de pipes personnalisées pour le tri et la recherche, et d'un service pour centraliser les données produits. Les tests et ajustements visuels ont permis de garantir une expérience utilisateur fluide et conforme à la charte.",
        resultats: "Un site fluide et esthétique, respectant la charte graphique du client, permettant aux utilisateurs de consulter, trier et rechercher des produits facilement. L'ensemble du code est organisé en composants modulaires et versionné sur GitHub."
    },
    
    githubUrl: "https://github.com/Simon69500/Angular",
    liveUrl: "https://aupetitvillage-zeta.vercel.app/"
  },
]