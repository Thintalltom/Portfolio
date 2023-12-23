import React from "react";
import profile from "../../profile.jpg";
import { FaCheck } from "react-icons/fa";
import { DiJsBadge, DiCss3,  DiReact, DiSublime, DiVim } from "react-icons/di";
import { motion } from "framer-motion";
const Info = () => {
  return (
    <div
      name="about"
      className="w-full h-full rounded-t-[70px] bg-gray-300   mt-[-60px] p-4 2xl:p-[100px]  "
    >
      <div>
        <div className="flex justify-center ">
          <p className="lg:text-[100px] xs:text-lg  font-bold tracking-[2rem] text-slate-400">
            About me
          </p>
        </div>

        <div className="lg:flex lg:gap-4 lg:flex-row-reverse lg:justify-around xs:flex xs:flex-col md:mt-[30px] sm:mt-[30px]">
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 100 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.p className="mt-4 xs:text-sm text-slate-950 font-light lg:text-lg md:text-2xl xs:text-xs sm:text-2xl">
              Hello My name is Tomide, I started web development in 2021.
              <br /> I bring a fresh perspective to the field, coupled with a
              passion for innovation <br /> and problem-solving. one of my
              greatest strength as a software developer <br /> is my ability to
              quickly learn and adapt to new technologies. <br />
              Ultimately, my goal as a software developer is to create <br />{" "}
              impactful and innovative solutions that enhances people's lives
            </motion.p>
            <button className="bg-zinc-950 w-[300px] mt-[10px] p-4 font-light text-white">
              2 years of experience
            </button>
          </motion.div>
          <div className="md:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-[300px] md:ml-16 lg:h-75 border-2 md:ml-4 md:w-[500px] sm:w-[400px] border-lime-500 p-2 lg:mt-[40px] md:mx-[40px] rounded xs:p-1 xs:w-[200px] xs:mt-[80px] xs:mx-auto"
            >
              <img
                src={profile}
                className="lg:w-[300px] mt-2 mx-2 rounded md:w-[800px] sm:w-[700px] lg:mx-[-20px] lg:mt-[-20px] xs:w-[200px] cursor-pointer hover:bg-lime-500 "
              />
            </motion.div>
          </div>
        </div>
        <div className="flex gap-6 mt-[30px] justify-around">  
            <div>
              <p className="font-bold text-slate-700 text-2xl">Tools I use</p>
              <p className="font-light"> Here are some awesome tools i use to make development and <br /> problem 
                solving easier and faster for my user</p>
            </div>
            <div className="grid grid-cols-2 gap-[60px]">
              <div className="text-center flex gap-[6px] items-center">
                <DiJsBadge className="text-4xl" /> 
                
                <p className='text-xs'> javaScript</p>
                </div> 
                <div className="text-center flex gap-[2px] items-center">
                  <DiReact className="text-4xl"  />
                 <p className='text-xs'>  React</p>
                 </div> 
                  <div className="text-center flex gap-[2px] items-center">
                    <DiCss3 className="text-4xl"  />
                    <p className='text-xs'>  CSS</p>
                    </div> 
                    <div className="text-center flex gap-[2px] items-center ">
                    <DiSublime className="text-4xl"  />
                    <p className='text-xs'>  Sanity</p></div>
            </div>

            </div>
      </div>
    </div>
  );
};

export default Info;
