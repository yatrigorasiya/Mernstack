import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useAuth } from "../store/auth";

export const Navbar = ()=>{
    const {isloggedIn}= useAuth()
    const[show,setShow] = useState(false)
    const handleTogglebutton = ()=>{
        return setShow(!show)

    }
    return (
        <>
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div>
                        <NavLink to="/">
                       <h1>YG</h1> 
                        </NavLink>
                    </div>
                 <nav className={show ? 'menu-mobile':'menu-web'}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        {
                        isloggedIn ? <li><NavLink to="/logout">Logout</NavLink></li>
                        : 
                        <>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        </>
                      }
                       
                        
                    </ul>
                 </nav>
             
                <div className="ham-menu">
                    <button onClick={handleTogglebutton}><GiHamburgerMenu /></button>
                </div>
                </div>
            </div>
        </header>
        </>
    )
}