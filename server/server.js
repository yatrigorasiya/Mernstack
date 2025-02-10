require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express();
const router = require("./router/auth-router");
const contactrouter = require("./router/contact-router")
const servicerouter = require("./router/service-router")
const adminrouter = require("./router/admin-router")
const connectDb = require("./utils/db");
const errormiddleware = require("./middleware/error-middleware");

const corsoption = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PATCH,PUT,DELETE,HEAD",
    credentials:true
}
app.use(cors(corsoption))

app.use(express.json())
app.use("/api/auth",router)

app.use("/api/form",contactrouter)

app.use("/api/data",servicerouter)
app.use("/api/admin",adminrouter)
app.use(errormiddleware)



const PORT = 3001
connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server running port http://localhost:${PORT}`)
})
})