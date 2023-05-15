import React from 'react'

const NoteWorthy = () => {
  return (
    <div className='text-center mt-9'>
      <p className='text-lime-500 text-lg'> <span>04. </span>Whats next?</p>
      <p className='text-white text-4xl font-bold mt-9 xs:text-2xl'>Get In Touch</p>
      <p className='text-white xs:text-sm'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    <button className='mt-5  border-2 rounded-md border-lime-500 p-4 hover:drop-shadow-[10px 10px 5px -3px rgba(0,0,0,0.75)] text-sm text-lime-500' >Say Hello</button>

    <div className='mt-[70px]'>
      <p className='hover:text-lime-500 cursor-pointer'>Built by tomide</p>
    </div>
    </div>
  )
}

export default NoteWorthy