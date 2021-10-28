const {response} = require('express');


const crearUsuario = (req, res = response) => {  
  //console.log(req.body)
  const {name,email,password} = req.body;

  if(name.length < 5 ){
    return res.status(400).json({
      ok: false,
      msg: 'EL nombre debe tener al menos 5 letras'
    })
  }

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