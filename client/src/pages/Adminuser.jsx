import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { Link } from "react-router-dom"

export const Adminuser = ()=>{
    const [user,setUser] = useState([])
    const  {authoriztiontoken} = useAuth()


    const getAllUserData = async()=>{
        try {
            const response = await fetch("http://localhost:3001/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization:authoriztiontoken
                }
            })
            const data = await response.json()
            console.log(data)
            setUser(data)

            
        } catch (error) {
            console.log("user error",error)
            
        }

    }

    const deleteUser = async(id)=>{
        try {
            const response = await fetch(`http://localhost:3001/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authoriztiontoken

                }
            })
            const data = await response.json()
            console.log("user afte delete",data)
            if(response.ok){
                getAllUserData()
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }
   useEffect(()=>{
    getAllUserData()

   },[])
   return (
    <>
    <section className="admin-users-section">
        <div className="container">
            <h1>Admin Users Data</h1>
        </div>

        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((curelm,index)=>{
                            return(
                                <tr key={index}>
                                <td>{curelm.username}</td>
                                <td>{curelm.email}</td>
                                <td>{curelm.phone}</td>
                                <td><Link to={`/admin/users/${curelm._id}/edit`}>Edit</Link></td>
                                <td><button onClick={()=>deleteUser(curelm._id)}>Delete</button></td>
                            </tr>

                            )
                        })

                    }
                   
                </tbody>
            </table>
        </div>
    </section>
    </>
   )
}