import React, { createContext, useContext, useState } from 'react'

export const AuthContex=createContext();
export default function AuthProvider({children}) 
{
  // creating context 
           
  const initialAuthuser=localStorage.getItem("users");
  const[authUser,setAuthUser]=useState(
    initialAuthuser?JSON.parse(initialAuthuser):undefined
  )

  return(

    <AuthContex.Provider value={[authUser,setAuthUser]}>
      {children}
    </AuthContex.Provider>
  )
}

export const useAuth=()=>useContext(AuthContex);
