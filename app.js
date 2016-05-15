var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Muestra las operaciones realizadas en el servidor
app.use(morgan('dev'));

//Se crea la conexión a mongo
mongoose.connect('mongodb://localhost/games');

//Si la conexión falla se imprimirá el mensaje
mongoose.connection.on('error', console.error.bind(console, 'Error en mongno'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

//permitir la consulta desde localhost si se utilizará jquery
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Se carga la función que tiene las operaciones CRUD 
var routes = require('./controllers/games')(app);


//Se inicia el servidor en el puerto 3000
app.listen(3000, function () {
  console.log("Servidor iniciado en el puerto 3000");
});