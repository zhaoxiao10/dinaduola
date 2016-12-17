var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var dinaduolaSchema = new Schema({
    content: String,
    year: String,
    month: String,
    day: String
});

// bind module for accessing outside
module.exports = mongoose.model('Dinaduola', dinaduolaSchema);
