import React from 'react';
import Button from '../ui/Button';
import { Icones } from "../../data/Icones";

/**
 * 
 * Carte Bento Grid A : Présentation de Simon BADIN
 */

const Presentation = () => {
  return (

    <article
      className="order-1 md:col-span-8 bg-bento-light 
      dark:bg-bento-dark rounded-2xl p-6 shadow-sm flex flex-col justify-between 
      transition-transform duration-300 hover:scale-[1.02] hover:border hover:border-accent-primary "
      aria-labelledby="presentation-title"
    >

      {/* Zone En-Tête : Titre et Bio */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/*Emplacement Photo de Profil */}
        <div className="w-24 h-24 rounded-full shrink-0 overflow-hidden">
          <img
          src={Icones.profil2}
          alt="Portrait de Simon"  
          className="w-full h-full object-cover"
          loading="lazy"
          />
        </div>

        {/* Zone de Titre + Texte */}
        <div>
          <h1 className="text-2xl font-bold mb-3 text-typography-light dark:text-typography-dark" id="presentation-title">Simon Badin - Développeur Web & Mobile Full-Stack</h1>
          <p className="text-typography-light dark:text-typography-dark-muted leading-relaxed">
            Ancien Chasseur Alpin et chef d'équipe dans le BTP, je convertis ma rigueur, ma résilience et ma gestion du stress en lignes de code performantes et structurées.
          </p>
        </div>
      </div>       

      {/* Zone d'Actions : Les Boutons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">

        <Button href="#contact" variant="primary">
          Me Contacter
        </Button>

        <Button href="/CV-Badin_Simon_DevWeb2.pdf" variant="secondary" rel="noopener noreferrer" target="_blank">
          Télécharger mon CV
        </Button>

      </div>
    </article>
  );
};

export default Presentation;