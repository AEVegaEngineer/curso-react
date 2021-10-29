const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async(req, res = response) => {  
  //console.log(req.body)
  
  const {name,email,password} = req.body;
  try {
    // OJO, esto debe tener await, sino siempre devuelve la misma response
    // y es el equivalente a que cualquier usuario ya se encuentre registrado
    let usuario = await Usuario.findOne({email: email});
    // console.log('*************************************')
    // console.log(usuario)
    if( usuario ){
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

    return res.status(201).json({
      ok: true, 
      uid: usuario.id, 
      name: usuario.name,
      token
    });  
    
  } catch (error) {
    console.log("************* Error registrando usuario *************");
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
      console.log('not valid email')
      return res.status(400).json({
        ok:false,
        msg: 'Correo electronico incorrecto'
      });
    }
    // Confirmar los passwords
    const validPassword = bcrypt.compareSync( password, usuario.password );
    
    if(! validPassword ){
      console.log('not valid password')
      return res.status(400).json({
        ok:false,
        msg: 'contraseña incorrectos'
      });;
    }

    // Genera nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);

    return res.status(200).json({
      ok: true, 
      uid: usuario.id, 
      name: usuario.name,
      token
    }); 

  } catch (error) {
    console.log("************* Error iniciando sesion *************");
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
  return res.header('X-Authorization', token).json({
    ok: true, 
    status: 'Token revalidado en el header'/*,
    token*/
  });  
}

module.exports = {
  crearUsuario, // igual que poner crearUsuario: crearUsuario
  loginUsuario,
  revalidarToken,
}