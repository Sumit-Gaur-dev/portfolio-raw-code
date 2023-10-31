import React from 'react'
import Dropdown from './dropdown';
export default function Header() {
  
 
  const name = "< Sumit Codes />"
  const scroll = (x) =>{
    if(x === "skills"){
      window.scroll({top:1050, left:0 , behavior:'smooth'})
    }
    if(x === "projects"){
      window.scroll({top:1730, left:0 , behavior:'smooth'})
    }if(x === "Contact me"){
      window.scroll({top:3000, left:0 , behavior:'smooth'})
    }
 }

 
    return (
      <div className=' max-w-full pt-3 w-full font-header bg-blue-900 sticky top-0 text-cyan-100 flex items-center justify-between ' >
      <h1 className='ml-4 text-2xl'>{name}</h1>

   <div className='hidden md:flex mr-4 text-sm' >
       <ul className='hidden cursor-pointer  md:flex md:gap-3'> 
         <li>Home</li>
         <li onClick={()=>{scroll("skills")}} >Skills</li>
         <li onClick={()=>{scroll("projects")}}>Projects</li>
         <li onClick={()=>{scroll("Contact me")}}>Contact Me</li>
       </ul>
   
   </div>

      
     <span className='text-right mr-4  md:hidden'>
      <Dropdown />  
       </span>
 
    </div>
    
   
  )
}
