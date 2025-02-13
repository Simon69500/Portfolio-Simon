import '../../SCSS/Formulaire.scss';
import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

export default function BasicTextFields() {


  // États pour chaque champ du formulaire
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [society, setSociety] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // États pour les erreurs
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Fonction pour valider les champs
  const validateFields = useCallback(() => {
    setNameError(name === '');
    setLastNameError(lastName === '');
    setEmailError(!/\S+@\S+\.\S+/.test(email));
    setPhoneError(!/^\+?[0-9]{10,15}$/.test(phone));
    setSubjectError(subject === '');
  }, [name, lastName, email, phone, subject]); // Ajoutez ici les dépendances nécessaires
  

  // Réinit Erreur
  const resetErrors = () => {
    setNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setSubjectError(false);
    setMessageError(false);
  };  

   // État pour détecter si l'utilisateur a tenté de valider le formulaire
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // Référence du formulaire
  const formBoxRef = useRef(null);
  const form = useRef();


  // Validation globale
  const validateForm = () => {
    // Vérifie si l'une des erreurs est vraie, sauf pour société et message
    return !(nameError || lastNameError || emailError || phoneError || subjectError);
  };

    // Gestion du clic sur la Box pour déclencher la validation
    const handleBoxClick = () => {
      setHasAttemptedSubmit(true); // L'utilisateur a tenté d'interagir
      validateFields(); // Valide les champs
    };

    // Détection des Clics Extérieurs
    const handleClickOutside = useCallback((event) => {
      if (formBoxRef.current && !formBoxRef.current.contains(event.target)) {
        setHasAttemptedSubmit(false);         // Réinitialise les erreurs
        resetErrors();                        // Efface les erreurs visuelles
      }
    }, [formBoxRef]);                     
    

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields();

    if (validateForm()) {
      sendEmail();
    } else {
      alert('Veuillez remplir correctement tous les champs !');
    }
  }; 
  
  // Valide uniquement après une tentative de soumission
     useEffect(() => {
        if (hasAttemptedSubmit) {
          validateFields();                          
        }
      }, [hasAttemptedSubmit, validateFields]);
      
  // Surveille les clics extérieurs 
   useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [handleClickOutside]);

  // Envoi du formulaire sur ton mail avec EmailJS
  const sendEmail = () => {
    emailjs
      .sendForm('service_2t9fvbt', 'template_i8i418o', form.current, {
        publicKey: '8y5D7R-Yfp_LWjhl8',
      })
      .then(
        () => {
          alert('Formulaire soumis avec succès !');
          // Réinitialiser les champs du formulaire
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Une erreur est survenue, veuillez réessayer.');
        }
      );
  };

  return (

    <div id="Contact" className="contenair-form">
      <h2 className="titre-formulaire">Me contacter</h2>

      {/* Partie Formlulaire de contact */}
      <div className="card-form">
        <h3 className="titre-formulaire-2">Formulaire de contact</h3>
        <Box className='Box-form'
          component="form"
          ref={(el) =>{
            form.current = el ;
            formBoxRef.current = el;
          }} 
          sx={{
            '& > :not(style)': {
              m: 2,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          onClick={handleBoxClick}
        >
          <Box className='Box-card'>
          <TextField
  sx={{
    backgroundColor: '#5D5D5D',
    margin: '20px',
  }}
  error={hasAttemptedSubmit && nameError}
  id="filled-basic"
  label="Votre nom"
  variant="filled"
  name="from_name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  helperText={hasAttemptedSubmit && nameError ? 'Mettez votre nom' : ''}
/>

<TextField
  sx={{
    backgroundColor: '#5D5D5D',
    margin: '20px',
  }}
  error={hasAttemptedSubmit && lastNameError}
  id="filled-basic"
  label="Votre prénom"
  variant="filled"
  name="from_last_name"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  helperText={hasAttemptedSubmit && lastNameError ? 'Mettez votre prénom' : ''}
/>
</Box >

<Box className='Box-card-1'>
<TextField
  sx={{
    backgroundColor: '#5D5D5D',
  }}
  error={hasAttemptedSubmit && emailError}
  id="standard-basic"
  label="Votre email"
  variant="filled"
  name="from_email"  
  value={email}
  type="email"
  onChange={(e) => setEmail(e.target.value)}
  helperText={hasAttemptedSubmit && emailError ? 'Email non valide' : ''}
/>

<TextField
  sx={{
    backgroundColor: '#5D5D5D',
  }}
  error={hasAttemptedSubmit && phoneError}
  id="standard-basic"
  label="Votre numéro"
  variant="filled"
  name="from_phone" 
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  helperText={hasAttemptedSubmit && phoneError ? 'Votre numéro de téléphone ne fonctionne pas' : ''}
/>

<TextField
  sx={{
    backgroundColor: '#5D5D5D',
  }}
  id="filled-basic"
  label="Société"
  variant="filled"
  name="from_society" 
  value={society}
  onChange={(e) => setSociety(e.target.value)}
/>
</Box>

<Box className='Box-card-2'>
<TextField
  sx={{
    backgroundColor: '#5D5D5D',
  }}
  error={hasAttemptedSubmit && subjectError}
  id="standard-basic"
  label="Objet"
  variant="filled"
  name="subject"  
  value={subject}
  onChange={(e) => setSubject(e.target.value)}
  helperText={hasAttemptedSubmit && subjectError ? 'Mettez l\'Objet du message' : ''}
/>
</Box>
      <Box className='Box-card-3'>
        <TextField
  sx={{
    backgroundColor: '#5D5D5D',
  }}
  error={hasAttemptedSubmit && messageError}
  id="filled-multiline-static"
  label="Votre message"
  multiline
  rows={4}
  variant="filled"
  name="message"
  value={message} // Lié à l'état
  onChange={(e) => setMessage(e.target.value)}
  helperText={hasAttemptedSubmit && messageError ? 'On a besoin de votre message' : ''}
        />
      </Box>
      <Box className='Box-card-4'>
        <Button sx={{ background: "#9F9F9F", color: "#3A3A3A", margin: '10px', width: '180px', borderRadius: '50px',border:" solid , 1px ,#6E6E6E"   }} variant="contained"  type="submit" value="Send" disabled={!validateForm()}>
              Soumettre
        </Button>
      </Box>

    </Box>
      </div>

      {/* Partie Localisation */}
      <div className='card-loca'>
          <h3 style={{textAlign: 'center'}} className="titre-formulaire-2">Ma localisation</h3>
          <iframe className='map-google'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22278.237365320914!2d4.891016661527612!3d45.73551325301483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1763ee80817%3A0x408ab2ae4bb27c0!2s69500%20Bron!5e0!3m2!1sfr!2sfr!4v1734007451281!5m2!1sfr!2sfr"
          title="Carte de localisation"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>  
      </div>   

    </div>
  );
}
