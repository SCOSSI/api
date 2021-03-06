/**
 * Created by GABRIEL on 29/08/2016.
 */

//require mongoose module
var mongoose = require('mongoose');
var loc = require('./location.model').schema;

//instantiate mongoose schema
var Schema = mongoose.Schema;

//create recipe schema
var sampleThreeSchema = new Schema({
    "sharedInformation":String,
    "whoWithSharedInformation":String,
    "informationPersonNeeded":String,
    "communicationToolUsed":String,
    "communicationToolUsedOther":String,
    "date":{ type: Date, default: Date.now },
    "loc": [loc],
    "userEmail":String
});
//export schema
module.exports = mongoose.model('sampleThree', sampleThreeSchema);