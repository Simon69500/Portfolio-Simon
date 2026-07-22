import { useState } from "react"

// Hook pour isoler toute la complexité du formulaire
export const useContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '' 
    });

    // Gestion de la FSM (finit state machine)
    const [ status, setStatus ] = useState('idle');
    const [ errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
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
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Nettoyage de l'erreur du champs dès que l'utilisateur tape
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined}));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Interception du rechargement natif
        
        if(!validate()) return;

        setStatus('loading');

        try {

            // L'URL Formspree sera stockée dans le fichier .env sous VITE_FORMSPREE_ENDPOINT
            const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrors({ global: "Une erreur est survenue lors de l'envoi."});
            }
        } catch (error) {
            setStatus('error');
            setErrors({ global: 'Erreur réseau. Veuillez réessayer.'});
        }
    };

    return { formData, status, errors, handleChange, handleSubmit };
};