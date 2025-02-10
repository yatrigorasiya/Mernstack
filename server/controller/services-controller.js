const Service = require("../model/service-model")
const services = async(req,res)=>{
    try {
        const response = await Service.find()
        if(!response){
             res.status(404).json({message:"No found"})
             return;
        }else{
            res.status(200).json({message:response})
        }
       
        
    } catch (error) {
        console.log("service error",error)
    }

}
module.exports = services