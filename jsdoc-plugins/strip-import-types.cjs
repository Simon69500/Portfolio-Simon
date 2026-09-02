// Plugin jsdoc local (pas un package npm) : le parseur de types de jsdoc (Catharsis) ne
// comprend pas la syntaxe `import('chemin/relatif').NomDuType`, utilisée dans ce projet
// pour référencer un @typedef défini dans un autre fichier (ex: data/projects/portfolioData.js)
// depuis un composant qui l'utilise (ex: `@param {import('../../data/projects/portfolioData').Project}`).
// Cette syntaxe est pourtant volontairement conservée dans le code source car c'est elle
// que VS Code sait résoudre pour l'auto-complétion/les infobulles au survol (voir
// DOCUMENTATION.md pour le détail des deux façons de lire le JSDoc de ce projet).
//
// Ce plugin s'exécute AVANT que jsdoc n'analyse le code (hook "beforeParse") et retire
// uniquement le préfixe `import('...').`, ne laissant que le nom du type — jsdoc peut alors
// le résoudre lui-même comme un lien vers le @typedef correspondant, tant que ce nom est
// unique dans tout le projet documenté (ce qui est le cas ici : Project, ProjectMetric,
// ProjectRoleEntry, FeaturedProjectDetails, StandardProjectDetails).
exports.handlers = {
    beforeParse: function (e) {
        e.source = e.source.replace(/import\((['"]).*?\1\)\./g, '');
    }
};
