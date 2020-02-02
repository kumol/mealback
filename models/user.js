var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name:String,
    email:String,
    region:String,
});
module.exports = mongoose.model("EmailUser",userSchema);