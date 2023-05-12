
import React,{useState} from "react"

import { useNavigate } from "react-router-dom"
    const Form = () => {
        const[username,setUsername]=useState('')
        const[password,setPassword]=useState('')
        const[loading,setLoading]=useState(false)

         const navigate=useNavigate()
         
        const handleLogin=(event)=>{
            event.preventDefault()
            setLoading(true)
            console.log({username,password})
            //timeout
             setTimeout(()=>{
                setLoading(false)
                navigate('/Login')

            },2000)
         }          
        
        return (
          <>
         
         <div>
         <form onSubmit={handleLogin} className="p-8 max-w-lg mx-auto rounded-2xl">
            
            <p className="text-4xl font-bold  text-center py-24">
                Welcome to login form</p> 
                <label>Username</label> 
                <input  value={username} onChange={(event)=>setUsername(event.target.value)} type="text" className="p-3 rounded-lg border-2 border-green-700 focus:outline-none w-full mb-4"/>

                <label>Password</label> 
                <input value={password} onChange={(event)=>setPassword(event.target.value)}type="password" className="p-3 rounded-lg border-2 border-green-700 focus:outline-none w-full mb-4"/>

                <p>Don't you have an account?<a href=""><span className="text-green-600"> Signup Now</span></a></p>
                 
                 {!loading&&<button type="submit" className="bg-green-800 px-4 py-2 rounded w-full my-2 ">Sign in</button> 
                 }{loading&& <p>loading..</p>}
                  
                 </form>
         </div>
         
       </>
        )
    }
    export default Form;