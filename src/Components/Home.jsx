import React from 'react'
import "../Style/home.scss"
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo2.png"

const Home = () => {
  return (
    <div className='m-[10px]'>
      {/* <div>Find Your Dream Jobes Now</div> */}
      <div className='flex bas'>

      <Link to="/"  className='basis-1/2'>
      <img 
     className='w-[200%] h-[91vh]'
      src={logo}
      />
      </Link>

      <div className='flex flex-col pt-[80px] justify-start basis-1/2 pr-5'>

      <div className='css text-[50px]
       text-white grid 
       text-center '> 

      "Empower Your Future <span className='text-yellow-300 inline-block text-center'>Level Up</span> Where Dreams and Careers Converge!"
      </div>
      <div className='text-[40px]
text-emerald-400 grid place-items-center font-serif '>
Get Hired OR Hire Someone
</div>
<div className='text-center'>
<Link to="/signup" class="relative inline-block py-2 font-medium group w-[500px] ">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-[2.5px] border-black group-hover:bg-black"></span>
<span class="relative text-black group-hover:text-white text-3xl font-bold">Join Now</span>
</Link>

</div>

      </div>
     

   
      </div>
     
  
    </div>
  )
}

export default Home
