let mongoose = require("mongoose");
var costSchema = mongoose.Schema({
    cost:Number,
    number:Number,
    totalCost:Number
});
module.exports = mongoose.model("Cost",costSchema);