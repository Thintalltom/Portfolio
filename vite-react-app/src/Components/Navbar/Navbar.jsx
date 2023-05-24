import React, {useState} from 'react'
import Logo from '../../logo.png'
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import { motion } from "framer-motion";
const Navbar = () => {

    const list =[
        {
            Number:'01.',
            title:' About'
        },
        {
            Number:'02.',
            title:' Experience'
        },
        {
            Number:'03.',
            title:' Works'
        },
        {
            Number:'04.',
            title:' Skills'
        },
        {
            Number:'05.',
            title:' Contact'
        },
    ]

    const variants={
        open: {x: -250, opacity: 0},
        closed: {x: 0, opacity: 1}
    }
      const [open, setOpen] = useState(true)
      const handleClick = () => setOpen(!open)
  return (
  <div className='h-[70px] bg-sky-950 drop-shadow-lg  items-center justify-between p-4 flex font-sans'>
      <div>
        <img src={Logo} alt='logoimage' className='w-[100px] cursor-pointer'/>
      </div>
      {/*menu */}
      <div className='lg:flex hidden'>
          {list.map((list) => (
              
              <li className='list-none px-4 cursor-pointer hover:text-sky-700 text-white'>
                  <span className='text-lime-500'>{list.Number}</span>
                  {list.title}</li>
          ))}
      </div>

      {/*Hamburger */}
      <motion.div

      className='lg:hidden md:block text-lg cursor-pointer  z-10' onClick={handleClick}>
          {open ? <CiMenuFries className='text-cyan-800 text-3xl font-extrabold' /> :
            <CiCircleRemove className='text-cyan-800 text-3xl font-extrabold' />}
      </motion.div>

      {/*small screen*/}
      <motion.div 
       animate = {open ? "open" : "closed"}
       variants = {variants}
       transition={{duration: 0.5}}
      className={open ? 'hidden' : `flex-col flex text-center justify-center items-center gap-9 p-4 xs:w-full xs:h-screen 2xl:hidden lg:hidden   xs:h-screen md:h-screen bg-slate-200 absolute top-0 left-0`}>
          {list.map((list) => (
              <li className='list-none px-4 cursor-pointer hover:text-sky-700 text-2xl'>{list.title}</li>
          ))}
      </motion.div>
  </div>
  )
}

export default Navbar