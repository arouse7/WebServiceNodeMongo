module.exports = function (app) {

    //Schame de nuestro modelo
    var Game = require('../models/game.js');

    //GET - Retorna todos los juegos 
    findAllGames = function (req, res) {
        Game.find(function (err, games) {
            if (!err) {
                res.send(games);
            } else {
                res.send('Error');
            }
        });
    };

    //GET - Retorna un juego específico
    findById = function (req, res) {
        Game.findById(req.params.id, function (err, game) {
            if (!err) {
                res.send(game);
            } else {
                res.send('Error');
            }
        });
    };

    //POST - Inserta un nuevo juego
    addGame = function (req, res) {
        console.log('POST');
        console.log(req.body);

        var game = new Game({
            name: req.body.name,
            plataform: req.body.plataform,
            type: req.body.type,
            raiting: req.body.raiting,
            rate: req.body.rate
        });

        game.save(function (err) {
            if (!err) {
                res.send(game);
            } else {
                res.send('Error');
            }
        });


    };

    //PUT - Modifica un juego
    updateGame = function (req, res) {
        Game.findById(req.params.id, function (err, game) {
            game.name = req.body.name;
            game.plataform = req.body.plataform;
            game.type = req.body.type;
            game.raiting = req.body.raiting;
            game.rate = req.body.rate;

            game.save(function (err) {
                if (!err) {
                    res.send(game);
                } else {
                    res.send('Erorr');
                }
            });
        });
    }

    //DELETE - Borra un juego
    deleteGame = function (req, res) {
        Game.findById(req.params.id, function (err, game) {
            game.remove(function (err) {
                if (!err) {
                    res.send('Eliminado');
                } else {
                    res.send('Error');
                }
            })
        });
    }

    //Rutas ligadas a cada función
    app.get('/game', findAllGames);
    app.get('/game/:id', findById);
    app.post('/game', addGame);
    app.put('/game/:id', updateGame);
    app.delete('/game/:id', deleteGame);

}