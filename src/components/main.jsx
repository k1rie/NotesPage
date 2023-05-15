import { useState,useEffect } from "react"
import "../styles/main.css"
import Nota from "./nota"

export default function Main(props){

    const [notas,setNotas] = useState([{
        id: "",
        name: "",
        created_by: ""
    }])

    useEffect(()=>{
    fetch(`https://notesapi-production-92ec.up.railway.app/notes/${localStorage.getItem('name')}/${localStorage.getItem('password')}/${localStorage.getItem('id')}`).then(response=>response.json()).then(data=>setNotas(data))
    console.log("d")
    },[props.notes])

    useEffect(()=>{
        fetch(`https://notesapi-production-92ec.up.railway.app/notes/${localStorage.getItem('name')}/${localStorage.getItem('password')}/${localStorage.getItem('id')}`).then(response=>response.json()).then(data=>setNotas(data))
        },[notas])
         
        

    return(
        <div id="main">
<div id="addForm">
<div id="main">
                <h1 id="main-title"></h1>

                <div className="tasks">
                   {notas.map((e)=>{return <Nota identificator={e.id} content={e.content}/>})}
                </div>
            </div>
</div>
</div>
    )
}