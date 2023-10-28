import React from 'react'
import Form from "./Form"

function ContactUs() {
  return (
    <div className=' text-center'>
         <h1 className='text-slate-400 text-5xl '>Contact Me </h1>
        <div className='w-full  md:flex items-center mt-10 md:justify-between ' >    
        <iframe className='h-50 rounded-md h-44 w-full md:w-3/5 md:h-80 md:rounded-none ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.844739937936!2d77.99323694821233!3d27.224023979076755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397479e59368db8d%3A0xcca82fd5e384abea!2s100%20Feet%20Rd%2C%20Agra%2C%20Uttar%20Pradesh%20282005!5e0!3m2!1sen!2sin!4v1698255207137!5m2!1sen!2sin" title='location' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <Form/>
      </div>
    </div>

    
  )
}

export default ContactUs