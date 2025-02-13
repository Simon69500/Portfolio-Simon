import Artisan from '../../asset/Projet-img/projet2/trouve-ton-artisan.jpg';
import Village from '../../asset/Projet-img/projet1/Au-petit-village.jpg';
import Plantes from '../../asset/Projet-img/projet3/la-vie-des-plantes.jpg';

import { imgVillage, imgArtisan, imgPlantes } from '../Img-modal/img-modal';


const ProjetsModal = [
    {
        id: 1,
        titre: 'WordPress - La vie des plantes',
        image: Plantes,
        images: imgPlantes, // Images pour un slider
        technologie: ['WordPress', 'WooCommerce', 'Elementor', 'WPForms'],
        description: `Projet réalisé dans le cadre de ma formation, consistant en la création d'un site e-commerce avec WordPress. Ce projet m'a permis de mettre en pratique mes compétences en développement web tout en travaillant sur un projet concret et appliqué dans un environnement de gestion de contenu.`,
        objectif: `Développer une plateforme e-commerce pour "La vie des plantes", une société spécialisée dans la vente de kits de plantation. Le site devait permettre l'achat en ligne de produits via WooCommerce et respecter la charte graphique définie pour le site.`,
        publicCible: `Population jeune entre 25 et 35 ans, vivant en milieu urbain, intéressée par la culture de plantes et le jardinage urbain.`,
        resultat: `Un site fonctionnel permettant de présenter les produits, de gérer les paiements en ligne et de proposer une expérience d'achat fluide pour les utilisateurs.`,
        défis: `Les principaux défis rencontrés ont été la mise en place du site en local en utilisant l'application "Local" pour gérer WordPress, l'importation du site sur un serveur FTP, ainsi que l'intégration des différents modules nécessaires au bon fonctionnement du site. La gestion des plugins WooCommerce, WPForms et Elementor a nécessité une attention particulière pour garantir leur bon fonctionnement.`,
        solutions: `Pour résoudre ces défis, j'ai utilisé l'application "Local" pour créer un environnement local pour le site WordPress. Une fois le site prêt, j'ai exporté et importé le projet sur un serveur FTP à l'aide de FileZilla, afin de le mettre en ligne. J'ai ensuite configuré les plugins WooCommerce pour le système de paiement, WPForms pour les formulaires de contact et Elementor pour la personnalisation des pages. Cela m'a permis d'assurer une compatibilité optimale entre le thème du site et les différentes fonctionnalités intégrées.`,
        link: 'https://github.com/Simon69500/Ecommerce',
        mobileFirst: false,
    },
    
    {
        id: 2,
        titre: 'Angular - Au petit village',
        image: Village,
        images: imgVillage, // Images pour un slider
        technologie: ['HTML5', 'CSS3/SASS', 'JavaScript', 'Angular (Routing, Services, Pipes)', 'TypeScript'],
        description: `Projet réalisé pendant ma formation, ayant pour objectif la création d'un site vitrine responsive avec Angular. Le projet visait à développer une plateforme permettant de consulter un catalogue de produits, triés par prix et recherchables en fonction des mots-clés.`,
        objectif: `Développer un site web interactif pour "Au petit village", une entreprise fabriquant des figurines inspirées d'Astérix et Obélix. Le site devait non seulement permettre aux utilisateurs de consulter un catalogue de produits, mais aussi d'offrir une expérience fluide grâce à un tri efficace des produits par prix et à une recherche rapide par nom de produit.`,
        publicCible: `Les passionnés de l'univers d'Astérix et Obélix, généralement âgés de 30 à 55 ans, à la recherche de figurines uniques qui rappellent les célèbres Gaulois et leurs aventures.`,
        resultat: `Le site respecte la charte graphique du client avec une navigation claire, une présentation soignée des produits et une fonctionnalité de tri optimisée. Une barre de recherche a été intégrée pour permettre aux utilisateurs de trouver rapidement les produits. Le site est également entièrement responsive et bien adapté aux utilisateurs sur différentes plateformes.`,
        défis: `L'un des défis majeurs du projet a été l'implémentation de la fonctionnalité de tri des prix en croissant/décroissant, tout en veillant à la réactivité du site pour une expérience utilisateur fluide. La mise en place d’une barre de recherche en temps réel, permettant aux utilisateurs de filtrer les produits efficacement, a également été un défi technique intéressant.`,
        solutions: `Pour résoudre ces problèmes, j'ai utilisé des composants réutilisables d'Angular, tels que 'ngFor' pour le rendu dynamique des produits. Pour la fonctionnalité de tri, j'ai créé un pipe personnalisé afin de trier efficacement les produits par prix. J'ai également mis en place un système de filtrage en temps réel avec un autre pipe, pour permettre aux utilisateurs de trouver facilement les produits correspondant à leurs critères.`,
        link: 'https://github.com/Simon69500/Angular',
        mobileFirst: true, 
    },
    

    {
        id: 3,
        titre: 'ReactJS - Trouve ton artisan',
        image: Artisan,
        images: imgArtisan, // Images pour un slider
        technologie: ['HTML5', 'CSS3/SASS', 'Bootstrap', 'JavaScript', 'ReactJS', 'Figma'],
        description: `Projet réalisé dans le cadre de ma formation, pour le développement de la partie frontend d'une plateforme de mise en relation entre particuliers et artisans de la région Auvergne-Rhône-Alpes. Ce projet a impliqué une approche mobile-first et un design validé avant la phase de développement.`,
        objectif: `Créer une interface utilisateur moderne et accessible, permettant aux utilisateurs de trouver un artisan correspondant à leurs besoins. Le site devait être responsive, offrir une recherche dynamique avec des filtres et permettre de guider l'utilisateur vers un formulaire de contact pour rentrer en relation avec un artisan.`,
        publicCible: `Tous les habitants de la région Auvergne-Rhône-Alpes, incluant jeunes, seniors et personnes en situation de handicap.`,
        resultat: `Un site conforme aux normes WCAG 2.1, offrant une expérience fluide grâce à une navigation optimisée, et une fonctionnalité de recherche avancée avec plusieurs filtres comme le nom, le métier, et la ville. Une maquette validée avant développement et une intégration frontend dynamique basée sur un fichier JSON ont été réalisées.`,
        défis: `L'un des principaux défis du projet a été de développer un site en respectant les principes du mobile-first, ce qui a impliqué une conception entièrement responsive. Il a aussi fallu intégrer une API pour partager la liste des artisans et permettre aux utilisateurs de filtrer et rechercher un artisan selon leurs critères.`,
        solutions: `Pour résoudre ces défis, j'ai utilisé ReactJS pour la création dynamique des composants et la gestion de l'état. La barre de recherche a été équipée de filtres permettant de rechercher par nom, métier, et ville, offrant une expérience utilisateur fluide et interactive. Une navigation fluide a été mise en place en utilisant les ID des cartes des artisans sélectionnés pour maintenir une continuité dans l'expérience. De plus, l'interface a été conçue en respectant les normes d'accessibilité (WCAG 2.1).`,
        link: 'https://github.com/Simon69500/React.js',
        mobileFirst: true,
    }
    ,
];

export default ProjetsModal;

