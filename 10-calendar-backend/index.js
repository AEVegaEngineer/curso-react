const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
console.log(process.env);

const app = express();

// Directorio publico
app.use( express.static('public') );


// Rutas
app.get('/', (req, res) => {
  console.log('se requiere el /');
  res.json({
    ok: true
  })
});

//Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
} );