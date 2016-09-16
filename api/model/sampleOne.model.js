/**
 * Created by GABRIEL on 29/08/2016.
 */
//require mongoose module
var mongoose = require('mongoose');
var loc = require('./location.model').schema;

//instantiate mongoose schema
var Schema = mongoose.Schema;

//create recipe schema
var sampleOneSchema = new Schema({
    
    "place":String,
    "placeOther":String,
    "doing":String,
    "isWorkingWithSomeone":String,
    "isWorkingWith":String,
    "isWorkingWithSomeoneOther":String,
    "feeling":String,
    "feelingPositive":String,
    "feelingNegative":String,
    "date":{ type: Date, default: Date.now },
    "loc": [loc],
    "userEmail":String
});
//export schema
module.exports = mongoose.model('sampleOne', sampleOneSchema);