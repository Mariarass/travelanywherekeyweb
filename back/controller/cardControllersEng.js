const CardEng=require('../models/cardEng')



 const 
 getAllCards=async(req,res)=>{
    try{

        const cardsEng=await CardEng.find({})
      
        res.json(cardsEng)
        
     
  

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}

 const getCardById=async(req,res)=>{
    try{

        const cardsEng=await CardEng.findById(req.params.id)
        res.json(cardsEng)

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})

    }
}
module.exports={getAllCards,getCardById}