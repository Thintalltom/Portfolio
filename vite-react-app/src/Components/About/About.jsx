import React from "react";
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

import { motion } from "framer-motion";
const About = () => {
  return (
    <div  className="xl:flex  2xl:justify-between md: flex-row lg:p-9 mt-4 xs:h-full xs:w-full h-full lg:w-full  xs:mt[-50px] ">
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="flex xl:hidden  lg:hidden 2xl:mt-[200px] w-[300px]  md:hidden xs:hidden 2xl:block  "
      >
        <a href="https://twitter.com/tomideofGod">
          <BsTwitter className="text-2xl text-lime-500 cursor-pointer hover:text-red-800" />
        </a>
        <a href="https://www.linkedin.com/in/adeyanju-ayotomide-a630551b9/">
          <BsLinkedin className="text-2xl 2xl:mt-[20px]  text-lime-500 cursor-pointer hover:text-red-800" />
        </a>
        <a href="https://github.com/Thintalltom">
          <BsGithub className="text-2xl text-lime-500 2xl:mt-[20px] cursor-pointer hover:text-red-800" />
        </a>
        <a href="">
          {" "}
          <BsInstagram className="text-2xl text-lime-500 2xl:mt-[20px]  cursor-pointer hover:text-red-800" />
        </a>
      </motion.div>
      <div className="md:justify-center  md:mt-16 sm:justify-center 2xl:ml-[-40px] md:p-[40px] sm:p-[40px] xs:p-[40px] sm:mt-16">
        <p className="text-lime-500 font-bold xs:text-sm">Hi, my name is </p>
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="lg:text-6xl xs:text-xl font-bold text-slate-900 xs:mt-[5px] lg:mt-4 md:mt-[30px] md:text-6xl sm:mt-[30px] sm:text-6xl"
        >
          Adeyanju Tomide.
        </motion.h1>
        <motion.h1
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="lg:text-6xl xs:text-xl xs:mt-[2px] text-zinc-400 md:font-bold md:mt-[30px] md:text-6xl sm:mt-[30px] sm:text-4xl lg:mt-4 xs:font-bold"
        >
          I build things for the web.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
          className="md:text-sm text-zinc-400 md:font-medium mt-4 xs:text-xs xs:font-normal"
        >
          I’m a software engineer specializing in building (and occasionally{" "}
          <br /> writing) exceptional digital experiences. Currently, I’m
          focused on <br />
          building accessible, human-centered products
        </motion.h1>
        <div className="xl:mt-4 ">
          <motion.button
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="border-2 rounded bg-sky-950 p-2 border-lime-500  text-lime-500 hover:drop-shadow-xl xs:text-xs mt-4 "
          >
            Resume
          </motion.button>
        </div>

   
      </div>
      <div className="xl:p-9 lg:hidden xl:hidden 2xl:block ">
        <p className="xl:rotate-90 md:mt-[200px] xl:top-0 xs:hidden xl:block 2xl:block text-lime-500  ">
          adeyanjutomide@gmail.com{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
