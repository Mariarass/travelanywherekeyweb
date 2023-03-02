
const TicketEng=require('../models/ticketEng')

 const 
 getAllTicket=async(req,res)=>{
     

    try{
        let toursEng={}
      
     
        if (req.query.city=== 'undefined' && req.query.where=== 'undefined'){
          
            toursEng=await TicketEng.find({})

        }
        else if (req.query.city=== undefined && req.query.where=== undefined){
            (console.log(11))
            toursEng=await TicketEng.find({})

        }
        else if (req.query.city=== 'undefined'&& req.query.where!= 'undefined'){
            toursEng=await TicketEng.find({ where:req.query.where})

        }

        else if (req.query.city!= 'undefined' && req.query.where=== 'undefined'){
            toursEng=await TicketEng.find({ city:req.query.city})

        }
        else  {
            toursEng=await TicketEng.find({city:req.query.city, where:req.query.where})

        }
       
       
        res.json(toursEng)
  

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}

 const getTicketById=async(req,res)=>{
    try{
        
        const ticketEng=await TicketEng.findById(req.params.id)
        res.json(ticketEng)

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}


module.exports={getAllTicket,getTicketById}