import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer2 = () => {
    return (
        <div className='w-full h-[10vh] flex items-center px-7 bg-[#1d2c2e] border-stone-950 border-t-4 p-[-4px]'>
            <h1 className='text-2xl md:text-3xl font-bold text-[#e0e3ed]'>Connect With Us-+91234567890</h1>
            <div className='ml-auto flex gap-5'>
                <IoCall className='text-2xl md:text-3xl text-[#9492c1] hover:scale-110 transition-all cursor-pointer' />
                <FaInstagram className='text-2xl md:text-3xl text-[#7ea0cf] hover:scale-110 transition-all cursor-pointer' />
                <FaLinkedin className='text-2xl md:text-3xl text-[#7988ca] hover:scale-110 transition-all cursor-pointer' />
                <IoMail className='text-2xl md:text-3xl text-[#5567b1] hover:scale-110 transition-all cursor-pointer' />
            </div>
        </div>
    )
}

export default Footer2