import React, { useState } from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai"


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const scroll = (x) =>{
    if(x === "skills"){
      window.scroll({top:900, left:0 , behavior:'smooth'})
      setIsOpen(false)
    }
    if(x === "projects"){
      window.scroll({top:1430, left:0 , behavior:'smooth'})
      setIsOpen(false)
    }if(x === "Contact me"){
      window.scroll({top:10000, left:0 , behavior:'smooth'})
      setIsOpen(false)
    }
 }
  return (
    <div className="dropdown ">
        <div className='grid justify-items-end '>
     {isOpen ?<AiOutlineClose className='text-2xl mb-3 ' onClick={() => setIsOpen(!isOpen)} />:
     <AiOutlineMenu className='text-2xl  float-right ' onClick={() => setIsOpen(!isOpen)} /> }
      </div>
      {isOpen && (
        <div className='ease-in-out duration-300'   >
          <ul className='cursor-pointer text-xl gap-1'> 
         <li onClick={()=>{scroll("skills")}} >Skills</li>
         <li onClick={()=>{scroll("projects")}}>Projects</li>
         <li onClick={()=>{scroll("Contact me")}}>Contact Me</li>
       </ul>
       </div>
      )}
    </div>
  );
};

export default Dropdown;