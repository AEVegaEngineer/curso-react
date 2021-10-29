const mongoose = require('mongoose');

const dbConnection = async() => {
  try {
    mongoose.connect( process.env.DB_CNN, { 
      useNewUrlParser: true,
      useUnifiedTopology: true, 
      /*useCreateIndex: true, */
    });
    console.log('DB Online');
  } catch (error) {
    console.log("************* Error conectando a base de datos *************");
    console.log(error);
    throw new Error('Error al inicializar la base de datos');
  }
}

module.exports = { dbConnection }