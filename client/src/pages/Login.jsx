import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"


export const Login = ()=>{
    const[user,setUser] = useState({
        email:"",
        password:"",
    })
    const navigate = useNavigate();
    const {storetokenInLs}=useAuth()

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]:value
        })

    }
  

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(user)
        try {
            const response = await fetch("http://localhost:3001/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user)
            })
            const res_data = await response.json()
            console.log("res from server",res_data)
            // console.log(response)
            if(response.ok){
                storetokenInLs(res_data.token)
                toast.success("login succesfully")
                navigate("/")
            }else{
                toast.error(res_data.extradetails ? res_data.extradetails : res_data.message)
            }
            
        } catch (error) {
            console.log(error)
            
        }

        


    }
    return (
        <>
        <section>
            <main>
                <section className="section-registration">
                    <div className="container grid grid-two-cols">

                        <div className="registration-image">
                            <img src="/images/login.png" alt="login" width="500" height="500" />
                        </div>

                        <div className="registration-form">
                        <h1 className="main-heading mb-3">Login form</h1>
                        <br/>
                        <form action="" onSubmit={handleSubmit}>
                                 <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" id="email" name="email" value={user.email}  onChange={handleInput} required autoComplete="off" placeholder="email" />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input type="password" id="password" name="password" value={user.password} onChange={handleInput}  required autoComplete="off" placeholder="passwrod" />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">Login</button>
                        </form>

                        </div>
                    </div>
                </section>
            </main>
        </section>
        </>
    )
}