/*
  Rutas de Usuarios / Auth
  llamar con: host + /api/auth
*/
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  console.log('se requiere el /');
  res.json({
    ok: true
  })
});

module.exports = router;