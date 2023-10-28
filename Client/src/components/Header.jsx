import React from 'react'
import {AiOutlineMenu} from "react-icons/ai";


export default function Header() {
  const name = "< Sumit Codes />"
    return (
      <div className=' max-w-4xl  pt-3 w-full font-header bg-blue-900 sticky top-0 text-cyan-100 flex items-center justify-between ' >
      <h1 className='ml-4 text-2xl'>{name}</h1>

   <div className='hidden md:flex mr-4 text-sm' >
      <ul className='hidden md:flex md:gap-3'> 
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
   </div>

      <span className='mr-5 text-2xl md:hidden'>
      <AiOutlineMenu clazssName=' h-6 w-6  cursor-pointer'/>
      </span>
    </div>
    
   
  )
}
