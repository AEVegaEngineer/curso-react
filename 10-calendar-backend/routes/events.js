/*
  Rutas de Eventos / events
  llamar con: host + /api/events
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

// Todas tienen que pasar por la validacion de jwt
// equivalente a escribir en todas las rutas 
// router.get('/', [validarJWT], getEventos);
router.use( validarJWT );
// si fuese necesario establecer una ruta como publica
// (que no se vea afectada por validarJWT) establecerla encima del router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos);
// Crear evento
router.post(
  '/add',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').not().isEmpty(),
    check('start', 'Fecha de inicio debe tener formato de fecha').custom( isDate ), 
    check('end', 'Fecha de finalizacion es obligatoria').not().isEmpty(),
    check('end', 'Fecha de finalizacion debe tener formato de fecha').custom( isDate ),    
    //check('user', 'El usuario es obligatorio').not().isEmpty(),   
    validarCampos // esto debe ir al final OBLIGATORIO PARA MOSTRAR LOS ERRORES
  ],
  crearEvento
);
// Actualizar evento
router.put('/:id', actualizarEvento);
// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;