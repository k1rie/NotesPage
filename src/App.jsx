import { useState } from 'react'
import Sidebar from './components/sidebar'
import Main from './components/main'
import "./styles/main.css"


function App() {
  const [notesApp,setNotesApp] = useState([])
function getNotes(e){
setNotesApp({content: e})
console.log(notesApp)
}
  return (
    <div id='main-div'>
    <Sidebar getNotes={getNotes}/>
<Main notes={notesApp}/>
    </div>
  )
}

export default App
