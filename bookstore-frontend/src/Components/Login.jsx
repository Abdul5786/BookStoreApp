import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast'


function Login() {

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async (data)=>{
    const userInfo={
         email:data.email,
         password:data.password,
    }

    await axios.post("http://localhost:4002/user/login",userInfo).then((res)=>{
          console.log(res.data);
          if(res.data)
          {
            
            toast.success('login successfully !');
            localStorage.setItem("users",JSON.stringify(res.data));

            // Close modal and trigger any necessary updates
        const modal = document.getElementById('my_modal_3');
        if (modal) {
          modal.close();
        }

        // Simulate app update without reload
        setTimeout(() => {
          window.location.href = '/'; // Navigate to the home page or refresh the component
        }, 100);
          
          }
    }).catch( (err)=>{
       
      
      if(err.response)
      {
             console.log(err);
             toast.error(err.response.data.message);
      }
      
    });

  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
   
    <h3 className="font-bold text-lg ">Login</h3>
    <div className='mt-4 space-y-2 ' >
        <span className=''>Email</span>
        <br/>
        <input type='email'
        placeholder='enter your email'
        className='outline-none w-80 rounded-sm  '
        {...register("email", { required: true })}
        ></input>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    <div className='mt-4 space-y-2'>
        <span >Password</span>
        <br/>
        <input type='password'
        placeholder='enter your password'
        className='outline-none w-80 rounded-sm'
        {...register("password", { required: true })}
        ></input>

        <br />
               {errors.password && <span className='text-sm text-red-500'>This field is required</span>}


    </div>

    <div className='mt-4 flex justify-around mb-2'>
        <button
        type="submit"
        className='bg-pink-500 text-white py-2  px-3 hover:bg-pink-700 duration-200 rounded-md' >Login</button>
        <p>Not Registereds?<Link to='/Signup' className='underline text-blue-500 cursor-pointer'>signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login


