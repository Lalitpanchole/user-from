import React from 'react'
import Register from './compotents/Register'
import Login from './compotents/Login'
import Home from './compotents/Home'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}
