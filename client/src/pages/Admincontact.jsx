import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const Admincontact = ()=>{
    const[contactData,setContactData] = useState([])
    const {authoriztiontoken} = useAuth()
    const getAllContactData = async()=>{
        try {
            const response = await fetch(`http://localhost:3001/api/admin/contacts`,{
                method:"GET",
                headers:{
                    Authorization:authoriztiontoken

                }
            })
            const data = await response.json()
            console.log("contact data",data)
            setContactData(data)
            
        } catch (error) {
            console.log(error)
            
        }

    }

    const deleteContact = async(id)=>{
        try {
            const response = await fetch(`http://localhost:3001/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authoriztiontoken
                    
                }
            })
           if(response.ok){
            getAllContactData()
            toast.success("Delete succesfully")
           }else{
            toast.error("Not delete")
           }
            
        } catch (error) {
            console.log("contact data not delete",error)
            
        }


    }
    useEffect(()=>{
        getAllContactData()
    },[])
    return (
        <>
       
        <section className="admin-contacts-section container ">
            <h1 className="main-heading">Admin Contact Data</h1>
            <div className="container grid grid-three-cols admin-contact">
                {
                  
                    contactData.map((curcontact,index)=>{
                        const{username,email,message,_id} = curcontact
                        return(
                       <div key={index} className="contact-content">
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{message}</p>
                        <button onClick={()=> deleteContact(_id)}>Delete</button>
                       </div>
                        )
                    })
                }
            </div>
        </section>
        
        </>
    )
}