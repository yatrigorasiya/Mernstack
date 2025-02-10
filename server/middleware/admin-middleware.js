const adminmiddlware = async(req,res,next)=>{
    try {
        console.log("userdata",req.user)
        const adminRole = req.user.isAdmin
        if(!adminRole){
            res.status(404).json({message:"not found admin"})
        }
        next()
        
    } catch (error) {
        console.log(error)
        
    }

}
module.exports = adminmiddlware