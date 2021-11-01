
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
    console.log('********* Guardado nuevo evento. '+longDateFormat(Date.now())+' *********');
    console.log(eventoGuardado)
    return res.json({ 
      ok: true,
      evento: eventoGuardado,
      msg: 'Evento guardado'
    });    
  } catch (error) {
    console.log('********* Error en crearEvento. '+longDateFormat(Date.now())+' *********');
    console.log(error);
    return res.status(500).json({
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
      console.log('********* Error en actualizarEvento. Evento no encontrado. '+longDateFormat(Date.now())+' *********');
      console.log('eventoId:'+eventoId);
      return res.status(404).json({
        ok: false,
        msg: 'No existe un evento con ese id'
      });
    }
    //NO PERMITIR QUE UN USUARIO EDITE EL EVENTO DE OTRO USUARIO
    if( evento.user.toString() !== uid ){
      return res.status(401).json({
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
    console.log('********* Evento actualizado. '+longDateFormat(Date.now())+' *********');
    console.log({...req.body, eventoId});
    return res.json({
      ok: true,
      evento: eventoActualizado,
      msg: 'Evento actualizado',
    }); 
  } catch (error) {
    console.log('********* Error en actualizarEvento. '+longDateFormat(Date.now())+' *********');
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

const eliminarEvento = async(req, res = response) => {  
  const eventoId = req.params.id;
  const uid = req.uid;
  try {
    const evento = await Evento.findById(eventoId);
    if(!evento) {
      console.log('********* Error en eliminarEvento. Evento no encontrado. '+longDateFormat(Date.now())+' *********');
      console.log('eventoId:'+eventoId);
      return res.status(404).json({
        ok: false,
        msg: 'No existe un evento con ese id'
      });
    }
    //NO PERMITIR QUE UN USUARIO EDITE EL EVENTO DE OTRO USUARIO
    if( evento.user.toString() !== uid ){
      res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio para eliminar este evento'
      });
    }    
    
    const eventoEliminado = await Evento.findByIdAndDelete(eventoId);
    console.log('********* Evento eliminado. '+longDateFormat(Date.now())+' *********');
    console.log({...req.body, eventoId});
    return res.json({
      ok: true,
      msg: 'Evento eliminado',
      evento: eventoEliminado
    }); 
    
  } catch (error) {
    console.log('********* Error en eliminarEvento. '+longDateFormat(Date.now())+' *********');
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
}