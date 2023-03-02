const Card=require('../models/card')



 const 
 getAllCards=async(req,res)=>{
    try{

        const cards=await Card.find({})
      
        res.json(cards)
        
     
  

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}

 const getCardById=async(req,res)=>{
    try{

        const cards=await Card.findById(req.params.id)
        res.json(cards)

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}
module.exports={getAllCards,getCardById}