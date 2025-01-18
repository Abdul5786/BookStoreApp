import React from 'react'
import { useAuth } from './AuthProvider'
import toast from 'react-hot-toast';

function logout() {

    const[authUser,setAuthUser]=useAuth();



    const handleLogout=()=>
        {
               
            try {

                setAuthUser({
                    ...authUser,
                    user:null
                })
                localStorage.removeItem("users");
                toast.success('logedout successfully !');

                  // Add a timeout and reload the page
      setTimeout(() => {
        window.location.reload();
      }, 100); // Reload after 1 second
                

            } catch (error) {
                toast.error('error'+error.message);
            }
        }

  return (
    <div>
      <button className=' px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default logout
