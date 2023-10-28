import React from 'react'
import Portfolio from "../resources/Untitled.png"
import Blog from "../resources/Blog"
import Todo from "../resources/TODO"
import Card from './Card'

export default function Projects() {
  const projects = [
    {
      id:1,
      path:Portfolio,
      content:"React, ReduxTK, MongoDB, ExpressJs",
      title:"TODO App",
      redirectLink:"thiashidftioasdfisdfasdfsadfsadf.com"
    },
    {
      id:2,
      path:Image,
      content:"React, ReactRouter, MongoDB, ExpressJs, JWT, Multer ",
      title:"Blog App",
      redirectLink:"thiashidftioasdfisdfasdfsadfsadf.com"
    },
    {
      id:3,
      path:Portfolio,
      content:"React, ReactRouter, MongoDB, ExpressJs, JWT, Multer ",
      title:"PortFolio App",
      redirectLink:"thiashidftioasdfisdfasdfsadfsadf.com"
    }

 
  ]
  return (
    <div className='text-center content-center w-full mt-16 '>
       <h1 className='text-slate-400 text-5xl '>Projects</h1>

   <div className='text-white  w-full flex flex-wrap justify-evenly mt-10 '>

      {projects.map((data) =>{
       return(
       <Card title={data.title} image={data.path} key={data.id} 
              path={data.redirectLink} content={data.content}
               />)})} 
      
    </div>

    </div>
  )
}
