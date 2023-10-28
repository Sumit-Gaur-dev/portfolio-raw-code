import React from 'react'
import Hellow from "../resources/1f44b.png"
import {AiOutlineGithub} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import {RiTwitterXLine} from "react-icons/ri"
import {AiFillYoutube} from "react-icons/ai"

export default function Hi() {
  const name = "  Sumit";
  const hireMe = (e) => {
      console.log(e)
  }
  
  return (

<div className='text-cyan-100 pt-16 w-full'>
  <h1 className='flex items-center text-center text-xl justify-center'>
    Hi, I am <span className='font-text pl-1.5'>{name}</span>
    <span>
      <img src={Hellow} alt="Wave" style={{ height: "1em", width: "1em", marginInline: "10px" }} />
    </span>
  </h1>
  <h5 className='text-sm items-center text-center'>Full Stack developer✨|| Learning enthusiast 🧠 </h5>

{/* Social Icons */}
  <div className='flex-col flex-wrap justify-center gap-2 mt-10'>
<div className='flex flex-wrap justify-center gap-2 mt-5'>
  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-slate-800 rounded-full'>
    <AiOutlineGithub className='h-5 w-5' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-sky-600 rounded-full'>
    <FaLinkedinIn className='h-4 w-4' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-pink-500 rounded-full'>
    <BsInstagram className='h-5 w-5' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-blue-700 rounded-full'>
    <BsTelegram className='h-6 w-6 text-white' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-slate-950 rounded-full'>
    <RiTwitterXLine className='h-5 w-5 text-white' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-red-700 rounded-full'>
    <AiFillYoutube className='h-5 w-5 text-white' />
  </div>
</div>


    {/* Buttons */}
    <div className='flex flex-wrap justify-center gap-12 mt-5'>
      <button className='h-10 w-32 bg-slate-800 rounded-md mb-2 hover:bg-blue-600 ease-in duration-300 ' onClick={hireMe}>Hire Me</button>
      <button className='h-10 w-32 bg-slate-800 rounded-md mb-2 text-sm hover:bg-blue-600 ease-in duration-300'>See My Resume</button>
    </div>
  </div>
</div>
 

  )
}

