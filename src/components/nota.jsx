import { useEffect, useRef } from "react"
import "../styles/note.css"


export default function Nota(props){

  const note = useRef()

  function deleteNote(){
fetch(`https://notesapi-production-92ec.up.railway.app/notes/${localStorage.getItem('id')}/${localStorage.getItem('password')}/${props.identificator}`,{
  method: 'DELETE'
}).then(response=>response.json()).then(response=>console.log(response))
console.log(props.identificator)
  }
    return(
<div ref={note} onClick={deleteNote} class="cardnote">
  {props.content}
</div>
    )
}