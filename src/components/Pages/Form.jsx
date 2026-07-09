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

        <form ref={form} onSubmit={handleSubmit} className='form p-4 card shadow col-sm-10 col-lg-8 m-2'>
            <legend className='title text-center'>Formulaire de contact</legend>

        <div className="row mb-3">
            <div className="col-12 col-md-4">
                <label htmlFor="name" className="subtitle form-label">Nom* :</label>
                <input type="text" className="form-control" id="name" name='from_name' placeholder="Votre nom" required />
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 col-md-4">
                <label htmlFor="email" className="subtitle form-label">Email* :</label>
                <input type="email" className="form-control" id="email" name='from_email' placeholder="email@gmail.com" required/>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 col-md-10">
                <label htmlFor="subject" className="subtitle form-label">Objet* :</label>
                <input type="text" className="form-control" id="subject" name='subject' placeholder="L'objet du message" required/>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 ">
                <label htmlFor="message" className="subtitle form-label">Votre message* :</label>
                <textarea className="form-control" id="message" name='message' rows="4" placeholder="Votre message ..." required ></textarea>
            </div>
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