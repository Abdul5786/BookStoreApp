import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Components/AuthProvider'




function App() {

      const[authUser,setAuthUser]=useAuth();
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/Course' element = {authUser?<Courses />:<Navigate to="/signup"/>} />
      <Route path='/Signup' element = {<Signup />} />
     </Routes>
     <Toaster />
     </div>


    </>
  )
}


export default App
