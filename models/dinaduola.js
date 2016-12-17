var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var dinaduolaSchema = new Schema({
    content: String
});

// bind module for accessing outside
module.exports = mongoose.model('Dinaduola', dinaduolaSchema);
