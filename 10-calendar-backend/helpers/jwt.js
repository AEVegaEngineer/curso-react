const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {
  
  return new Promise( (resolve, reject) => {
    const payload = { uid, name };
    // firma del token que contiene el uid y name, con la seed en el archivo de entorno
    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      // especifico la duracion
      expiresIn: '2h'
    }, (err, token) => {
      // una vez firmado se va a llamar el callback
      if( err ){
        console.log(err);
        reject('No se pudo generar el token')
      }
      resolve(token)
    })
  });
}

module.exports = {generarJWT}