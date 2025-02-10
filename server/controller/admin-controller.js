const User = require("../model/user-model")
const Contact = require("../model/contact-model")
const getAllUser = async(req,res,next)=>{
    try {
        const users = await User.find()
        if(!users || users.length === 0){
            return res.status(400).json({message:"not found the user"})
        }
        return res.status(200).json(users)
        
    } catch (error) {
        next(error)
        
    }


}
const getAllContacts = async(req,res,next)=>{
    try {
        const contacts = await Contact.find()
       return res.status(200).json(contacts)
        
    } catch (error) {
        next(error)
        
    }

}

//contact delete:-
const deleteByContactId = async(req,res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id})
        return res.status(200).json({message:'Contact delete succesfully'})
        
    } catch (error) {
        next(error)
        
    }


}

//user delete

const deleteByUserId = async(req,res,next)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id})
        return res.status(200).json({message:"User delete successfully"})
        
    } catch (error) {
        next(error)
        
    }

}
//get single user data:-edit1
const getUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{password:0})
        return res.status(200).json(data)
        
    } catch (error) {
        next(error)
        
    }

}
//update 2)
const updateuserById = async(req,res)=>{
    try {
        const id  = req.params.id;
        const updatedata = req.body;
        const updateuser = await User.updateOne({_id:id},{$set:updatedata})
        return res.status(200).json(updateuser)
        
    } catch (error) {
        next(error)
        
    }

}
module.exports = {getAllUser,getAllContacts,deleteByUserId,getUserById,updateuserById,deleteByContactId}