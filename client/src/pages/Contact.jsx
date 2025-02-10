import { useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const Contact = ()=>{
    const[contact,setContact] = useState({
        username:"",
        email:"",
        message:"",
    })
    const[userData,setUserData] = useState(true)
    const {user} = useAuth()
    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            message:""
        })
        setUserData(false)
    }


    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact,
            [name]:value
        })

    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(contact)
        try {
            const response = await fetch("http://localhost:3001/api/form/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(contact)

            })
            if(response.ok){
                setContact({
                    username:"",
                    email:"",
                    message:"",
                })
            }
            const data = await response.json()
            console.log(data)
            toast.success("mesage send succesfully")
            
        } catch (error) {
            console.log("contact",error)
            toast.error(data.extradetails?data.extradetails:data.message,{
                position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
            })
            
        }

    }

    return (
        <>
        <section className="section-contact">
            <div className=" container">
                <h1 className="main-heading">contact us</h1>
            </div>

            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/images/support.png" alt="contact" className="banner-image" />
                </div>


                <section className="section-form">
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" id="username" value={contact.username} onChange={handleInput} required autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="text" name="email" id="email" value={contact.email} onChange={handleInput} required autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor="message">message</label>
                            <textarea  name="message" id="message" value={contact.message}  onChange={handleInput}required autoComplete="off"/>
                        </div>

                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </section>
            </div>
            <section className="mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.233198609898!2d72.86179988634503!3d21.245558799316246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1737365841974!5m2!1sen!2sin"  width="100%"
            height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        </section>
        </>
    )
}