const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { dbConnection } = require('./database/config');
dotenv.config();
// variables de entorno
//console.log(process.env);

const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors());
console.log('CORS habilitado y funcionando para todos los origenes!')

// Directorio publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use(express.json());


// Rutas
// lo que './routes/auth' vaya a exportar lo va a habilitar en '/api/auth'
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// TODO: auth // crear, login, renew
// TODO: CRUD: Eventos


//Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});