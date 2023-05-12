import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Login from'./components/login'

import Form from './pages/createaccount'
import NavBar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
        <>
      
        <Routes>
        <Route path="" element={<Form/>}/>
          <Route path="/Login" element={<Login/>}/>
          </Routes>  
        </>

  )
}

export default App
