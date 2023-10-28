import * as React from 'react';
import {BiLogoMongodb} from "react-icons/bi"
import {FaReact} from "react-icons/fa"
import {SiExpress} from "react-icons/si"
import {DiNodejsSmall} from "react-icons/di"
import SkillCard from "./SkillCard.jsx"

export default function Skills() {
  return (
    <div className='text-center mt-16'>
        <h1 className='text-slate-400 text-5xl '>Skills</h1>
    <div>

  <div className='mt-8'>
        <div className=' max-w-[100%] flex justify-center gap-2 mt-2'>
          <div style={{ position: 'relative' }}>
              <div className=' blur h-16 w-16 inset-1 bg-blue-900 rounded-full'></div>
                <div title='MongoDB Click!!' className=' z-10 shadow shadow-cyan-500/50 flex justify-center ease-in duration-200 hover:bg-black items-center h-14 w-14 bg-white rounded-full'
                      style={{ position: 'absolute', top: 3, left: 4 }}>
                      <BiLogoMongodb className='h-12 w-12 text-green-600' />
                  </div> 
          </div>
            
          <div style={{ position: 'relative' }}>
              <div className=' blur h-16 w-16 inset-1 bg-blue-900 rounded-full'></div>
                <div title='MongoDB Click!!' className=' z-10 shadow shadow-cyan-500/50 flex justify-center ease-in duration-200 hover:bg-black items-center h-14 w-14 bg-white rounded-full'
                      style={{ position: 'absolute', top: 3, left: 4 }}>
                      <SiExpress title='Express Click!!' className='h-12 w-12 text-yellow-600' />
                  </div> 
          </div>

          <div style={{ position: 'relative' }}>
              <div className=' blur h-16 w-16 inset-1 bg-blue-900 rounded-full'></div>
                <div title='MongoDB Click!!' className=' z-10 shadow shadow-cyan-500/50 flex justify-center ease-in duration-200 hover:bg-black items-center h-14 w-14 bg-white rounded-full'
                      style={{ position: 'absolute', top: 3, left: 4 }}>
                      <FaReact title='Express Click!!' className='h-16 w-16 text-sky-700' />
                  </div> 
          </div>

          
          <div style={{ position: 'relative' }}>
              <div className=' blur h-16 w-16 inset-1 bg-blue-900 rounded-full'></div>
                <div title='MongoDB Click!!' className=' z-10 shadow shadow-cyan-500/50 flex justify-center ease-in duration-200 hover:bg-black items-center h-14 w-14 bg-white rounded-full'
                      style={{ position: 'absolute', top: 3, left: 4 }}>
                      <DiNodejsSmall title="Nodejs"className='h-12 w-12 text-green-950 ' />
                  </div> 
          </div>

          
        </div>
 </div>   
        
          <SkillCard />
      </div>
    </div>
  )
}
