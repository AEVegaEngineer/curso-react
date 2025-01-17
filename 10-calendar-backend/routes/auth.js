/*
  Rutas de Usuarios / Auth
  llamar con: host + /api/auth
*/
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator')

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email tiene un formato erroneo').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password tener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos // esto debe ir al final OBLIGATORIO PARA MOSTRAR LOS ERRORES
  ] , // arreglo de middlewares
  crearUsuario
);

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email tiene un formato erroneo').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password tener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos // esto debe ir al final
  ] , // arreglo de middlewares
  loginUsuario
);

router.get('/renew', [validarJWT], revalidarToken);


module.exports = router;