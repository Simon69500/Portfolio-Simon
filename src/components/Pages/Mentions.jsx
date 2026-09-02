/**
 * Page de mentions légales.
 *
 * ATTENTION — deux problèmes réels à connaître avant de retoucher ce fichier :
 * 1. Composant ORPHELIN : aucun autre fichier de src/ n'importe Mentions.jsx, et
 *    react-router-dom (présent dans package.json) n'est utilisé nulle part dans le code —
 *    cette page n'est donc accessible par AUCUN chemin dans l'application actuelle
 *    (App.jsx ne rend que <Home />). Voir DOCUMENTATION.md, point 7 des "Points
 *    d'attention connus", pour les deux options possibles (la brancher vraiment via un
 *    routeur, ou la supprimer avec la dépendance si elle n'est plus utile).
 * 2. Classes Bootstrap mortes : comme dans Footer.jsx, `d-flex`, `flex-column`, `text`,
 *    `text-strong`, `text-decoration-none`, `fst-italic` sont des classes Bootstrap (V2 du
 *    portfolio), sans effet ici puisque Bootstrap n'est pas installé — seules `p-5`, `p-3`
 *    etc. fonctionnent réellement car elles existent aussi telles quelles dans Tailwind.
 */
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
        Ce site utilise Google Analytics pour mesurer l'audience. Les données sont anonymisées et utilisées uniquement à des fins statistiques. Vous pouvez désactiver les cookies via votre navigateur.
        </p>

        <p className="text fst-italic pb-5">
            © 2024 Simon Badin. Tous droits réservés.
        </p>
        </section>
    )
}

export default Mentions;
