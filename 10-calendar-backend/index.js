const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
// variables de entorno
//console.log(process.env);

const app = express();

// Directorio publico
app.use( express.static('public') );


// Rutas
// lo que './routes/auth' vaya a exportar lo va a habilitar en '/api/auth'
app.use('/api/auth', require('./routes/auth'));

// TODO: auth // crear, login, renew
// TODO: CRUD: Eventos


//Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
} );