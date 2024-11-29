import '../../SCSS/Formulaire.scss';

import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextArea from './TextArea';
import Button from '@mui/material/Button';

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
  const [societyError, setSocietyError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  //  vérifier chaque champ pour s'assurer que les valeurs saisies sont correctes
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        setNameError(value === '');
        break;
      case 'lastName':
        setLastNameError(value === '');
        break;
      case 'society':
        setSocietyError(value === '');
        break;
      case 'email':
        setEmailError(!/\S+@\S+\.\S+/.test(value));
        break;
      case 'phone':
        setPhoneError(!/^\+?[0-9]{10,15}$/.test(value));
        break;
      case 'subject':
        setSubjectError(value === '');
        break;
      case 'message':
        setMessageError(value === '');
        break;
      default:
        break;
    }
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()){
      alert('Formulaire soumis avec succès !');

      // Réinitialisation des champs et erreurs
      setName('');
      setLastName('');
      setEmail('');
      setSociety('');
      setPhone('');
      setSubject('');
      setMessage('');

      setNameError(false);
      setLastNameError(false);
      setSocietyError(false);
      setEmailError(false);
      setPhoneError(false);
      setSubjectError(false);
      setMessageError(false);
    } else {
      alert('Veuillez remplir correctement tous les champs !');
    }
  };

  // Validation globale
  const validateForm = () => {
    return !nameError && !lastNameError && !societyError && !emailError && !phoneError && !subjectError && !messageError;
  };

  return (
    <div id='Contact' className="contenair-form">
      <h2 className='titre-formulaire'>Formulaire</h2>
      <div className='card-form'>
      <h3 className='titre-formulaire-2'>Me contacter</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': {
            m:2,
            width: '25ch',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        

        <TextField
          sx={{
            backgroundColor: '#e1e9ff',
          }}
          error={nameError}
          id="outlined-basic"
          label="Votre nom"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateField('name', e.target.value);  // Validation en temps réel
          }}
          helperText={nameError ? 'Mettez votre nom' : ''}
        />
        
        <TextField
        sx={{
          backgroundColor: '#e1e9ff',
        }}
          error={lastNameError}
          id="outlined-basic"
          label="Votre prénom"
          variant="outlined"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            validateField('lastName', e.target.value);  // Validation en temps réel
          }}
          helperText={lastNameError ? 'Mettez votre prénom' : ''}
        />

        <TextField
        sx={{
          backgroundColor: '#e1e9ff',
        }}
          error={societyError}
          id="filled-basic"
          label="Société"
          variant="outlined"
          value={society}
          onChange={(e) => {
            setSociety(e.target.value);
            validateField('society', e.target.value);  // Validation en temps réel
          }}
          helperText={societyError ? 'Ce champ est requis' : ''}
        />
        
        <TextField
        sx={{
          backgroundColor: '#e1e9ff',
        }}
          error={emailError}
          id="standard-basic"
          label="Votre email"
          variant="outlined"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            validateField('email', e.target.value);  // Validation en temps réel
          }}
          helperText={emailError ? 'Email non valide' : ''}
        />
        
        <TextField
        sx={{
          backgroundColor: '#e1e9ff',
        }}
          error={phoneError}
          id="standard-basic"
          label="Votre numéro"
          variant="outlined"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            validateField('phone', e.target.value);  // Validation en temps réel
          }}
          helperText={phoneError ? 'Votre numéro de téléphone ne fonctionne pas' : ''}
        />
        
        <TextField
        sx={{
          backgroundColor: '#e1e9ff',
        }}

          error={subjectError}
          id="standard-basic"
          label="Objet"
          variant="outlined"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            validateField('subject', e.target.value);  // Validation en temps réel
          }}
          helperText={subjectError ? 'Mettez votre Objet du message' : ''}
        />
        
        <TextArea 
          error={messageError} 
          value={message} 
          onChange={(e) => {
            setMessage(e.target.value);
            validateField('message', e.target.value);  // Validation en temps réel
          }}
          helperText={messageError ? 'On a besoin de votre message' : ''}
        />
        
        <Button variant="contained" color="primary" type="submit">
          Soumettre
        </Button>
      </Box>
      </div>
      
    </div>
  );
}
