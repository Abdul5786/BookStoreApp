import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"

function Course() {
  
  const[book,setBook]=useState([]);

   useEffect(()=>{

    const getBook= async ()=>{

      try {

           const res = await axios.get("http://localhost:4002/book");
           console.log(res.data)
           setBook(res.data)
        
      } catch (error) {
        
        console.log(error)
      }

    };

    getBook();

   },[])

      

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 dark:bg-slate-900 dark:text-white mt-2  ' style={{ paddingTop: '20px' }}>
      <div className='mt-16 justify-center text-center items-center  '>
        <h1 className='text-2xl font-semibold  md:text-4xl '>We're delighted to have you <span className='text-pink-500'>here !! :)</span></h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error sunt id deleniti placeat distinctio dolore aspernatur, recusandae rem corrupti odio maxime aliquid esse, consectetur vero delectus est, modi nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error sunt id deleniti placeat distinctio dolore aspernatur sit amet consectetur adipisicing elit. Hic error sunt id deleniti placeat distinctio dolore aspernatur, recusandae rem corrupti odio maxime aliquid esse, consectetur vero delectus est, modi nihil.Lorem ipsum dolor sit amet consectetur </p>
        
        <Link to= '/'>
        <button className='bg-pink-500 px-4 py-2 text-white mt-2 rounded hover:bg-pink-700 duration-300 '>Back</button>
        </Link>
      </div>

      <div className='mt -5 grid grid-cols-1 md:grid-cols-4'>
      {
        book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))
      }
      </div>
    
    </div>
    </>
  )
}

export default Course
