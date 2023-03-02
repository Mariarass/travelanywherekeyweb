const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    id__: {
        type: Number,
        required: true
    },
   
    header: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    statusHeader: {
        type: String,
        required: true
    },
    tour: {
        type: String,
        required: true
    },
    descriptionFull: {
        type: String,
        required: true
    },
    expectation: {
        type: Array,
        required: true
    },
    transportDetailes: {
        type: String,
        required: true
    },
    free: {
        type: String,
        required: true
    },
    expenses:{
        type:Array,
        required:true
    },
    transport: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    imgArray:{
        type:Array,
        required:true
    },
    img: {
        type: String,
        required: true
    }

})

const Card = mongoose.model('card', cardSchema)
module.exports = Card