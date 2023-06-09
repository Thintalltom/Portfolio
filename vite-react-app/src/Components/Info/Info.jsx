import React from "react";
import profile from "../../profile.jpg";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
const Info = () => {
  return (
    <div name='about' className="w-full h-full  p-4 2xl:p-[100px] lg:mt-[150px] xs:mt-[10px] md:mt-[500px] sm:mt-[500px] ">
      <div>
        <h1 className="font-bold text-slate-200 md:text-2xl sm:text-2xl ">
          {" "}
          <span className="font-normal text-lime-500">01.</span> About Me{" "}
        </h1>
        <hr className="border-1 border-slate-500 mt-4" />

        <div className="lg:flex lg:gap-4 lg:flex-row xs:flex xs:flex-col md:mt-[30px] sm:mt-[30px]">
          <motion.div
              initial={{ opacity: 0, scale: 0, x:100 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2}}
              whileInView={{opacity: 1, scale: 1, x: 0}}
              viewport={{once: true}}
          >
            <motion.p
          
          
              className="mt-4 xs:text-sm text-white lg:text-lg md:text-2xl xs:text-xs sm:text-2xl"
            >
              Hello My name is Tomide, I started web development in 2021.
              <br /> I bring a fresh perspective to the field, coupled with a
              passion for innovation <br /> and problem-solving. one of my
              greatest strength as a software developer <br /> is my ability to
              quickly learn and adapt to new technologies. <br />
              Ultimately, my goal as a software developer is to create <br />{" "}
              impactful and innovative solutions that enhances people's lives
            </motion.p>
            <p className="text-slate-400 font-medium md:text-2xl sm:text-2xl md:mt-4 sm:mt-4 xs:text-xs">
              Here are few technologies have worked with
            </p>
            <div className="flex gap-6">
              <div className="md:text-2xl md:mt-4 sm:text-xl sm:mt-4 xs:text-xs">
                <span className="flex gap-2 text-slate-400 xs:text-xs md:text-lg">
                  {" "}
                  <FaCheck className="text-lime-500" />
                  Javascript
                </span>
                <span className="flex gap-2 text-slate-400 xs:text-xs md:text-lg">
                  {" "}
                  <FaCheck className="text-lime-500" />
                  HTML
                </span>
                <span className="flex gap-2 text-slate-400 xs:text-xs md:text-lg">
                  {" "}
                  <FaCheck className="text-lime-500" />
                  CSS
                </span>
              </div>
              <div className="md:text-2xl md:mt-4 sm:text-xl sm:mt-4">
                <span className="flex gap-2 text-slate-400 xs:text-xs md:text-lg">
                  {" "}
                  <FaCheck className="text-lime-500" />
                  React
                </span>
                <span className="flex gap-2 text-slate-400 xs:text-xs md:text-lg">
                  {" "}
                  <FaCheck className="text-lime-500" />
                  MySQL
                </span>
                <span className="flex gap-2 text-slate-400 xs:text-xs md:text-lg">
                  {" "}
                  <FaCheck className="text-lime-500" />
                  Nodejs
                </span>
              </div>
            </div>
          </motion.div>
          <div className="md:justify-center">
            <motion.div 
            initial={{ opacity: 0, scale: 0, x:100 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            whileInView={{opacity: 1, scale: 1, x: 0}}
            viewport={{once: true}}
            className="lg:w-[300px] md:ml-16 lg:h-75 border-2 md:ml-4 md:w-[500px] sm:w-[400px] border-lime-500 p-2 lg:mt-[40px] md:mx-[40px] rounded xs:p-1 xs:w-[200px] xs:mt-[80px] xs:mx-auto">
              <img
                src={profile}
                className="lg:w-[300px] mt-2 mx-2 rounded md:w-[800px] sm:w-[700px] lg:mx-[-20px] lg:mt-[-20px] xs:w-[200px] cursor-pointer hover:bg-lime-500 "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
