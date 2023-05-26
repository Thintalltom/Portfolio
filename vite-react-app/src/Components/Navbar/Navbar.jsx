import React, { useState } from "react";
import Logo from "../../logo.png";
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {

  const variants = {
    open: { x: -250, opacity: 0 },
    closed: { x: 0, opacity: 1 },
  };
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);
  return (
    <div className="h-[70px] bg-sky-950 drop-shadow-lg  items-center justify-between p-4 flex font-sans">
      <div>
        <img src={Logo} alt="logoimage" className="w-[100px] cursor-pointer" />
      </div>
      {/*menu */}
      <div className="lg:flex hidden">
        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-sky-700 font-bold text-lg">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-sky-700 font-bold text-lg">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>{" "}
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-sky-700 font-bold text-lg">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-sky-700 font-bold text-lg">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </div>

      {/*Hamburger */}
      <motion.div
        className="lg:hidden md:block text-lg cursor-pointer  z-10"
        onClick={handleClick}
      >
        {open ? (
          <CiMenuFries className="text-cyan-800 text-3xl font-extrabold" />
        ) : (
          <CiCircleRemove className="text-cyan-800 text-3xl font-extrabold" />
        )}
      </motion.div>

      {/*small screen*/}
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className={
          open
            ? "hidden"
            : `flex-col flex text-center justify-center items-center gap-9 p-4 xs:w-full xs:h-screen 2xl:hidden lg:hidden   xs:h-screen md:h-screen bg-slate-200 absolute top-0 left-0`
        }
      >
        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-sky-700">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500 text-sky-700">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>{" "}
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-sky-700">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-sky-700">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </motion.div>
    </div>
  );
};

export default Navbar;
