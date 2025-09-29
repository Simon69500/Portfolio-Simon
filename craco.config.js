const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@scss': path.resolve(__dirname, 'src/assets/scss'),
            '@img': path.resolve(__dirname, 'src/assets/img')
        },
    },
};