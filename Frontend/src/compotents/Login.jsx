import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleInput = async(e)=>{
           e.preventDefault();
          try {
             const res  = await axios.post("https://user-from-api-backend.onrender.com/api/login",{
            email,
            password
           })
           console.log("Login user", res.data);
           alert("Login Successfull")
           navigate('/')
          } catch (error) {
             console.log(error);
      alert(error.response?.data?.message || "❌ Login Failed");
          }

    }
  return (
    <div className='bg-amber-300 flex items-center justify-center '>
        <form onSubmit={handleInput} className='grid grid-cols-1 '>
           <input type="email"
           placeholder='Email' 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           className='w-2xl h-10 rounded-xl shadow-xl bg-white border-none my-3' />
           <input type="password"
           placeholder='Password' 
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
            className='w-2xl h-10 rounded-xl shadow-xl bg-white border-none my-3'/>
           <button  type='submit'>Login</button>
        </form>
    </div>
  )
}
