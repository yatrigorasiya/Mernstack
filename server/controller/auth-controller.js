const User = require("../model/user-model")
const bcrypt = require("bcryptjs")
const home = async(req,res)=>{
    try {
        res.status(200).send("hello");
        
    } catch (error) {
        console.log(error)
        
    }
   
   
}

const register = async(req,res)=>{
  
    try {
        console.log(req.body)
        const{username,email,phone,password} = req.body
        const userexist = await User.findOne({email:email})
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound)
        if(userexist){
            return res.status(400).json({message:"already exists"})
        }

        const usercreate = await User.create({username,email,phone,password})
        res.status(200).json({message:usercreate,token:await usercreate.generateToken(),useID:usercreate._id.toString()})
        
    } catch (error) {
      res.status(500).json("internal server error")
        
    }

}

//login logic:-
const login = async(req,res)=>{
    try {
        const {email,password} = req.body
       const userexist = await User.findOne({email})
       if(!userexist){
        return res.status(400).json({message:"Invalid credentials'"})
       }
       const user = await userexist.comparepassword(password)
       if(user){
        res.status(200).json({message:"login succesfully",token:await userexist.generateToken(),userID: userexist._id.toString()})
       }

       else{
        res.status(401).json({message:"Invalid email or password"})
       }
        
    } catch (error) {
        res.status(500).json("internal server error")
        
    }

}

const user = async(req,res)=>{
    try {
        const userData = req.user;
    console.log("userdata:-",userData)
    return res.status(200).json({userData})

        
    } catch (error) {
        console.log(error)
        
    }
    
}
module.exports = {home,register,login,user}