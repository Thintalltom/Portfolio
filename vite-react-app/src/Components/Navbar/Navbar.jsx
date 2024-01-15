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
  const handleItem = () => {
    setOpen(true);
  };
  return (
    <div className="h-[70px] items-center bg-zinc-950 justify-between p-4 flex  fixed w-[100vw]">
      <div>
        <p className="text-white text-2xl">tofG</p>
      </div>
      {/*menu */}
      <div className="lg:flex hidden text-white">
        <li className="list-none px-4 cursor-pointer  font-light text-sm">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="list-none px-4 cursor-pointer font-light text-sm">
          <Link to="work" smooth={true} duration={500}>
            Project
          </Link>{" "}
        </li>

        <li className="list-none px-4 cursor-pointer font-light text-sm">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>

        <li className="list-none px-4 cursor-pointer  font-light text-sm">
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
          <CiMenuFries className="text-cyan-800 text-3xl font-light" />
        ) : (
          <CiCircleRemove className="text-cyan-800 text-3xl font-light" />
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
        <li  className="list-none px-4 cursor-pointer  ">
          <Link onClick={handleItem} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li   className="list-none px-4 cursor-pointer  ">
          <Link onClick={handleItem} to="experience" smooth={true} duration={500}>
            Experience
          </Link>{" "}
        </li>

        <li  className="list-none px-4 cursor-pointer  ">
          <Link onClick={handleItem} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li   className="list-none px-4 cursor-pointer">
          <Link onClick={handleItem} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </motion.div>
    </div>
  );
};

export default Navbar;
