var Dinaduola = require('../models/dinaduola.js');
var express = require('express');
var router = express.Router();

// get all movies
router.list = function(req, res){
    Dinaduola.find(function (err, dinaduola) {
        if (err) {
            return res.send(err);
        }
        res.json(dinaduola);
    })
    //res.send({message: 'list movie'});
};

// create new movie
router.create = function(req, res){
    var dinaduola = new Dinaduola(req.body);

    dinaduola.save(function (err) {
        if (err) {
            return res.send(err);
        }
        res.send({message: 'add a dinaduola'});
    });
};

//delete a movie
router.delete = function (req, res) {
    Dinaduola.remove({_id: req.params.id}, function (err, movie) {
        if (err) {
            return res.send(err);
        }
        res.json({message: 'delete a movie'});
    });
};

module.exports = router;
