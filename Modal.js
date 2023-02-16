const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name:String,
    roll:String
})

module.exports = mongoose.model("Test",schema)