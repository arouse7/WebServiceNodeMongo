var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
  
  var gameSchema = new Schema({
    name: String,
    plataform: String,
    type: String,
    raiting: String,
    rate: Number
  });

module.exports = mongoose.model('games',gameSchema);