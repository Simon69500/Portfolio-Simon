import React from 'react';
import { useContactForm } from '../../hook/useContactForm';
import InputField from '../ui/InputField';
import TextareaField from '../ui/TextareaField';
import Button from '../ui/Button';

const Contact = () => {
    // Récupération de toute la logique métier depuis notre hook personnalisé
    const { formData, status, errors, handleChange, handleSubmit } = useContactForm();

    // Rendu de l'état "Success" (Section 5.3 du Cahier des charges)
    if (status === 'success') {
        return (
            <article className="p-8 rounded-3xl bg-bento-light dark:bg-bento-dark flex flex-col items-center justify-center text-center min-h-[350px] shadow-sm">
                <h3 className="text-2xl font-bold text-typography-light dark:text-typography-dark-DEFAULT mb-4">
                    Message envoyé avec succès !
                </h3>
                <p className="text-typography-light/80 dark:text-typography-dark-muted">
                    Merci pour votre message. Je l'ai bien reçu et je vous réponds dans les plus brefs délais.
                </p>
            </article>
        );
    }

    // Rendu du formulaire (États "Idle", "Loading", "Error")
    return (
        <article className="p-8 rounded-3xl bg-bento-light dark:bg-bento-dark shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:border hover:border-accent-primary ">
            
            <header className="mb-6">
                <h2 className="text-2xl font-bold text-typography-light dark:text-typography-dark">
                    Discutons de votre prochain projet !
                </h2>
                <p className="text-sm mt-1 text-typography-light/80 dark:text-typography-dark">
                    Remplissez le formulaire.
                </p>
            </header>

            {/* noValidate désactive les popups natifs du navigateur pour nous laisser gérer l'affichage des erreurs via notre hook */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <InputField
                        label="Prénom"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        disabled={status === 'loading'}
                        placeholder="John"
                    />
                    <InputField
                        label="Nom"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        disabled={status === 'loading'}
                        placeholder="Doe"
                    />
                </div>

                <InputField
                    label="Adresse Email"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={status === 'loading'}
                    placeholder="john.doe@exemple.com"
                />

                <TextareaField
                    label="Message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    disabled={status === 'loading'}
                    placeholder="Parlez-moi de votre projet, d'une opportunité..."
                    rows={5}
                />

                {/* Affichage d'une erreur globale API (ex: Formspree injoignable) */}
                {errors.global && (
                    <div className="text-red-500 text-sm font-medium mb-4">
                        {errors.global}
                    </div>
                )}

                <div className="mt-4 flex justify-end">
                    <Button 
                        type="submit" 
                        variant="primary" 
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                </div>
                
            </form>
        </article>
    );
};

export default Contact;