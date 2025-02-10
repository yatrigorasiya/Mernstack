import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../store/auth"


export const Adminlayout = ()=>{
    const{user,isloading} = useAuth()
    if(isloading){
        return <h1>Loading...</h1>
    }
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    
    return (
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users">users</NavLink></li>
                        <li><NavLink to="/admin/contacts">contacts</NavLink></li>
                        <li><NavLink to="/service">services</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                    </nav>
            </div>
        </header>
        <Outlet/>


        </>
    )
}