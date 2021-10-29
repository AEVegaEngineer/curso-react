const express = require('express');
const dotenv = require('dotenv');
const { dbConnection } = require('./database/config');
dotenv.config();
// variables de entorno
//console.log(process.env);

const app = express();

//Base de datos
dbConnection();

// Directorio publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use(express.json());


// Rutas
// lo que './routes/auth' vaya a exportar lo va a habilitar en '/api/auth'
app.use('/api/auth', require('./routes/auth'));

// TODO: auth // crear, login, renew
// TODO: CRUD: Eventos


//Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
} );