var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
  
  //Se define una estructura para los juegos que contendrá la base de datos
  var gameSchema = new Schema({
    name: String,
    plataform: String,
    type: String,
    rating: String,
    rate: Number
  });

module.exports = mongoose.model('games',gameSchema);