import React from 'react'
import Img from "../resources/readme.png"

export default function WhatIdo() {
 
  return (

      <div className='max-w-full  md:flex items-center mt-16' >
        
        <img src={Img} alt='artPng' className=' h-50 w-50 md:w-2/4 md:h-2/4' />
        <section>
          <h1  className='text-center text-white text-4xl font-header'>What I do</h1>
          <h3 className='text-white px-1 mt-4 font-text2 md:text-[15px] md:p-0'> CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK<br/>
          ⚡ Active open to learn tech <br/>
          ⚡ Able to manage Frontend / backend with persistence <br/>
          ⚡ Solve real world problems </h3>
        </section>
        
      </div>
  )
}
