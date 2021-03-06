/**
 * Created by GABRIEL on 08/09/2016.
 */
//require mongoose module
var mongoose = require('mongoose');
var loc = require('./location.model').schema;

//instantiate mongoose schema
var Schema = mongoose.Schema;

//create recipe schema
var problemSchema = new Schema({
    "place" : String,
    "placeOther" : String,
    "problem" : String,
    "problemOther" : String,
    "detail" : String,
    "solution": String,
    "date":{ type: Date, default: Date.now },
    "loc": [loc],
    "userEmail":String
});

//export schema
module.exports = mongoose.model('problem', problemSchema);

