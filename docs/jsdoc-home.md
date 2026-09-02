# Documentation technique — Portfolio Simon Badin

Ce site est généré automatiquement à partir des commentaires JSDoc du code (`npm run docs`,
voir `jsdoc.config.json`) : il documente la forme précise de chaque hook, composant et
structure de données (props, types, valeurs de retour).

Pour comprendre **pourquoi** le projet est construit ainsi (architecture, modèle de données,
guides pratiques, points d'attention connus), voir
[DOCUMENTATION.md](https://github.com/Simon69500/Portfolio-Simon/blob/main/docs/DOCUMENTATION.md)
à la racine du dépôt — ce site-ci est le complément **technique et navigable**, pas un remplacement.

## Pour naviguer

- **`Global`** dans le menu de gauche liste tous les hooks, composants et objets de données
  documentés (fonctions et `@typedef`).
- Les hooks (`useTheme`, `useContactForm`, `useCardExpansion`) et les fichiers `data/`
  (`techData`, `portfolioData`, `profileData`, `projectTypeData`) sont un bon point de départ :
  ce sont eux que les composants consomment.
