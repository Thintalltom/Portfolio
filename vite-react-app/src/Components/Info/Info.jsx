import Profile from '../../assets/profile.jpg'
import { DiJsBadge, DiCss3,  DiReact, DiSublime } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";
const Info = () => {
  return (
    <div
      name="about"
      className="w-full h-full rounded-t-[70px] bg-gray-300   mt-[-60px] p-4 2xl:p-[100px]  "
    >
      <div>
        <p className="text-center mt-[20px]  text-3xl font-medium text-xl text-zinc-950 ">About me</p>
       

        <div className="lg:flex lg:gap-4 lg:flex-row-reverse lg:justify-center xs:flex xs:flex-col md:mt-[30px] sm:mt-[30px]">
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 100 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
          >
           
            <motion.p className="mt-4 xs:text-sm text-zinc-950 font-light lg:text-sm md:text-sm xs:text-xs sm:text-sm">
              Hello My name is Tomide, I started web development in 2021.
              <br /> I bring a fresh perspective to the field, coupled with a
              passion for innovation <br /> and problem-solving. one of my
              greatest strength as a software developer <br /> is my ability to
              quickly learn and adapt to new technologies. <br />
              Ultimately, my goal as a software developer is to create <br />{" "}
              impactful and innovative solutions that enhances peoples lives
            </motion.p>
           
          </motion.div>
          <div className="md:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-[300px] md:ml-16 lg:h-75 border-2 md:ml-4 md:w-[500px] shadow-md sm:w-[400px] border-zinc-950 p-2 lg:mt-[40px] md:mx-[40px] rounded xs:p-1 xs:w-[200px] xs:mt-[80px] xs:mx-auto"
            >
              <img
                src={Profile}
                className="lg:w-[300px] mt-2 mx-2 rounded md:w-[800px] shadow-md sm:w-[700px] lg:mx-[-20px] lg:mt-[-20px] xs:w-[200px] cursor-pointer hover:bg-lime-500 "
              />
            </motion.div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row sm:flex-col gap-6 mt-[30px] justify-around">  
            <div className="grid  gap-[60px] lg:grid-cols-5  xs:grid-cols-2 ">
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
                    <div className="text-center flex gap-[2px] items-center ">
                    <FaHtml5 className="text-4xl"  />
                    <p className='text-xs'>  HTML</p></div>
            </div>

            </div>
      </div>
    </div>
  );
};

export default Info;
