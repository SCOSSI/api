/**
 * Created by GABRIEL on 15/09/2016.
 */
//require mongoose module
var mongoose = require('mongoose');

//instantiate mongoose schema
var Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema({
    location : {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    },
    creationDate: { type: Date, default: Date.now },
    name: String
});

LocationSchema.index({ location : '2dsphere' });
//export schema
module.exports = mongoose.model('location', LocationSchema);