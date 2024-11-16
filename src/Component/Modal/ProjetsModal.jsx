import Artisan from '../../asset/trouve-ton-artisan.jpg';


    const ProjetsModal = [
        {
            id: 1,
            titre: 'WorldPress Ecommerce',
            description:'Ceci est un projet réaliser durant ma formation, le but est la mise en place d\'une plateforme Ecommerce avec WorldPress. ',
            link: 'https://github.com/Simon69500/Ecommerce' 
        },

        {
            id:2,
            titre:'Angular - Mon petit village',
            description:'Ceci est un projet réaliser durant ma formation, l\'objectif était la création d\'un site pour une boutique qui vends des produits Asterix et Obelix avec la technologie "Angular" .',
            link:'https://github.com/Simon69500/Angular'
        },

        {
            id: 3,
            titre:'ReactJS - Trouve ton artisan',
            image: Artisan,
            technologie: ['HTML5 ',' CSS3/SASS ',' JavaScript ',' ReactJS '],
            description:'Ceci est un projet réaliser durant ma formation, Mettre en place une plateforme qui permet aux utilisateurs de trouvé les artisans de leurs région et de faire appel à leurs services, site responsif et Mobile First avec la technologie "ReactJS" . ',
            link:'https://github.com/Simon69500/React.js'
        }
    ];

export default ProjetsModal ;