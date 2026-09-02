import { useState } from "react"

/**
 * Gère l'intégralité du formulaire de contact : les valeurs saisies, la validation,
 * l'envoi vers Formspree et l'état d'avancement de la soumission.
 *
 * Isoler cette logique dans un hook plutôt que directement dans le composant Contact.jsx
 * permet de faire évoluer la validation ou l'envoi sans toucher au JSX/affichage, et
 * inversement de retoucher l'UI sans risquer de casser la logique métier.
 *
 * @returns {{
 *   formData: { firstName: string, lastName: string, email: string, message: string },
 *   status: 'idle' | 'loading' | 'success' | 'error',
 *   errors: Object<string, string>,
 *   handleChange: (e: Event) => void,
 *   handleSubmit: (e: Event) => Promise<void>
 * }}
 */
export const useContactForm = () => {
    // Un seul objet d'état pour les 4 champs plutôt que 4 useState séparés : les champs
    // du formulaire changent ensemble logiquement (ils appartiennent au même formulaire),
    // et handleChange ci-dessous peut ainsi mettre à jour n'importe quel champ avec une
    // seule fonction générique au lieu d'un handler dédié par champ.
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    // --- Gestion de la FSM (Finite State Machine / machine à états finis) ---
    // Plutôt que plusieurs booléens indépendants (isLoading, isSuccess, isError, qui
    // pourraient techniquement être tous vrais en même temps par erreur de logique),
    // on utilise UNE seule variable `status` qui ne peut prendre qu'une valeur parmi
    // 'idle' | 'loading' | 'success' | 'error' à la fois. Ça rend les états impossibles
    // (ex: "en cours de chargement ET en erreur") non représentables par construction.
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    /**
     * Valide les champs du formulaire et remplit `errors` en conséquence.
     * @returns {boolean} true si aucun champ n'est en erreur.
     */
    const validate = () => {
        const newErrors = {};
        // Regex de validation email : vérifie la forme générale "texte@texte.texte" sans
        // espaces ni "@" en trop. [^\s@]+ signifie "un ou plusieurs caractères qui ne sont
        // ni un espace (\s) ni un @". Ce n'est pas une validation RFC complète (aucune regex
        // ne l'est vraiment), juste un filtre suffisant pour attraper les erreurs de saisie
        // évidentes côté client — la vraie validation d'un email se fait toujours côté serveur.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.firstName.trim().length < 2) {
            newErrors.firstName = "Le prénom doit contenir au moins 2 caractères.";
        }
        if (formData.lastName.trim().length < 2) {
            newErrors.lastName = "Le nom doit contenir au moins 2 caractères.";
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "L'adresse email n'est pas valide.";
        }
        if (formData.message.trim().length < 15) {
            newErrors.message = "Le message doit contenir au moins 15 caractères.";
        }

        setErrors(newErrors);
        // Object.keys(obj) retourne un tableau des clés de l'objet ({} → [], {a: 1} → ['a']).
        // Si aucune erreur n'a été ajoutée à newErrors, ce tableau est vide (.length === 0).
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Handler générique appelé à chaque frappe dans un champ du formulaire.
     * @param {Event} e - événement natif du DOM déclenché par l'input/textarea.
     */
    const handleChange = (e) => {
        // Déstructuration : e.target est l'élément <input>/<textarea> qui a déclenché
        // l'événement ; on en extrait directement ses attributs `name` et `value` plutôt
        // que d'écrire e.target.name / e.target.value à chaque usage.
        const { name, value } = e.target;

        // { ...prev, [name]: value } : on part d'une COPIE de l'état précédent (opérateur
        // spread "...") et on écrase juste la clé correspondant au champ modifié.
        // [name] (avec des crochets) est une "computed property name" : la clé de l'objet
        // n'est pas écrite en dur, elle est calculée à partir de la variable `name`
        // (ex: si name === 'email', ça équivaut à écrire { ...prev, email: value }).
        // On ne fait jamais `formData.name = value` directement : en React, l'état ne doit
        // jamais être muté, seulement remplacé par un nouvel objet, sinon React ne détecte
        // pas le changement et ne redéclenche pas de rendu.
        setFormData(prev => ({ ...prev, [name]: value }));

        // Nettoyage de l'erreur du champs dès que l'utilisateur tape
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    /**
     * Valide puis soumet le formulaire à l'endpoint Formspree défini en variable
     * d'environnement.
     * @param {Event} e - événement de soumission du <form>.
     */
    const handleSubmit = async (e) => {
        // Par défaut, soumettre un <form> HTML recharge la page (comportement natif du
        // navigateur, hérité du web pré-JavaScript). preventDefault() annule ce comportement
        // pour qu'on puisse gérer la soumission nous-mêmes en JS (ici, un fetch()).
        e.preventDefault();

        if (!validate()) return;

        setStatus('loading');

        try {
            // import.meta.env est la façon dont Vite expose les variables d'environnement
            // au code du navigateur. Seules les variables préfixées VITE_ sont exposées
            // (les autres restent invisibles côté client, pour éviter de fuiter des secrets
            // par erreur). Cette variable est définie dans un fichier .env.local, non versionné.
            // L'URL Formspree sera stockée dans le fichier .env sous VITE_FORMSPREE_ENDPOINT
            //
            // fetch() est l'API native du navigateur pour faire des requêtes HTTP. Elle est
            // asynchrone : elle retourne une Promise, qu'on "attend" ici avec `await` plutôt
            // que de chaîner des .then(). `await` ne peut être utilisé qu'à l'intérieur d'une
            // fonction déclarée `async` (voir la signature de handleSubmit ci-dessus).
            const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // response.ok vaut true pour les codes HTTP 200-299 (succès). Un 4xx/5xx (ex:
            // mauvais endpoint, erreur serveur) passe par la branche `else`, PAS par le catch :
            // fetch() ne considère un statut HTTP d'erreur comme une exception JS.
            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrors({ global: "Une erreur est survenue lors de l'envoi." });
            }
        } catch (error) {
            // Ce bloc catch, lui, attrape les erreurs RÉSEAU (pas d'accès à internet, DNS
            // injoignable, etc.) — des cas où la requête n'a même pas pu aboutir jusqu'au
            // serveur, donc où `response` n'existe pas.
            setStatus('error');
            setErrors({ global: 'Erreur réseau. Veuillez réessayer.' });
        }
    };

    return { formData, status, errors, handleChange, handleSubmit };
};
