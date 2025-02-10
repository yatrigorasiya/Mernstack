import { createContext, useContext, useEffect, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({children})=>{
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("")
    const[service,setService] = useState([]);
    const[isloading,setIsloading] = useState(true)
    const authoriztiontoken = token
//store token in localstorage:-
    const storetokenInLs = (storetoken)=>{
        setToken(storetoken)
        return localStorage.setItem("token",storetoken)

    }
    //chek token true or false:-
  let isloggedIn = !!token;
//   console.log("isLoggedin",isloggedIn)
//logout remove localstorage data:-
    const Logoutuser = ()=>{
        setToken("")
        return localStorage.removeItem("token")

    }

    //user data get currently login:-

const userAuthentication = async()=>{
    try {
        setIsloading(true)
        const response = await fetch("http://localhost:3001/api/auth/user",{
            method:"GET",
            headers:{
                Authorization:authoriztiontoken
            }
        })
        if(response.ok){
            const data = await response.json()
            console.log("userData",data.userData)
            setUser(data.userData)
            setIsloading(false)

        }else{
            console.log("erro featching")
            setIsloading(false)
        }
        
    } catch (error) {
        console.log("error featching user data")
        
    }

}

const getservice = async()=>{
    try {
        const response = await fetch("http://localhost:3001/api/data/service",{
            method:"GET"
        })
        if(response.ok){
            const data = await response.json()
            console.log(data.message)
            setService(data.message)
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

    useEffect(()=>{
        getservice()
        userAuthentication();
       
    },[])
    return(
         <Authcontext.Provider value={{storetokenInLs,Logoutuser,isloggedIn,user,service,authoriztiontoken,isloading}}>{children}
         </Authcontext.Provider>
    )
}


//custome hook:-
export const useAuth = ()=>{
    const authcontextvalue = useContext(Authcontext)
    if(!authcontextvalue){
        throw new Error("useAuth user outside")
    }
    return authcontextvalue;

}