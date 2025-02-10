import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Service } from "./pages/Service"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Error } from "./pages/Error"
import { Logout } from "./pages/Logout"
import { Adminlayout } from "./components/layouts/Admin-layout"
import { Adminuser } from "./pages/Adminuser"
import { Admincontact } from "./pages/Admincontact"
import { Adminupdate } from "./pages/Adminupdate"
export const App = ()=>{
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/logout" element={<Logout/>}/>


    <Route path="/admin" element={<Adminlayout/>}>

    <Route path="users" element={<Adminuser/>}/>
    <Route path="contacts" element={<Admincontact/>}/>
    <Route path ="/admin/users/:id/edit" element={<Adminupdate/>}/>
      
    </Route>
  </Routes>
  <Footer/>

  </BrowserRouter>
  </>
}