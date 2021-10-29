const { response } = require('express');
const { validationResult } = require('express-validator')
const validarCampos = (req, res = response, next) => { 
  // next itera las validaciones en las rutas, si ya no hay validaciones
  // retorna el controlador
  const errors = validationResult( req );  
  //console.log(errors)
  if(!errors.isEmpty()){
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }
  next();
}

module.exports = {validarCampos};