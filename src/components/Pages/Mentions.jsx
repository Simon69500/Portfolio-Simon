
const Mentions = () => {

    return (
        <section className="mentions d-flex flex-column p-5">
        <h2 className="title text-center p-5">Mentions légales</h2>

        <p className="text p-3">
            <strong className="text-strong">Propriétaire du site :</strong> 
            <br />Simon Badin  
            <br/>Développeur Web & Mobile Fullstack  
            <br/>Email : simonsola67@gmail.com
        </p>

        <p className="text p-3">
                <strong className="text-strong">Hébergement :</strong><br/>
                Ce site est hébergé par GitHub Pages, un service de GitHub, Inc.<br/>
                Siège social : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.<br/>
                Site web : <a className="text text-decoration-none" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">https://pages.github.com</a>
        </p>

        <p className="text p-3">
        <strong className="text-strong"> Cookies et données personnelles :</strong><br/>
        Ce site utilise Google Analytics pour mesurer l’audience. Les données sont anonymisées et utilisées uniquement à des fins statistiques. Vous pouvez désactiver les cookies via votre navigateur.
        </p>
        
        <p className="text fst-italic pb-5">
            © 2024 Simon Badin. Tous droits réservés.
        </p>
        </section>
    )
}    

export default Mentions;