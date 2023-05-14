import "../styles/sidebar.css"
import { useState } from "react"
import Sesion from "./sesion"

export default function Sidebar(props){
    const [valueNewTask,setValueNewTask] = useState("")

    const [notes,setNote] = useState([])

    const [nota,setNota] = useState()

    const [notas,setNotas] = useState([{
        id: "",
        name: "",
        created_by: ""
    }])

    function createNote() {
        fetch('https://notesapi-production-92ec.up.railway.app/notes',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: localStorage.getItem('name'),
                password: localStorage.getItem('password'),
                content: valueNewTask

            })
        })
    }

    function createNewTask(){
props.getNotes(valueNewTask)
    }
return(
    <div id="sidebar">
<Sesion/>
    <div id="add-todo-form">
    <h1 id="page-title">ToDo Monster</h1>
    <label class="search-label">
    <input type="text" name="text" class="input" required="" placeholder="Type here..." onChange={(e)=>{setValueNewTask(e.target.value)}}/>
    <kbd class="slash-icon">/</kbd>
    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 56.966 56.966"  xml:space="preserve">
      <g>
        <path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="currentColor" data-original="#000000" class=""></path>
      </g>
    </svg>
  </label>
  
  <button  onClick={()=>{createNewTask();createNote()}}>
  Crear Nota
</button>
    </div>
    <div id="todos-container">
      
    </div>
</div>
)
}