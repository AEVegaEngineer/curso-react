const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
  title:  { type: 'string', required: true },
  notes:  { type: 'string' },
  start:  { type: Date, required: true },
  end:    { type: Date, required: true },
  user:   { type: Schema.Types.ObjectId, ref:'Usuario' },
});

module.exports = model('Evento',EventoSchema);
