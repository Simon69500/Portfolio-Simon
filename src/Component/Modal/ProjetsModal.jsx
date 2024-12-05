import Artisan from '../../asset/trouve-ton-artisan.jpg';
import Village from '../../asset/Au-petit-village.jpg';
import Plantes from '../../asset/la-vie-des-plantes.jpg';


const ProjetsModal = [
    {
        id: 1,
        titre: 'WordPress - La vie des plantes',
        image: Plantes,
        images: [Plantes, Village, Artisan], // Images pour un slider
        technologie: ['WordPress', 'WooCommerce', 'Elementor', 'WPForms'],
        description: `Projet réalisé dans le cadre de ma formation, consistant en la création d'un site e-commerce avec WordPress.`,
        objectif: `Développer une plateforme e-commerce pour "La vie des plantes", une société spécialisée dans la vente de kits de plantation. Le site devait respecter la charte graphique définie et intégrer des fonctionnalités WooCommerce pour permettre l'achat en ligne.`,
        publicCible: `Population jeune entre 25 et 35 ans, vivant en milieu urbain.`,
        resultat: `Un site fonctionnel mettant en avant trois produits clés avec des descriptions, des prix et une option d'ajout au panier.`,
        link: 'https://github.com/Simon69500/Ecommerce',
    },
    {
        id: 2,
        titre: 'Angular - Au petit village',
        image: Village,
        images: [Village, Artisan, Plantes],
        technologie: ['HTML5', 'CSS3/SASS', 'JavaScript', 'Angular'],
        description: `Projet réalisé pendant ma formation, ayant pour objectif la création d'un site vitrine avec Angular.`,
        objectif: `Développer un site web pour "Au petit village", une entreprise fabriquant des figurines inspirées d'Astérix et Obélix. Le site devait permettre de consulter un catalogue de produits et de contacter l'entreprise via un formulaire.`,
        publicCible: `Population nostalgique entre 30 et 55 ans, passionnée par les aventures des célèbres Gaulois.`,
        resultat: `Un respectant la charte graphique du client, avec une navigation claire et une présentation attractive des produits.`,
        link: 'https://github.com/Simon69500/Angular',
    },
    {
        id: 3,
        titre: 'ReactJS - Trouve ton artisan',
        image: Artisan,
        images: [Artisan, Plantes, Village],
        technologie: ['HTML5', 'CSS3/SASS', 'Bootstrap', 'JavaScript', 'ReactJS', 'Figma'],
        description: `Projet réalisé dans le cadre de ma formation, pour le développement de la partie frontend d'une plateforme artisanale.`,
        objectif: `Créer une interface utilisateur moderne et accessible pour une plateforme dédiée à la mise en relation des particuliers avec des artisans de la région Auvergne-Rhône-Alpes. Le design devait être validé avant la phase de développement.`,
        publicCible: `Tous les habitants de la région (jeunes, seniors, personnes en situation de handicap).`,
        resultat: `Un site mobile-first, conforme aux normes WCAG 2.1, avec une maquette validée par le client et une intégration frontend dynamique basée sur un fichier JSON.`,
        link: 'https://github.com/Simon69500/React.js',
    },
];

export default ProjetsModal;

