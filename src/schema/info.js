const mongoose = require('mongoose')

const infoSchema = mongoose.Schema({
    name: String,
    meal: {
        type: String,
        require: true
    },
    drink: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Info', infoSchema)