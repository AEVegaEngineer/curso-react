/*
  Rutas de Eventos / events
  llamar con: host + /api/events
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator')

//const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

// Todas tienen que pasar por la validacion de jwt
// equivalente a escribir en todas las rutas 
// router.get('/', [validarJWT], getEventos);
router.use( validarJWT );
// si fuese necesario establecer una ruta como publica
// (que no se vea afectada por validarJWT) establecerla encima del router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos);
// Crear evento
router.post('/add', crearEvento);
// Actualizar evento
router.put('/:id', actualizarEvento);
// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;