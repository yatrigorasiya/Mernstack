const Contact = require("../model/contact-model")
const contactForm = async(req,res)=>{
    try {
        const response = req.body
        console.log(response)
        await Contact.create(response)
       return res.status(200).json({message:"message send succesfully"})
        
    } catch (error) {
       return res.status(400).json({message:"message not deliverd"})
        
    }

}
module.exports = contactForm