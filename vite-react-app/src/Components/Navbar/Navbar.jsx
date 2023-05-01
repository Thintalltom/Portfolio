import React, {useState} from 'react'
import Logo from '../../logo.png'
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
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
      const [open, setOpen] = useState(false)
      const handleClick = () => setOpen(!open)
  return (
  <div className='h-[70px] bg-slate-200 drop-shadow-lg items-center justify-between p-4 flex '>
      <div>
        <img src={Logo} alt='logoimage' className='w-[100px] cursor-pointer'/>
      </div>
      {/*menu */}
      <div className='md:flex hidden'>
          {list.map((list) => (
              
              <li className='list-none px-4 cursor-pointer hover:text-sky-700 text-slate-400'>
                  <span className='text-red-800'>{list.Number}</span>
                  {list.title}</li>
          ))}
      </div>

      {/*Hamburger */}
      <div className='md:hidden text-lg cursor-pointer  z-10' onClick={handleClick}>
          {open ? <CiMenuFries className='text-cyan-800 text-3xl font-extrabold' /> :
            <CiCircleRemove className='text-cyan-800 text-3xl font-extrabold' />}
      </div>

      {/*small screen*/}
      <div className={open ? 'hidden' : `md:hidden flex-col flex text-center justify-center items-center gap-9 p-4 w-full h-screen bg-slate-200 absolute top-0 left-0`}>
          {list.map((list) => (
              <li className='list-none px-4 cursor-pointer hover:text-sky-700 text-2xl'>{list.title}</li>
          ))}
      </div>
  </div>
  )
}

export default Navbar