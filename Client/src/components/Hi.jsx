import React from 'react'
import Hellow from "../resources/1f44b.png"
import {AiOutlineGithub} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {RiTwitterXLine} from "react-icons/ri"

export default function Hi() {
  const name = "  Sumit";
  const hireMe = (e) => {
      window.scroll({top:3000, left:0 , behavior:'smooth'})
  }
  
  const redirect = () =>{
    window.location.href = "https://drive.google.com/file/d/14nv6RAV-Fite9kDn35bzfnacv7LkTxPN/view?usp=sharing";

  }
  const link = {
    github: "https://github.com/Sumit-Gaur-dev",
    linkdin: "https://www.linkedin.com/in/sumit-gaur-b5790728b",
    instagram: "https://www.instagram.com/sumitgaur710",
    twitter: "https://twitter.com/Sumit_Gaur710"

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
  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-slate-800 rounded-full'  onClick={()=>{window.location.href = link.github}}>
    <AiOutlineGithub className='h-5 w-5' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-sky-600 rounded-full'  onClick={()=>{window.location.href = link.linkdin}}>
    <FaLinkedinIn className='h-4 w-4' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-pink-500 rounded-full'  onClick={()=>{window.location.href = link.instagram}}>
    <BsInstagram className='h-5 w-5' />
  </div>

  <div className='flex justify-center ease-in duration-200 hover:bg-black items-center h-8 w-8 bg-slate-950 rounded-full' onClick={()=>{window.location.href = link.twitter}}>
    <RiTwitterXLine className='h-5 w-5 text-white' />
  </div>


</div>


    {/* Buttons */}
    <div className='flex flex-wrap justify-center gap-12 mt-5'>
      <button className='h-10 w-32 bg-slate-800 rounded-md mb-2 hover:bg-blue-600 ease-in duration-300 ' onClick={hireMe}>Hire Me</button>
      <button className='h-10 w-32 bg-slate-800 rounded-md mb-2 text-sm hover:bg-blue-600 ease-in duration-300' onClick={redirect}>See My Resume</button>
    </div>
  </div>
</div>
 

  )
}

