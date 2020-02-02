var mongoose = require("mongoose");
var rateSchema = mongoose.Schema({
    totalCost:Number,
    mealRate : Number,
    totalMeal:Number
});
module.exports = mongoose.model("Rate",rateSchema);