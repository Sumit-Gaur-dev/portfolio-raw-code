import React from 'react'
import Hi from './Hi'
import WhatIdo from './WhatIdo'
import Skills from "./Skills"
import Projects from "./Projects"
import ContactUs from "./ContactUs"
export default function Main() {
  return (
    <div className='max-w-full  bg-black flex-col items-center '>
        <Hi/>
        <WhatIdo/>
        <Skills />
        <Projects />
        <ContactUs/>
    </div>
  )
}
