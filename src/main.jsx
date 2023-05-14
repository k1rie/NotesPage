import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './login.jsx'
import Register from "./register.jsx"
import "./styles/normalize.css"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([{
  path:"/main",
  element: <App/>
},
{
  path:"/",
  element:<Login/>
},
{
  path:"/register",
  element:<Register/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
