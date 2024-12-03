import Artisan from '../../asset/trouve-ton-artisan.jpg';
import Village from '../../asset/Au-petit-village.jpg';
import Plantes from '../../asset/la-vie-des-plantes.jpg';


    const ProjetsModal = [
        {
            id: 1,
            titre: 'WorldPress - La vie des plantes',
            image: Plantes,
            images: [Plantes, Village, Artisan], 
            technologie: ['HTML5 ',' CSS3/SASS ',' JavaScript ',' ReactJS '],
            description:'Ceci est un projet réaliser durant ma formation, le but est la mise en place d\'une plateforme Ecommerce avec WorldPress. ',
            link: 'https://github.com/Simon69500/Ecommerce' 
        },

        {
            id:2,
            titre:'Angular - Au petit village',
            image: Village,
            images: [Plantes, Village, Artisan], 
            technologie: ['HTML5 ',' CSS3/SASS ',' JavaScript ',' Angular '],
            description:'Ceci est un projet réaliser durant ma formation, l\'objectif était la création d\'un site pour une boutique qui vends des produits Asterix et Obelix avec la technologie "Angular" .',
            link:'https://github.com/Simon69500/Angular'
        },

        {
            id: 3,
            titre:'ReactJS - Trouve ton artisan',
            image: Artisan,
            images: [Plantes, Village, Artisan], 
            technologie: ['HTML5 ',' CSS3/SASS ', 'Bootstrap',' JavaScript ',' ReactJS ', 'Figma'],
            description:'Ceci est un projet réaliser durant ma formation, L\'objectif qui m\'avait était donné est de mettre en place une plateforme pour la région Auvergen-Rhône-Aples, qui permetteraient au artisant d\'avoir une visibilité et au utilisateur de trouver des artisans prêt de chez eux pour faire appel à leurs services, on m\'avait donné quelque contrainte pour réaliser le projet, avoir un site responsif et Mobile First avec des technologie imposé . ',
            link:'https://github.com/Simon69500/React.js'
        }
    ];

export default ProjetsModal ;