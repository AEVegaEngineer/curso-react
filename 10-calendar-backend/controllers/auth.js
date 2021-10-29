const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');


const crearUsuario = async(req, res = response) => {  
  //console.log(req.body)
  //const {name,email,password} = req.body;
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    return res.status(201).json({
      ok: true, 
      msg: 'registro'
    });  
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error en el registro'
    })
  }
  
}

const loginUsuario = (req, res = response) => {  
  
  const {email,password} = req.body;
  
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