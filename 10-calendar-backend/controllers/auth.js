const { response } = require('express');
const { validationResult } = require('express-validator');

// manejo de errores
const handleErrors = (req, res) => {  
  const errors = validationResult( req );  
  //console.log(errors)
  if(!errors.isEmpty()){
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }
}

const crearUsuario = (req, res = response) => {  
  //console.log(req.body)
  const {name,email,password} = req.body;

  handleErrors(req, res);

  return res.status(201).json({
    ok: true, 
    msg: 'registro',
    name,
    email,
    password
  })  
}

const loginUsuario = (req, res = response) => {  
  const {email,password} = req.body;

  handleErrors(req, res);
  
  return res.json({
    ok: true, 
    msg: 'login',
    email,
    password
  })
}
const revalidarToken = (req, res = response) => {  
  res.json({
    ok: true, 
    msg: 'renew'
  })
}

module.exports = {
  crearUsuario, // igual que poner crearUsuario: crearUsuario
  loginUsuario,
  revalidarToken,
}