# Portfolio - Simon Badin

## À propos de ce projet
Portfolio personnel développé avec React (Vite), Tailwind CSS, hébergé sur GitHub Pages.
Sections : Accueil, Parcours, Stack Technique, Projets (cartes bento + pages détail), Contact.
Objectif : vitrine professionnelle pour candidatures dev web & mobile fullstack.

## Stack technique
- Frontend : React, TypeScript/JavaScript, Tailwind CSS
- Build : Vite
- Hébergement : GitHub Pages
- Autres projets référencés (liens externes) : Node.js/Express, PHP/Symfony, MongoDB, PostgreSQL/PostGIS

## Qui je suis (contexte pour toi, Claude)
Développeur en reconversion, à l'aise avec les bases mais je veux comprendre en profondeur
chaque solution proposée, pas juste obtenir un résultat qui fonctionne.

## Méthode de travail - RÈGLES STRICTES

### Avant de coder
- Explique toujours la solution envisagée en langage clair AVANT d'écrire du code :
  le raisonnement, pourquoi ce choix plutôt qu'une alternative, les compromis.
- Découpe toute tâche non triviale en étapes. Valide avec moi avant de passer à l'étape
  suivante si l'étape est structurante (nouvelle feature, changement d'architecture).
- Pose une question si un point du besoin n'est pas clair, plutôt que de supposer.

### Sur le code
- Commente le code de façon substantielle : explique le "pourquoi", pas juste le "quoi".
- Explique la syntaxe et les concepts dès qu'ils ne sont pas déjà utilisés ailleurs
  dans le projet, ou dès qu'ils sont un minimum avancés. Je veux comprendre ce que j'écris.
- Si tu introduis une librairie, un pattern ou une méthode nouvelle dans ce projet,
  explique brièvement ce qu'elle fait et pourquoi elle est adaptée ici.

### Interdictions strictes
- NE JAMAIS résumer, raccourcir ou synthétiser mon texte ou mon code sans demande
  explicite de ma part. Une réponse complète en retour d'un contenu complet fourni.
- NE JAMAIS inventer un comportement de librairie, un nom de fonction, un résultat
  attendu, ou un détail technique dont tu n'es pas certain. Si tu ne sais pas,
  dis-le clairement et demande une précision plutôt que de supposer.
- NE JAMAIS faire d'hypothèse silencieuse sur du code existant que tu n'as pas
  consulté : demande à voir le fichier concerné avant de modifier ou de commenter dessus.

## Workflow Git

### Branches
- Avant de commencer une nouvelle fonctionnalité ou un correctif, propose la création
  d'une branche dédiée avant de modifier quoi que ce soit sur `main`.
- Nommage : `feature/nom-fonctionnalite` pour une nouveauté, `fix/nom-bug` pour un correctif.
- Rappelle sur quelle branche on travaille si la session s'étend sur plusieurs échanges.

### Commits
- Propose un commit dès qu'une étape logique et cohérente est terminée (ni trop tôt,
  ni en attendant la fin de tout le projet).
- Message de commit toujours clair et conventionnel :
  `feat: ...`, `fix: ...`, `refactor: ...`, `docs: ...`, `style: ...`, `test: ...`
  Jamais de message vague type "update" ou "changes".
- Demande confirmation avant de committer si le changement est structurant.
  Pour un ajustement mineur déjà validé dans l'échange, tu peux committer directement.

### Push
- Propose de push seulement quand l'étape est stable (testée, fonctionnelle).
- Signale quand une branche est prête à être fusionnée dans `main` via Pull Request,
  ne merge jamais directement toi-même sans validation explicite.

## Conventions du projet
- Langue des commentaires et de la doc : français
- Nommage des variables/fonctions : anglais (convention dev standard), commentaires en français
- Descriptions de projets (contenu du portfolio) : angle "problème résolu", jamais de mention
  du type "Devoir CEF" en première ligne — contexte de formation à mentionner plus loin
  si pertinent, jamais en intro