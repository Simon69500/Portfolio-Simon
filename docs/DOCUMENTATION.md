# Documentation technique — Portfolio Simon Badin

> **Objectif de ce document** : contrairement au [README.md](../README.md), qui est une vitrine
> pensée pour un visiteur/recruteur, ce document est une **doc de maintenance**. Il s'adresse à
> "futur toi" (ou à quiconque reprend ce projet) et répond à la question : *comment ce projet
> fonctionne-t-il réellement en interne, et comment le faire évoluer sans tout redécouvrir ?*
>
> Dernière mise à jour : 2026-09-02, sur la base de l'état réel du code à cette date.

## Sommaire

1. [Vue d'ensemble architecturale](#1-vue-densemble-architecturale)
2. [Le cœur du système : l'expansion de carte](#2-le-cœur-du-système--lexpansion-de-carte)
3. [Modèle de données](#3-modèle-de-données)
4. [Guides pratiques](#4-guides-pratiques)
5. [Thème clair/sombre](#5-thème-clairsombre)
6. [Formulaire de contact](#6-formulaire-de-contact)
7. [Build, environnement et déploiement](#7-build-environnement-et-déploiement)
8. [Conventions du projet](#8-conventions-du-projet)
9. [Documentation du code (JSDoc)](#9-documentation-du-code-jsdoc)
10. [Points d'attention connus](#10-points-dattention-connus)

---

## 1. Vue d'ensemble architecturale

Le portfolio est une **SPA one-page** (une seule route réelle) construite avec React + Vite,
stylée avec Tailwind CSS. Il n'y a pas de routing au sens propre malgré la présence de
`react-router-dom` dans les dépendances : `App.jsx` rend uniquement `<Home />`, et la navigation
interne (Projets / Parcours / Contact) se fait par **ancres HTML** (`#projets`, `#parcours`,
`#contact`) gérées dans [Header.jsx](../src/components/layouts/Header.jsx), pas par des routes.

Le principe organisateur du projet est celui d'une **grille "Bento"** : la page d'accueil
([Home.jsx](../src/components/Pages/Home.jsx)) est un `grid` CSS à 12 colonnes (desktop) où
chaque tuile est un composant autonome dans `src/components/bento/` :

| Tuile | Composant | Rôle |
|---|---|---|
| A | `Presentation` | Bloc de présentation générale |
| B | `StackCard` | Stack technique affichée par catégorie |
| C | `Parcours` | Timeline du parcours professionnel |
| D | `ProjetStar` | Projet phare (Estimmo-Savoies), format "étude de cas" enrichi |
| E | `SoftSkills` | Radar chart (Recharts) des soft skills |
| F, G | `MosaicContainer` | Grille des projets secondaires (2 conteneurs de `ProjetCard`) |
| H | `Contact` | Formulaire de contact |
| — | `Header` / `Footer` | Hors grille, navigation et pied de page |

L'organisation des dossiers suit une **séparation par rôle**, cohérente avec cette architecture
one-page (documentée en détail dans le README, section "Architecture des composants") :

- `components/Pages/` — les deux véritables "pages" : `Home.jsx` et `Mentions.jsx`
- `components/bento/` — une tuile de la grille = un composant
- `components/bento/star/` — sous-composants de la vue détaillée du projet phare
- `components/ui/` — composants génériques réutilisables (boutons, champs de formulaire, badges…)
- `components/layouts/` — `Header`, `Footer`
- `hook/` — logique métier isolée de l'affichage (custom hooks)
- `data/` — contenu du site, séparé du code

**Pourquoi cette séparation compte** : elle permet de faire évoluer le *contenu* (ajouter un
projet, changer une compétence) en ne touchant qu'à `src/data/`, sans jamais rouvrir un fichier
`.jsx`. C'est le principe à respecter en priorité si tu ajoutes du contenu — voir la
[section 4](#4-guides-pratiques).

## 2. Le cœur du système : l'expansion de carte

C'est le mécanisme le plus important à comprendre avant de toucher à une tuile de projet.

### Le state est "levé" (lifted state) dans Home.jsx

```js
const [expansionProjetId, setExpansionProjetId] = useState(null);
```

Une seule variable d'état, possédée par `Home.jsx`, représente **quel projet est actuellement
ouvert en vue détaillée** (`null` = aucun). Elle est transmise en props à `ProjetStar` et à
chaque `MosaicContainer` → `ProjetCard`.

**Pourquoi un seul state global plutôt qu'un state local par carte ?** Parce qu'une seule carte
peut être ouverte à la fois, et que les *autres* tuiles doivent réagir à l'ouverture (elles
passent en `opacity-0 pointer-events-none` pendant qu'une carte est en plein écran — voir les
classes conditionnelles dans `Home.jsx`, ex. `expansionProjetId !== null && expansionProjetId !== featuredProject.id`).
Un state local à chaque carte ne permettrait pas à `Home.jsx` de savoir qu'il doit estomper les
tuiles voisines.

### Le hook `useCardExpansion`

[`useCardExpansion.js`](../src/hook/useCardExpansion.js) encapsule la logique dérivée de ce state
global pour **une** carte donnée :

```js
const isExpanded = expansionProjetId === projetId;
```

Il expose `expand()` / `collapse()` (qui appellent `setExpansionProjetId`), et surtout gère le
**scroll lock** : quand la carte est ouverte, `document.body.style.overflow = 'hidden'` est posé
en effet de bord, avec un cleanup qui le retire (que ce soit au `collapse()` ou au démontage du
composant). C'est ce qui donne l'impression d'une modale plein écran sans en être une (pas de
portail React, pas de `<dialog>` — juste une classe CSS `fixed inset-0 z-50` posée sur la carte
elle-même via `motion.article`, visible dans `ProjetStar.jsx` et `ProjetCard.jsx`).

### Deux implémentations parallèles : projet phare vs projets secondaires

Le projet phare et les projets secondaires ont chacun leur **couple carte + détail** :

- `ProjetStar.jsx` (résumé) → `ProjetDetailsStar.jsx` (détail enrichi : démo vidéo, métriques,
  rôle tenu, narratif technique — sous-composants dans `bento/star/`)
- `ProjetCard.jsx` (résumé) → `ProjetDetails.jsx` (détail standard : 4 blocs statiques
  aspects techniques / défis / solutions / résultats)

Les deux couples partagent la même mécanique (`useCardExpansion`, `motion.article` avec
`layoutId={`project-${project.id}`}` pour l'animation de transition partagée via Motion/Framer
Motion), mais le code n'est **pas factorisé** entre les deux — c'est un doublon assumé plutôt
qu'une abstraction commune. Voir [section 10](#10-points-dattention-connus) pour la nuance.

## 3. Modèle de données

Tout le contenu textuel et structurel du site vit dans `src/data/`, complètement séparé des
composants. Quatre fichiers, chacun avec un rôle précis :

### `profileData.js`
Deux exports : `timeLineData` (parcours professionnel, consommé par `Parcours.jsx`) et
`softSkillsData` (scores du radar chart, consommé par `SoftSkills.jsx` et `RadarChartComponent.jsx`).

### `techData.js`
Un objet dont les clés sont des catégories (`"Frontend"`, `"Backend"`, `"Outils & Ops"`) et les
valeurs des tableaux de technologies (`id`, `name`, `logoUrl`, `iconBehavior`). Consommé par
`StackCard.jsx` (affichage de la stack), et par `ProjetStar.jsx` / `ProjetCard.jsx` qui font
`Object.values(techData).flat()` pour retrouver le logo d'une techno à partir de son nom (le
champ `technologies` d'un projet est un simple tableau de chaînes — le rapprochement avec
`techData` se fait par correspondance de nom, insensible à la casse).

`iconBehavior` (`"white"` / `"black"` / `"colored"`) pilote le filtre CSS `invert` appliqué au
logo dans `TechBadge.jsx`, pour qu'un seul fichier SVG par techno reste lisible sur fond clair
et sur fond sombre (`"black"` = logo foncé inversé seulement en dark mode, `"white"` = logo
clair inversé par défaut puis remis tel quel en dark mode, `"colored"` = jamais filtré).

### `projects/portfolioData.js` — la **source de vérité actuelle** des projets

C'est le fichier réellement importé par `Home.jsx` (`import { portfolioData } from
'../../data/projects/portfolioData'`). Chaque entrée a :

- `id`, `isFeatured` (booléen qui détermine si le projet va en tuile D ou en mosaïque F/G),
  `type` (`"professionnel"` / `"formation"` / `"personnel"`, voir `projectTypeData.js`),
  `titre`, `slug`
- `coverImage`, `gallery` (chemins construits via le helper `img()`, voir ci-dessous)
- `technologies` (tableau de noms, rapproché de `techData.js` à l'affichage)
- `details` — structure **différente selon `isFeatured`** :
  - Pour le projet phare : objet enrichi avec `demoMedia`, `aspectsTechniques` /
    `defis` / `solutions` / `resultats` (chacun `{ intro, points: [] }`), `metrics`, `role`
  - Pour les projets secondaires : mêmes clés `aspectsTechniques` / `defis` / `solutions` /
    `resultats`, mais en **chaînes de texte simples** (pas d'objet `{ intro, points }`)
- `githubUrl`, `liveUrl`

**Le helper `img()`** en tête de fichier (`const img = (chemin) => `${import.meta.env.BASE_URL}${chemin}``)
préfixe chaque chemin d'asset avec `BASE_URL`. C'est nécessaire parce que le site est déployé sur
GitHub Pages sous un sous-chemin (`/Portfolio-Simon/`, voir `vite.config.js` → `base: './'` et
`homepage` dans `package.json`) : un chemin absolu codé en dur (`/images/...`) casserait une fois
déployé.

### `projects/projectTypeData.js`
Mappe chaque valeur de `type` (`formation`, `professionnel`, `personnel`) vers un `label` affiché
et une icône (`logoUrl` + `iconBehavior`, ou `icon`). Consommé par `ProjectTypeBadge.jsx` pour
afficher le badge "Projet de formation" / "Projet professionnel" / "Projet personnel" en tête de
chaque carte — un choix delibéré pour donner au visiteur le contexte de réalisation avant même le
titre (cf. commentaire dans le fichier source).

### `projects/projects.json` — **fichier obsolète, à ne pas utiliser**
Ancienne version des données projets (avant la migration vers `portfolioData.js`). Il n'est
**importé nulle part dans le code** (vérifié par recherche globale) et il est explicitement
exclu du dépôt Git via `.gitignore` (`# Obsolète - ancien fichier de données, conservé en local
pour référence`). Il existe uniquement en local sur cette machine, pas sur GitHub. Voir
[section 10](#10-points-dattention-connus).

## 4. Guides pratiques

### Ajouter un nouveau projet secondaire

1. Ajouter les images dans `public/images/projects/<nom-du-projet>/` (format `.webp`, cohérent
   avec les projets existants).
2. Ajouter une entrée dans le tableau `portfolioData` (`src/data/projects/portfolioData.js`) avec
   un `id` unique, `isFeatured: false`, `type` approprié, et un objet `details` avec des chaînes
   simples pour `aspectsTechniques` / `defis` / `solutions` / `resultats` (pas la structure
   `{ intro, points }`, réservée au projet phare).
3. Aucune modification de composant nécessaire : `Home.jsx` recalcule automatiquement
   `secondaryProjects` par filtrage (`isFeatured === false && id !== 6`).

   ⚠️ Le filtre exclut en dur `project.id !== 6` — c'est un résidu lié à l'ancien template vide de
   `projects.json` qui portait cet id. Si un jour un projet légitime prend l'`id: 6` dans
   `portfolioData.js`, il sera silencieusement exclu de l'affichage. Voir
   [section 10](#10-points-dattention-connus).
4. `Home.jsx` répartit ensuite les projets secondaires entre les tuiles F et G par simple
   découpage de tableau : `secondaryProjects.slice(0, 2)` pour F, `.slice(2, 4)` pour G. Au-delà
   de 4 projets secondaires, les suivants ne s'afficheront **nulle part** tant que le découpage
   n'est pas ajusté à la main.

### Changer le projet phare

Basculer `isFeatured: true` sur un autre projet (et `false` sur l'ancien). Attention : la vue
détaillée enrichie (`ProjetDetailsStar`) attend des champs spécifiques (`demoMedia`, `metrics`,
`role`) qui ne sont renseignés aujourd'hui que pour Estimmo-Savoies — un nouveau projet phare sans
ces champs affichera simplement les sections correspondantes en moins (elles sont conditionnées :
`{project.details.demoMedia && (...)}`), donc pas de crash, mais une vue moins riche.

### Ajouter une technologie à la stack affichée

Ajouter une entrée dans le tableau de la catégorie concernée dans `src/data/techData.js` (`id`,
`name`, `category`, `logoUrl` via le helper `img()`, `iconBehavior`), et déposer le logo SVG
correspondant dans `public/images/tech/`.

## 5. Thème clair/sombre

Géré par [`useTheme.js`](../src/hook/useTheme.js), un hook minimal en deux temps :

1. **Initialisation** (lazy `useState`) : lit `localStorage.getItem('theme')` ; si absent,
   interroge la préférence système via `window.matchMedia('(prefers-color-scheme: dark)')`.
2. **Effet de bord** à chaque changement de `theme` : ajoute/retire la classe `dark` sur
   `document.documentElement`, et persiste le choix dans `localStorage`.

Tailwind est configuré en `darkMode: 'class'` (`tailwind.config.js`) — c'est cette classe `dark`
sur `<html>` qui active toutes les variantes `dark:` utilisées dans les composants. Le composant
`ThemeToggle.jsx` ne fait qu'appeler `toggleTheme()` au clic ; toute la logique de persistance et
de détection système reste dans le hook, pas dans le composant.

## 6. Formulaire de contact

Toute la logique vit dans [`useContactForm.js`](../src/hook/useContactForm.js), sous forme d'une
petite **machine à états** (`status` : `idle` → `loading` → `success` | `error`) :

- `validate()` vérifie en local : prénom/nom ≥ 2 caractères, email via une regex simple
  (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), message ≥ 15 caractères. Les erreurs par champ sont stockées
  dans `errors` et s'effacent dès que l'utilisateur retape dans le champ concerné
  (`handleChange`).
- `handleSubmit` bloque la soumission si `validate()` échoue, sinon passe en `loading` et envoie
  un `POST` JSON vers `import.meta.env.VITE_FORMSPREE_ENDPOINT` (variable d'environnement Vite,
  donc préfixée `VITE_` pour être exposée côté client — voir [section 7](#7-build-environnement-et-déploiement)).
- Le composant `Contact.jsx` ne fait que consommer ce hook et afficher l'état correspondant
  (formulaire, spinner via le texte du bouton, message de succès plein écran, erreur globale).

**Pourquoi cette séparation hook/composant ?** Le commentaire en tête du fichier est explicite :
*"Hook pour isoler toute la complexité du formulaire"*. Ça permet de tester ou remplacer la
logique de validation/soumission sans toucher au JSX, et inversement de retoucher l'UI sans
risquer de casser la validation.

## 7. Build, environnement et déploiement

### Variables d'environnement

Une seule variable requise, `VITE_FORMSPREE_ENDPOINT`, à définir dans un `.env.local` (non versionné,
exclu par `.gitignore`). Sans elle, le site fonctionne normalement mais l'envoi du formulaire de
contact échoue silencieusement côté réseau (le `fetch` part vers `undefined`).

### Build (Vite)

`vite.config.js` ne fait que deux choses : activer le plugin React, et fixer `base: './'` — un
chemin **relatif**, nécessaire pour que le build fonctionne correctement une fois servi depuis le
sous-chemin GitHub Pages (`/Portfolio-Simon/`) plutôt qu'à la racine d'un domaine.

### Déploiement

`npm run deploy` (= `predeploy` qui build, puis `gh-pages -d dist`) publie le contenu de `dist/`
sur la branche `gh-pages` du dépôt, lue par GitHub Pages. Le champ `homepage` du `package.json`
(`https://simon69500.github.io/Portfolio-Simon`) est utilisé par l'outillage (`gh-pages`) pour
connaître l'URL cible.

Le dossier `dist/` est présent en local (visible dans l'arborescence, généré par `npm run build`)
mais n'est **pas** suivi par Git (`git ls-files dist/` ne retourne rien), conformément à la règle
`dist/` du `.gitignore` — c'est le comportement attendu : seul `npm run deploy` le publie, sur la
branche `gh-pages`, jamais sur `main`.

## 8. Conventions du projet

- **Commentaires en français**, code (variables/fonctions) en anglais — cf. `CLAUDE.md` à la
  racine du dépôt, qui fixe aussi les règles de collaboration avec Claude Code sur ce projet.
- De nombreux commentaires dans le code référencent un **"Cahier des Charges" (CaC)**, avec des
  numéros de section (ex. *"Section 2.4 du Cahier des Charges (Card Expansion)"*, présent dans
  `ProjetStar.jsx`, `ProjetCard.jsx`, `ProjetDetails.jsx`, `ProjetDetailsStar.jsx`). Le badge
  `formation` dans `projectTypeData.js` référence aussi explicitement un *"logo officiel du
  centre de formation"* (`cef.svg`). Ce cahier des charges n'est pas un fichier présent dans ce
  dépôt — probablement un document externe lié à la formation suivie. À garder en tête si ces
  références deviennent incompréhensibles avec le temps : elles ne pointent vers rien dans le
  repo lui-même.
- Les tuiles de la grille Bento suivent une nomenclature de lettres dans les commentaires
  (Tuile A, B, C… jusqu'à I) qui ne correspond à aucune variable dans le code — c'est une
  convention purement documentaire pour se répérer dans `Home.jsx`.

## 9. Documentation du code (JSDoc)

Les hooks, les fichiers `data/` et les composants sont commentés en JSDoc (`@param`, `@returns`,
`@typedef`) avec des explications pédagogiques sur la syntaxe/les concepts non triviaux (voir la
convention de commentaires en [section 8](#8-conventions-du-projet)). Deux façons de la consulter :

### Dans l'éditeur (VS Code), sans rien installer

VS Code lit le JSDoc directement grâce à son service de langage JS intégré (celui de
TypeScript, actif aussi sur du `.jsx` sans configuration particulière) : survoler un nom de
fonction, de hook ou de prop affiche sa description et son type dans une infobulle, et
l'autocomplétion (`Ctrl+Espace`) montre les `@param` documentés.

### Site HTML navigable, via `npm run docs`

```bash
npm run docs
```

Génère un site de documentation statique dans `docs/api/` (ouvrir `docs/api/index.html` dans un
navigateur) à partir de [jsdoc](https://github.com/jsdoc/jsdoc) + du template
[better-docs](https://github.com/SoftwareBrothers/better-docs) (`jsdoc.config.json` à la racine).
`docs/api/` est un dossier **généré**, exclu de Git (`.gitignore`) comme `dist/` — à régénérer
après chaque changement de commentaires, jamais à éditer à la main.

Deux points techniques rencontrés en mettant ça en place, utiles à savoir si `npm run docs`
se remet à échouer un jour :

- **`better-docs` déclare une dépendance sur React 17**, alors que le projet est en React 18 —
  d'où l'installation avec `--legacy-peer-deps`. Sans conséquence : better-docs ne fait
  qu'analyser le code source en texte/AST, il n'exécute jamais réellement nos composants React.
- **Le parseur de types de jsdoc (Catharsis) ne comprend pas la syntaxe `import('chemin').Type`**
  (une convention TypeScript, pourtant celle que VS Code sait résoudre pour ses infobulles — voir
  ci-dessus). Le code source la conserve donc volontairement dans les `@param`/`@typedef`, mais un
  plugin jsdoc local (`jsdoc-plugins/strip-import-types.cjs`, déclaré dans `jsdoc.config.json`) la
  retire automatiquement avant que jsdoc n'analyse les commentaires, en ne gardant que le nom du
  type (ex: `import('../../data/projects/portfolioData').Project` devient `Project`, que jsdoc
  résout ensuite lui-même en lien cliquable vers le `@typedef` correspondant). Ce plugin doit
  rester en `.cjs` (pas `.js`) car `package.json` déclare `"type": "module"` — jsdoc charge ses
  plugins avec `require()`, incompatible avec un `.js` traité comme module ES.

## 10. Points d'attention connus

Cette section liste des éléments réels du code actuel qui méritent une vigilance ou un nettoyage
futur — pas des bugs bloquants, mais des points qu'il vaut mieux connaître avant d'y toucher à
l'aveugle.

1. **`src/data/projects/projects.json` est mort.** Non importé nulle part, exclu du dépôt Git.
   Il ne présente aucun risque tel quel (il n'est jamais chargé), mais il peut induire en erreur
   quelqu'un qui chercherait "où sont les données des projets" et tomberait dessus en premier vu
   son nom générique. À supprimer une fois sûr de ne plus vouloir le garder "pour référence".

2. **Filtre en dur `project.id !== 6` dans `Home.jsx`.** Résidu de l'ancien `projects.json` où
   l'entrée 6 était un template vide. Dans `portfolioData.js` actuel, il n'y a que 5 projets donc
   aucun impact aujourd'hui — mais un futur projet avec `id: 6` disparaîtrait silencieusement de
   l'affichage sans erreur ni avertissement.

3. **`Home.jsx` utilise `<body>` comme élément racine du JSX rendu** (`return (<body
   className='...'>...)`). Une page HTML ne doit avoir qu'un seul `<body>`, déjà fourni par
   `index.html` — React va donc dupliquer la balise dans le DOM final. Ça ne casse rien
   visuellement dans les navigateurs actuels (ils tolèrent la duplication), mais c'est un HTML
   invalide qui peut semer la confusion en DevTools ou poser problème avec des outils
   d'accessibilité stricts. Un `<div>` ferait l'affaire.

4. **`getTechDetails` est dupliqué** entre `ProjetStar.jsx` et `ProjetCard.jsx` (recherche d'une
   technologie dans `techData` par nom, insensible à la casse). Assumé comme un doublon plutôt
   qu'une factorisation prématurée — mais si la logique de correspondance doit changer un jour
   (ex. gérer des alias de noms), il faudra penser à modifier les deux endroits.

5. **Les classes conditionnelles de fondu dans `Home.jsx` réutilisent la valeur `'stack'`** pour
   les tuiles B (StackCard), C (Parcours) et H (Contact) — alors que seule la tuile B correspond
   réellement à "stack". Comme ces trois tuiles ne sont pas elles-mêmes expansibles (pas de
   `useCardExpansion`), la condition `expansionProjetId !== 'stack'` ne s'active jamais
   différemment de `!== 'parcours'` ou `!== 'contact'` en pratique (aucune de ces chaînes n'est
   jamais assignée à `expansionProjetId`, qui ne contient que `null` ou un `id` numérique de
   projet). Fonctionnellement inoffensif aujourd'hui, mais trompeur à la lecture.

6. **`src/App.test.js` est un test par défaut de Create React App, jamais adapté au projet.** Il
   cherche un lien contenant le texte *"learn react"*, qui n'existe pas dans `Home.jsx` — ce test
   échouerait s'il était exécuté. De plus, `@testing-library/react` n'apparaît pas dans les
   dépendances du `package.json` actuel, et il n'y a **aucun script `test`** défini. Ce fichier
   est donc du code mort hérité du bootstrap initial du projet (probablement la V2 en Create
   React App mentionnée dans le README), sans impact tant que personne ne tente de lancer de
   tests — mais toute tentative future de mettre en place une suite de tests devra d'abord
   nettoyer ou remplacer ce fichier.

7. **`react-router-dom` est installé mais entièrement inutilisé, et `Mentions.jsx` est orphelin.**
   Recherche confirmée dans tout `src/` : aucun fichier n'importe `react-router-dom` (pas de
   `BrowserRouter`, `Routes` ou `Route`), et `Mentions.jsx` (mentions légales) n'est importé par
   aucun autre composant — `App.jsx` ne rend que `<Home />`. La page de mentions légales existe
   donc dans le code mais n'est **accessible par aucun chemin dans l'application actuelle**. Deux
   options pour la suite : la brancher réellement (avec `react-router-dom`, ce qui justifierait
   enfin la dépendance), ou constater qu'elle n'est plus nécessaire et supprimer les deux (le
   composant et la dépendance).

8. **Classes Bootstrap mortes dans `Footer.jsx` et `Mentions.jsx`.** Ces deux fichiers utilisent
   des classes issues de Bootstrap (`fs-6`, `fst-italic`, `text-decoration-none`, `d-flex`,
   `flex-column`, `text`, `text-strong`) — résidu de la V2 du portfolio, alors bâtie sur
   Bootstrap/SCSS (voir le tableau comparatif du README). Bootstrap n'est pas installé dans ce
   projet (seul `tailwindcss` figure en dépendance) : ces classes n'ont **aucun effet**, le texte
   concerné (copyright, coordonnées, mention légale) s'affiche donc sans l'italique/la taille/le
   style recherchés à l'origine — seules les classes qui existent aussi telles quelles en Tailwind
   (`p-5`, `p-3`, `mb-1`...) fonctionnent réellement. À corriger en classes Tailwind équivalentes
   (`italic`, `text-sm`, `no-underline`, `flex flex-col`) le jour où ces fichiers sont retouchés.
