const {z} = require("zod")
const loginschema = z.object({
    email:z
    .string({required_error:"email is require"}).trim().email({message:"invalid email address"}).min(3,{message:"email must be at least 3 character"}).max(255,{messsage:"email more than 255 character"}),
    password:z
    .string({required_error:"password is require"}).trim().min(7,{message:"password must be at least 6 character"}).max(255,{messsage:"password more than 255 character"}),


})

const signupschema = loginschema.extend({
   
    username:z
    .string({required_error:"Name is require"}).trim().min(3,{message:"username must be at least 3 character"}).max(255,{messsage:"username more than 255 character"}),
   
    phone:z
    .string({required_error:"phone is require"}).trim().min(10,{message:"phone must be at least 10 character"}).max(255,{messsage:"phone more than 255 character"})
})
module.exports ={signupschema,loginschema}