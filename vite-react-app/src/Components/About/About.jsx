import React from 'react'

import { BsTwitter, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <div className='md:flex gap-9 p-9'>
        <div className='md:flex hidden md:flex-col gap-9 mt-[200px]' >
        <BsTwitter className='text-2xl text-slate-500 cursor-pointer hover:text-red-800'/>
        <BsLinkedin className='text-2xl text-slate-500 cursor-pointer hover:text-red-800'/>
        <BsTwitter />
        </div>
        <div>
        <p>Hi, my name is </p>
        </div>
        
    </div>

  )
}

export default About