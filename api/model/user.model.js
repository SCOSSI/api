/**
 * Created by GABRIEL on 29/08/2016.
 */

//require mongoose module
var mongoose = require('mongoose');

//instantiate mongoose schema
var Schema = mongoose.Schema;

//create recipe schema
var userSchema = new Schema({
    "name":String,
    "email":String,
    "date":[Date]
});
//export schema
module.exports = mongoose.model('user', userSchema);