
const { response } = require('express');
const Evento = require('../models/Evento');
const { longDateFormat } = require('../helpers/dateFormat');

const getEventos = async(req, res = response) => {  
  const eventos = await Evento.find().populate('user','name');
  return res.status(200).json({
    ok: true,
    eventos
  }); 
}

const crearEvento = async(req, res = response) => { 
  const evento = new Evento(req.body);
  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();
    res.json({ 
      ok: true,
      evento: eventoGuardado
    });    
    console.log('********* Guardado nuevo evento. '+longDateFormat(Date.now())+' *********');
    console.log(eventoGuardado)
  } catch (error) {
    console.log('********* Error en crearEvento. '+longDateFormat(Date.now())+' *********');
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

const actualizarEvento = async(req, res = response) => {  
  const eventoId = req.params.id;
  const uid = req.uid;
  try {
    const evento = await Evento.findById(eventoId);
    if(!evento) {
      res.status(404).json({
        ok: false,
        msg: 'No existe un evento con ese id'
      });
      console.log('********* Error en actualizarEvento. Evento no encontrado. '+longDateFormat(Date.now())+' *********');
      console.log('eventoId:'+eventoId);
    }
    //NO PERMITIR QUE UN USUARIO EDITE EL EVENTO DE OTRO USUARIO
    if( evento.user.toString() !== uid ){
      res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio para editar este evento'
      });
    }
    const nuevoEvento = {
      ...req.body,
      user: uid
    }
    // por defecto mongo retorna el evento viejo luego de hacer update
    // esto con el fin de que se puedan hacer comparaciones
    // si se necesita que retorne el objeto nuevo, es necesario pasar
    // opciones en el tercer argumento del update
    const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );
    res.json({
      ok: true,
      evento: eventoActualizado
    }); 
    console.log('********* Evento actualizado. '+longDateFormat(Date.now())+' *********');
    console.log({...req.body, eventoId});
  } catch (error) {
    console.log('********* Error en actualizarEvento. '+longDateFormat(Date.now())+' *********');
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

const eliminarEvento = async(req, res = response) => {  
  return res.status(200).json({
    ok: true,
    msg: 'eliminarEvento'
  }); 
}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
}