import React,{useState} from "react"

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
    const Login = () => {
        const[fullname,setFullname]=useState('')
        const[email,setEmail]=useState('')
        const[password,setPassword]=useState('')
        const[loading,setLoading]=useState(false)

         const navigate=useNavigate()
         
        const handleLogin=(event)=>{
            event.preventDefault()
            setLoading(true)
            console.log({fullname,username,password})
            //timeout
             setTimeout(()=>{
                setLoading(false)
                navigate('/Createaccount')

            },2000)
        
         }          
    return(
        <> 

        <div className="grid md:grid-cols-2 shadow-xl"> 
        <div>
        <img className="w-full h-screen" src="https://images.unsplash.com/photo-1538905386057-4a5a580c45a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>
           <div className="text-left bg-sky-100 ">
           <h1 className="pt-6 text-4xl p-4 text-left">Get Started</h1>
            <p className="text-xl text-left p-4">Create your account now</p><br />

            <form onSubmit={handleLogin} className="p-4 max-w-lg mx-auto ml-0"><br />

                <label > Full name:</label><br />
                <input type="text" value={fullname} onChange={(event)=>setFullname(event.target.value)} className="py-2 rounded-lg border border-blue-300 w-full mb-4" name="name" />
                <br />
                <label>Email:</label><br />

                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} className="py-2 rounded-lg border border-blue-300 w-full mb-4" name="email" /><br />
                <label className="text-xl text-left">Password</label>

                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} 
                className="py-2 rounded-lg border border-blue-300 w-full mb-4" name="pass" /><br />

                    {!loading&&<button type="submit" className="bg-blue-600 border-2 w-full  h-10 text-white text-2xl"> 
                    <Link to="/Form" className="text-blue-800"> Sign Up</Link> </button>}

                    {loading&& <p>loading..</p>}

                <p className="text-center p-3">Already have an account? <a href="" className="text-blue-500">Login</a></p>
            </form>
           </div>
           </div>
        </>
        
    )
   }
   export default Login;