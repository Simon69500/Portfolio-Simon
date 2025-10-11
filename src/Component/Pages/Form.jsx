import '@scss/index.scss';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  // On récupère la valeur du formulaire avec useRef
  const form = useRef();

  // Messages de feedback
  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Empêche le rechargement et envoie via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2t9fvbt",     // ID du service EmailJS
        "template_i8i418o",    // ID du template
        form.current,          // référence vers le formulaire
        "8y5D7R-Yfp_LWjhl8"    // clé publique EmailJS
      )
      .then(
        () => {
          setSuccesMessage("Formulaire envoyé avec succès !");
          setErrorMessage("");
          form.current.reset();
        },
        (error) => {
          setErrorMessage("Erreur lors de l'envoi, veuillez réessayer.");
          setSuccesMessage("");
          console.error(error);
        }
      );
  };

    return (

        <form ref={form} onSubmit={handleSubmit} className='form p-4 card shadow w-50 w-md-25'>
            <legend className='subtitle text-center'>Formulaire de contact</legend>

            <div className="mb-3 d-flex flex-column align-items-start">
                <label htmlForfor="name" className="subtitle form-label">Nom* :</label>
                <input type="text" className="form-control w-25 " id="name" name='from_name' placeholder="Votre nom" required />
            </div>                      

            <div className="mb-3 d-flex flex-column align-items-star">
                <label htmlForfor="email" className="subtitle form-label">Email* :</label>
                <input type="email" className="form-control w-50 " id="email" name='from_email' aria-describedby="emailHelp" placeholder="email@gmail.com" required/>
                <div id="emailHelp" className="text form-text fs-6 fst-italic">Nous ne partagerons jamais votre e-mail avec qui que ce soit d'autre.</div>
            </div>

            <div className="mb-3 d-flex flex-column align-items-star">
                <label htmlFor="subject" className="subtitle form-label">Objet* :</label>
                <input type="text" className="form-control" id="subject" name='subject' placeholder="L'objet du message" required/>
            </div>

            <div class="mb-3 d-flex flex-column align-items-start">
                <label htmlFor="message" class="subtitle form-label">Votre message* :</label>
                <textarea class="form-control" id="message" name='message' rows="4" placeholder="Votre message ..." required ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Envoyer</button>

        {/* Messages de feedback */}
         {succesMessage && (
            <div className='alert alert-success mt-3'> {succesMessage} </div>
         )}
         {errorMessage && (
            <div className='alert alert-danger mt-3'> {errorMessage} </div>
         )}

        </form>
    )
}  