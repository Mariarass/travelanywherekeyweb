const express = require('express')
const { getAllTicket,getTicketById} = require('../controller/ticketControllerEng')
const router = express.Router()

router.get('/',getAllTicket
)

router.get('/:id',getTicketById)




module.exports=router