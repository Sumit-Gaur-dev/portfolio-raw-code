import React from 'react'

export default function Card({title,path,image,content}) {
  const redirect = () =>{
    window.location.href = path;

  }

  return (
    <div className='flex-col flex items-center mx-5 mb-8 pb-6 bg-slate-800 rounded-md md:w-2/5 '> 
    <span className='pt-2 px-3' onClick={redirect}> 
      <img src={image} alt={title}  className=' rounded-md border-white border-2 '/>
    </span>
    <h1 className='text-2xl mt-2'>{title}</h1>
    <p className='text-sm  px-2 pt-3'>{content}</p>
   </div>
  )
}
