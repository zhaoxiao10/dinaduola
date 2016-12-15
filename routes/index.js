var express = require('express');
//db
var db = require('mongoskin').db('mongodb://dinaduola:dinaduola@localhost:27017/dinaduola');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.collection('user').find({"username":"pengji"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.render('index', { title: result[0].username });
  });
});

module.exports = router;
