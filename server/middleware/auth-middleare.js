
const jwt = require("jsonwebtoken")
const User = require("../model/user-model")

const authmiddleware = async(req,res,next)=>{
    //frontend token get
  const token = req.header("Authorization")
    if(!token){
    return res.status(401).json({message:"Unauthorizes HTTP, Token not provided"})
}

const jwtToken = token.replace("Bearer","").trim();
console.log("token from middleware",jwtToken)
try {
    //token create :-userid,email,isadminshow
    const isVerified = jwt.verify(jwtToken,process.env.SECRETE_KEY )
    // console.log(isVerified)
    //all data show:-userid,username,phone,email,password,isadmin
    const userData = await User.findOne({email:isVerified.email}).select({password:0})
    console.log(userData)
    req.user = userData;
    req.token = token;
    req.id = userData._id;
    next()
} catch (error) {
    return res.status(401).json({message:"Unaythorized.Invalid token"})
    
}


}
module.exports = authmiddleware;

