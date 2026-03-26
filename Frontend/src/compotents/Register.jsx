import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handelInput = async(e)=>{
       e.preventDefault();
        try {
               const res = await axios.post("https://user-from-api-backend.onrender.com/api/user",{
                name,
                email,
                password
         } )
                console.log("user", res.data);
             alert("✅ Registered Successfully");
          navigate("/login");

        } catch (error) {
              console.log(error);
              alert(error.response?.data?.message || "❌ Error");
        }
      
    }
  return (
    <div className='bg-amber-500 flex justify-center items-center '>
        <form onSubmit={handelInput} className=' grid grid-cols-1 '>
            <input 
            type='text'
            placeholder='Your name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
           className='w-2xl h-10 rounded-xl border-none shadow-xl bg-amber-100 my-5' />
            <input 
            type='text'
            placeholder='Your Email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className='w-2xl h-10 rounded-xl border-none shadow-xl bg-amber-100'
            />
            <input 
             type="text"
            placeholder='Your Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className='w-2xl h-10 rounded-xl border-none shadow-xl bg-amber-100 my-3'
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
