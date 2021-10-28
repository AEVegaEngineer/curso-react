/*
  Rutas de Usuarios / Auth
  llamar con: host + /api/auth
*/
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator')

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email tiene un formato erroneo').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password tener al menos 6 caracteres').isLength({ min: 6 }),
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
  ] , // arreglo de middlewares
  loginUsuario
);

router.get('/renew', revalidarToken);


module.exports = router;