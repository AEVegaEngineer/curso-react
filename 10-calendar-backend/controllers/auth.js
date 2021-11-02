const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');
const { longDateFormat } = require('../helpers/dateFormat');


const crearUsuario = async(req, res = response) => {  
  //console.log(req.body)
  
  const {name,email,password} = req.body;
  try {
    // OJO, esto debe tener await, sino siempre devuelve la misma response
    // y es el equivalente a que cualquier usuario ya se encuentre registrado
    let usuario = await Usuario.findOne({email: email});    
    if( usuario ){
      console.log('********* Error en crearUsuario. Ya existe un usuario con el mismo correo electrónico. '+longDateFormat(Date.now())+' *********');
      console.log(email)
      return res.status(400).json({
        ok:false,
        msg: 'Ya existe un usuario con el mismo correo electrónico'
      })
    }
    usuario = new Usuario(req.body);
    // Encriptar contrasena
    // para usar bcrypt se necesita un salt, que es un numero usado para el encriptado
    // entre mas vueltas que se den para generar el salt, mas seguro pero mas procesamiento se consume
    const salt = bcrypt.genSaltSync(); // por defecto tiene 10 vueltas
    usuario.password = bcrypt.hashSync(password,salt);

    await usuario.save();

    // Genera nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);
    console.log('********* Guardado nuevo usuario. '+longDateFormat(Date.now())+' *********');
    console.log(usuario)
    return res.status(201).json({
      ok: true, 
      uid: usuario.id, 
      name: usuario.name,
      token
    });  
    
  } catch (error) {
    console.log('********* Error guardado nuevo usuario. '+longDateFormat(Date.now())+' *********');
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error en el registro'
    })
  }
  
}

const loginUsuario = async(req, res = response) => {  
  
  const {email,password} = req.body;
  
  try {
    let usuario = await Usuario.findOne({email: email});
    
    if( !usuario ){
      console.log('********* Error en login. Correo electronico incorrecto. '+longDateFormat(Date.now())+' *********');
      return res.status(400).json({
        ok:false,
        msg: 'Usuario o contraseña incorrecta'
      });
    }
    // Confirmar los passwords
    const validPassword = bcrypt.compareSync( password, usuario.password );
    
    if(! validPassword ){
      console.log('********* Error en login. Contraseña incorrecta. '+longDateFormat(Date.now())+' *********');
      return res.status(400).json({
        ok:false,
        msg: 'Usuario o contraseña incorrecta'
      });;
    }

    // Genera nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);
    console.log('********* Iniciando sesion. '+longDateFormat(Date.now())+' *********');
    console.log('Id del usuario: '+usuario.id);
    console.log('Nombre del usuario: '+usuario.name);    
    return res.status(200).json({
      ok: true, 
      uid: usuario.id, 
      name: usuario.name,
      token
    }); 

  } catch (error) {
    console.log('********* Error en loginUsuario. '+longDateFormat(Date.now())+' *********');
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error en el registro'
    })
  }
}
const revalidarToken = async(req, res = response) => {  
  const uid = req.uid;
  const name = req.name;
  const token = await generarJWT(uid, name);
  console.log('********* Revalidando token. '+longDateFormat(Date.now())+' *********');
  return res.header('X-Authorization', token).json({
    ok: true, 
    msg: 'Token revalidado',
    token,
    uid,
    name
  });  
}

module.exports = {
  crearUsuario, // igual que poner crearUsuario: crearUsuario
  loginUsuario,
  revalidarToken,
}