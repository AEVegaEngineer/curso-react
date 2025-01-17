const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
  title:  { type: 'string', required: true },
  notes:  { type: 'string' },
  start:  { type: Date, required: true },
  end:    { type: Date, required: true },
  user:   { type: Schema.Types.ObjectId, ref:'Usuario', required: true }, // no se envia en el request, se
});

EventoSchema.method('toJSON', function(){
  const {__v, _id, ...object} = this.toObject();
  object.id = _id;
  return object;
})

module.exports = model('Evento',EventoSchema);
