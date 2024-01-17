import { motion } from "framer-motion";
const About = () => {
  return (
    <div  className=" bg-zinc-950  h-[40rem] flex items-center p-[30px]">

      <div className="md:justify-center   md:mt-16 sm:justify-center 2xl:ml-[-40px] xs:ml-[-24px] md:p-[40px] sm:p-[40px] xs:p-[40px] sm:mt-[5px]">
        <p className="text-white lg:text-6xl xs:text-4xl ">HI, </p>
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="lg:text-6xl xs:text-xl  text-white xs:mt-[5px] lg:mt-4 md:mt-[30px] md:text-6xl sm:mt-[30px] xs:text-4xl sm:text-6xl"
        >
          I AM TOMIDE,
        </motion.h1>
        <motion.h1
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          whileInView={{opacity: 1, scale: 1}}
          className="lg:text-6xl xs:text-xl xs:mt-[2px] text-white md:mt-[30px] md:text-6xl sm:mt-[30px]  sm:text-4xl lg:mt-4 "
        >
          I BUILD THINGS FOR THE WEB
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
          className="md:text-sm text-white xl:font-thin md:font-medium mt-4 xs:text-md xs:font-normal"
        >
          I’m a software engineer specializing in building 
           exceptional digital experiences. <br /> Currently, I’m
          focused on building accessible, human-centered products
        </motion.h1>
        <div className="xl:mt-4  xs:mt-4 lg:mt-4">
          <motion.button
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="border-[0.5px] cursor-pointer  rounded bg-zinc-950 border-zinc-500 p-2 text-white w-[200px] hover:drop-shadow-xl xs:text-xs sm:mt-[30px] lg:mt-[10px] "
          >
            DOWNLOAD RESUME
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
