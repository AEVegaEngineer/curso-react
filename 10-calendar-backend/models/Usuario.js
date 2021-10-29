const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  name: {type: 'string', required: true},
  email: {type: 'string', required: true, unique: true},
  password: {type: 'string', required: true},
});

module.exports = model('Usuario',UsuarioSchema);


// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));