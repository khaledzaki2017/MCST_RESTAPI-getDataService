const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    title: String,
    name: String,
    id: Number
})

module.exports = mongoose.model("Test", testSchema)