const {setup} = require('@cowtech/webpack-config');

module.exports = function(env){
  return setup(env, {
    entries: {'js/app.js': './src/js/application.jsx'},
    indexFile: 'src/index.html.jsx',
    transpilers: ['babel', 'react'],
    distFolder: 'dist'
  });
};
