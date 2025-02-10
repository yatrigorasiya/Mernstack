const mongoose = require("mongoose")
const URI = process.env.MERN_URL
const connectDb = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connection succesfully your Db")
        
    } catch (error) {
        console.log("connection fail")
        process.exit(0)
        
    }
}
module.exports = connectDb