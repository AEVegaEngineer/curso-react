const {response} = require('express');
const jwt = require('jsonwebtoken');
const validarJWT = (req, res = response, next) => {
  //viene en el header como X-Authorization
  const token = req.header('X-Authorization');
  if(!token){
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la peticion'
    });
  }

  try {
    // se puede guardar la informacion del usuario que renueva el token 
    // en el payload ya que los objetos req y res mantienen sus valores
    // cuando son pasados al siguiente metodo, al usar next()
    const payload = jwt.verify( token, process.env.SECRET_JWT_SEED );
    req.uid = payload.uid;
    req.name = payload.name;

  } catch (error) {
    console.log("************* Error validando JWT *************");
    console.log(error)
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    });
  }

  next();

}

module.exports = {validarJWT}