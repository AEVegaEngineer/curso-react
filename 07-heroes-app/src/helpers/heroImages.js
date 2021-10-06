// https://webpack.js.org/guides/dependency-management/#requirecontext
// se usa para importar todos los elementos del folder, el segundo argumento es un
// booleano que determina si se busca en subdirectorios
export const heroImages = require.context('../assets/heroes', true);