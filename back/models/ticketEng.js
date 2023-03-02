const mongoose = require('mongoose')

const ticketEngSchema = new mongoose.Schema({
    id__: {
        type: Number,
        required: true
    },

    header: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    where: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    }


})

const TicketEng = mongoose.model('ticketEng', ticketEngSchema)
module.exports = TicketEng