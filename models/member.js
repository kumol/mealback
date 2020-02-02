const mongoose = require("mongoose");
let memberSchema = mongoose.Schema({
    name:String,
    amount:Number,
    totalMeal:Number,
});
module.exports = mongoose.model("Member",memberSchema);