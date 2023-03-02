
const Ticket=require('../models/ticket')

 const 
 getAllTicket=async(req,res)=>{
     

    try{
        let tours={}
      
        console.log(req.query)
        if (req.query.city=== 'undefined' && req.query.where=== 'undefined'){
            (console.log(11))
            tours=await Ticket.find({})

        }
        else if (req.query.city=== undefined && req.query.where=== undefined){
            (console.log(11))
            tours=await Ticket.find({})

        }
        else if (req.query.city=== 'undefined'&& req.query.where!= 'undefined'){
            tours=await Ticket.find({ where:req.query.where})

        }

        else if (req.query.city!= 'undefined' && req.query.where=== 'undefined'){
            tours=await Ticket.find({ city:req.query.city})

        }
        else  {
             tours=await Ticket.find({city:req.query.city, where:req.query.where})

        }
       
       
        res.json(tours)
  

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}

 const getTicketById=async(req,res)=>{
    try{
        
        const ticket=await Ticket.findById(req.params.id)
        res.json(ticket)

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}


module.exports={getAllTicket,getTicketById}