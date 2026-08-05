# 🎨 Portfolio de Simon Badin — V3 (React / Vite)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

Portfolio personnel présentant mon parcours, mes compétences techniques et mes projets, avec formulaire de contact fonctionnel et téléchargement direct du CV.

🔗 **Lien du site en ligne :** [simon69500.github.io/Portfolio-Simon](https://simon69500.github.io/Portfolio-Simon/)

## 🌟 Aperçu

### Desktop — clair / sombre

<img width="1666" height="1084" alt="Aperçu desktop clair" src="./screenshots/desktop-light.png" />
<img width="1666" height="1084" alt="Aperçu desktop sombre" src="./screenshots/desktop-dark.png" />

### Mobile — clair / sombre

<img width="200" height="600" alt="Aperçu mobile clair" src="./screenshots/mobile-light.png" /> <img width="200" height="600" alt="Aperçu mobile sombre" src="./screenshots/mobile-dark.png" />

---

## ⚙️ Fonctionnalités

- **Architecture SPA one-page** en Bento Grid : présentation, stack technique, parcours (timeline), soft skills (radar chart), projets, contact — tout accessible depuis une seule page avec navigation par ancres
- **Mode clair / sombre** : détection automatique de la préférence système au premier chargement, choix mémorisé ensuite (`localStorage`)
- **Fiches projets détaillées** : chaque projet s'ouvre en vue étendue (contexte, stack, défis, résultats), avec une mise en avant spéciale pour le projet phare (Estimmo-Savoies)
- **Formulaire de contact fonctionnel** avec validation en temps réel (prénom, nom, email, message), envoyé via [Formspree](https://formspree.io/)
- **Téléchargement direct du CV** au format PDF
- **Responsive design**, du mobile au grand écran desktop
- **Page Mentions légales** dédiée

## 🛠️ Stack technique

| Domaine | Choix technique |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Styles | Tailwind CSS |
| Animations | Motion (Framer Motion) |
| Graphiques | Recharts (radar chart des soft skills) |
| Formulaire de contact | Formspree |
| Hébergement | GitHub Pages (via `gh-pages`) |

## 📁 Structure du projet

```
Portfolio-Simon/
├── public/
│   ├── CV_BADIN_Simon_2026.pdf   # CV téléchargeable depuis le site
│   └── images/, videos/           # Assets des projets
├── src/
│   ├── components/
│   │   ├── Pages/
│   │   │   ├── Home.jsx           # Page unique (SPA one-page)
│   │   │   └── Mentions.jsx       # Mentions légales
│   │   ├── bento/                 # Tuiles de la grille : Presentation, StackCard,
│   │   │                          # Parcours, SoftSkills, ProjetStar, Contact...
│   │   └── ui/                    # Composants réutilisables (badges, boutons...)
│   ├── data/
│   │   ├── profileData.js         # Contenu "À propos", parcours, soft skills
│   │   ├── techData.js            # Stack technique affichée
│   │   └── projects/               # Données des projets du portfolio
│   ├── hook/
│   │   ├── useTheme.js            # Gestion du mode clair/sombre
│   │   ├── useContactForm.js      # Validation et envoi du formulaire
│   │   └── useCardExpansion.js    # Ouverture/fermeture des fiches projet
│   └── App.jsx
```

## 🚀 Installation et exécution

```bash
# 1. Cloner le projet
git clone https://github.com/Simon69500/Portfolio-Simon.git
cd Portfolio-Simon

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement (voir ci-dessous)

# 4. Lancer le serveur de développement
npm run dev
```

## 🔧 Variables d'environnement

Le formulaire de contact envoie les messages via Formspree. Créer un fichier `.env.local` à la racine :

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/ton_id_formspree
```

Sans cette variable, le site fonctionne normalement mais le formulaire de contact échouera à l'envoi.

## 🌍 Déploiement

Le site est hébergé sur GitHub Pages. Pour publier une nouvelle version :

```bash
npm run deploy
```

Cette commande build le projet (`vite build`) puis publie le contenu de `dist/` sur la branche `gh-pages`.

## 📞 Me contacter

📧 [simonsola67@gmail.com](mailto:simonsola67@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/simon-badin-939594279/)
