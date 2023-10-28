import React from 'react'
import {BsCodeSlash} from "react-icons/bs";
import {CiServer} from "react-icons/ci"

export default function SkillCard() {
  return (
    <div className='text-white  w-full flex justify-evenly mt-10 '>
       <div className='w-2/5 pt-4 pb-4 bg-slate-800 rounded-md'> 
        <span className=' text-2xl justify-center flex'><BsCodeSlash /></span>
        <h1 className='text-2xl  pb-4'>FrontEnd</h1>
        <ul className='gap-3'>
            <li>React</li>
            <li>React Redux</li>
            <li>React Router</li>
            <li>TailwindCss</li>
            <li>BootStrap</li>
        </ul>

       </div>
       <div  className='w-2/5 pt-4 pb-4 bg-slate-800 rounded-md'>
       <span className=' text-2xl justify-center flex'><CiServer /></span>
       <h1 className='text-2xl  pb-4'>BackEnd</h1>
       <ul>
            <li>MongoDb</li>
            <li>ExpressJs</li>
            <li>NodeJs</li>
            <li>Mongoose</li>
            <li>JWT</li>
        </ul>
       </div>
    </div>
  )
}
