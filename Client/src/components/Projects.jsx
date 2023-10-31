import React from 'react'
import Portfolio from "../resources/Untitled.png"
import Blog from "../resources/Blog.png"
import Todo from "../resources/TODO.png"
import Card from './Card'

export default function Projects() {
  const projects = [
    {
      id:1,
      path:Todo,
      content:"React, ReduxTK, MongoDB, ExpressJs",
      title:"TODO App",
      redirectLink:"https://github.com/Sumit-Gaur-dev/TODO-Raw.git"
    },
    {
      id:2,
      path:Blog,
      content:"React, ReactRouter, MongoDB, ExpressJs, JWT, Multer ",
      title:"Blog App",
      redirectLink:"https://github.com/Sumit-Gaur-dev/Blog-App-Raw.git"
    },
    {
      id:3,
      path:Portfolio,
      content:"React, ReactRouter, MongoDB, ExpressJs, JWT, Multer ",
      title:"PortFolio App",
      redirectLink:"https://github.com/Sumit-Gaur-dev/portfolio-raw-code.git"
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
