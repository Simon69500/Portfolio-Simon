import React from 'react';
import Button from '../ui/Button';

/**
 * 
 * Carte Bento Grid A : Présentation de Simon BADIN
 */

const Presentation = () => {
  return (

    <article
      className=" h-full bg-bento-light 
      dark:bg-bento-dark rounded-2xl p-6 shadow-sm flex flex-col justify-center 
      transition-transform duration-300 hover:scale-[1.02] hover:border hover:border-accent-primary "
      aria-labelledby="presentation-title"
    >

      {/* Zone En-Tête : Titre et Bio */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/*Emplacement Photo de Profil */}
        <div className="w-24 h-24 rounded-full shrink-0 overflow-hidden">
          <img
          src="/images/Profil2.png"
          alt="Portrait de Simon"  
          className="w-full h-full object-cover"
          loading="lazy"
          />
        </div>

        {/* Zone de Titre + Texte */}
        <div>
          <h1 className="text-2xl font-bold text-typography-light dark:text-typography-dark" id="presentation-title">Simon Badin - Développeur Web & Mobile Full-Stack</h1>
          <p className="m-8 p-4 text-typography-light dark:text-typography-dark-muted leading-relaxed">
            Ancien Chasseur Alpin et chef d'équipe BTP reconverti Développeur Web & Mobile Full-Stack (RNCP 5). Je combine résilience, rigueur et leadership pour concevoir des applications robustes de A à Z (comme Estimmo-Savoies.fr). Actuellement en recherche d'un poste en CDI (région lyonnaise ou full télétravail/mobilité), prêt à m'investir dans une équipe technique exigeante.
          </p>
        </div>
      </div>       

      {/* Zone d'Actions : Les Boutons */}
      <div className="mt-8 pt-8 flex flex-col justify-center sm:flex-row gap-4">

        <Button href="#contact" variant="primary">
          Me Contacter
        </Button>

        <Button href="/CV Badin Simon 2026.pdf" download="CV Badin Simon 2026.pdf" variant="secondary" rel="noopener noreferrer" target="_blank">
          Télécharger mon CV
        </Button>

      </div>
    </article>
  );
};

export default Presentation;