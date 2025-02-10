import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const Adminupdate = ()=>{
    const[data,setData] =useState({
        username:"",
        email:"",
        phone:"",
        
    })

    const params = useParams()
    const {authoriztiontoken} = useAuth()

   const getsingleuserdata = async()=>{
    try {
        const response = await fetch(`http://localhost:3001/api/admin/users/${params.id}`,{
            method:"GET",
            headers:{
                Authorization:authoriztiontoken
                
            }
           
        })
        const data = await response.json()
        console.log("user single data",data)
        setData(data)

        
    } catch (error) {
        console.log(error)
        
    }

}

    useEffect(()=>{
        getsingleuserdata()
    },[])

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]:value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3001/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authoriztiontoken
                    
                },
                body:JSON.stringify(data)

            })
            if(response.ok){
                toast.success("update succesfuly")
            }else{
                toast.error("not update")
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }
    return(
        <>
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heaing">Update user Data</h1>
            </div>
            <div className="container grid grid-two-cols">
                <section className="section-form">
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" id="username" value={data.username} onChange={handleInput} required autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" value={data.email} onChange={handleInput} required autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor="phone">phone</label>
                            <input type="number" name="phone" id="phone" value={data.phone} onChange={handleInput} required autoComplete="off"/>
                        </div>
                       
                        <button type="submit">Edit</button>
                    </form>
                </section>
            </div>
        </section>
        </>
    )
}