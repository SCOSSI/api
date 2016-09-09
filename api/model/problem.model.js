/**
 * Created by GABRIEL on 08/09/2016.
 */
//require mongoose module
var mongoose = require('mongoose');

//instantiate mongoose schema
var Schema = mongoose.Schema;

//create recipe schema
var problemSchema = new Schema({
    "place" : String,
    "placeOther" : String,
    "problem" : String,
    "problemOther" : String,
    "detail" : String,
    "date":[Date],
    "longitude":String,
    "latitude":String,
    "userEmail":String
});
//export schema
module.exports = mongoose.model('problem', userGeolocationSchema);