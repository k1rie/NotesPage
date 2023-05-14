import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"



export default function Sesion(){
    const navigate = useNavigate()
    useEffect(()=>{
        logoutBtn.current.style.backgroundColor = "transparent"
        logoutBtn.current.style.color = "white"
        logoutBtn.current.style.border = "none"
    },[])
    const logoutBtn = useRef()

    function logout (){
localStorage.removeItem("name")
localStorage.removeItem("password")
localStorage.removeItem("id")
navigate("/")
    }
    return(
        <button ref={logoutBtn} className="logout" onClick={logout}>Cerrar sesion</button>
    )
}