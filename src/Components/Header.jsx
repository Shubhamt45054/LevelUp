import React, { useState } from 'react';
import menu from '../img/menu.jpg'; // Make sure to provide the correct path
import "../Style/header.scss"
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  const [isCheck, setCheck] = useState(false);

  return (
    <div className='navbar'>
      <h1 className='logo'>
      <Link to="/" >

     <img
     className='h-[100px] w-fit '
     src={logo}
      />
      </Link>
      
      </h1>
      <div className='log'>
      
      <div className=' flex m-[-20px] gap-[20px]'>

      <Link to="/login" >
      <button href="#_" class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">SIGN IN</span>
<span class="absolute inset-0 border-2 border-white rounded-full"></span>
</button>
      </Link>
     
      <Link to="/signup" >
      <button href="#_" class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">SIGN UP</span>
<span class="absolute inset-0 border-2 border-white rounded-full"></span>
</button>
      </Link>
      
      </div>

      </div>
      <input type="checkbox" className="check" checked={isCheck}></input>
      <img
        className='icon'
        src={menu}
        onClick={() => {
          setCheck(!isCheck);
        }}
        alt="Menu Icon"
      />

<div className='flex gap-[50px] mr-10'>

<Link to="/jobs"  className='m-[-20px] '>
      <button href="#_" class="inline-block py-2.5 text-xl font-bold  text-white hover:text-black bg-gray-800 px-7 hover:bg-gray-100 rounded-xl">
Jobs
</button>
      </Link>
      <Link to="/int"  className='m-[-20px]'>
      <button href="#_" class="inline-block py-2.5 text-xl font-bold text-white hover:text-black bg-gray-800 px-7 hover:bg-gray-100 rounded-xl">
Internship
</button>
      </Link>
      <Link to="/res"  className='m-[-20px] '>
      <button href="#_" class="inline-block py-2.5 text-xl text-white font-bold  hover:text-black bg-gray-800 px-7 hover:bg-gray-100 rounded-xl">
Resources
</button>
      </Link>

</div>
    
    </div>
  );
};


export default Header