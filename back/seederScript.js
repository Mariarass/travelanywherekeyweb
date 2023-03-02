require('dotenv').config()

const cardData=require('./data/card')
const ticketData=require('./data/ticket')
const cardDataEng=require('./data/cardEng')
const ticketDataEng=require('./data/ticketEng')
const connectDB=require('./config/db')
const Card = require('./models/card')
const Ticket=require('./models/ticket')

const CardEng = require('./models/cardEng')
const TicketEng=require('./models/ticketEng')

connectDB()

const importData=async()=>{
    try{
        await Card.deleteMany({})
        await Ticket.deleteMany({})
        await CardEng.deleteMany({})
        await TicketEng.deleteMany({})

        await Ticket.insertMany(ticketData)

        await Card.insertMany(cardData)

        await TicketEng.insertMany(ticketDataEng)

        await CardEng.insertMany(cardDataEng)

        console.log('data import succses')
        process.exit()
    }
    catch (error){
        console.log(error)
        process.exit(1)

    }
}
importData()