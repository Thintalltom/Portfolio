import { BsTwitter, BsLinkedin, BsGithub} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
const NoteWorthy = () => {
  return (
    <div
      name="contact"
      className=" 2xl:p-[100px] text-center  xs:text-xs w-full h-full xs:mt-[-20px]   p-4 text-white "
    >
      <div>
      <p className="text-center text-center xs:text-2xl lg:text-6xl xs:font-bold lg:font-light bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300  mt-[40px]">Wanna Discuss?</p>
        <p className=" lg:font-thin mt-[20px] xs:font-medium xs:text-sm lg:text-lg  bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300">
          Although I’m currently looking for any new opportunities, my inbox is
          always open. <br /> Whether you have a question, a gig or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        
        <a href="https://drive.google.com/file/d/12Y1zwPnIrlljrb_5JUfaRBCKYBI_KAwo/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="bg-zinc-900 p-[10px] mt-[20px] w-[200px] hover:bg-white hover:text-slate-800 text-white text-thin  font-light">Resume</button></a>  
        

        <div className="hidden lg:flex  lg:justify-center lg:mt-9 lg:gap-9 sm:flex mt-[20px]  xs:text-xs sm:justify-center sm:mt-9 sm:gap-9 md:flex  md:justify-center md:mt-9 md:gap-9 xs:flex  xs:justify-center xs:mt-9 xs:gap-9 2xl:hidden  lg:block md:block sm:block xs:block ">
          <a href="https://twitter.com/tomideofGod">
            <BsTwitter className="text-2xl text-white cursor-pointer  xs:text-2xl  hover:text-slate-500" />
          </a>
          <a href="https://www.linkedin.com/in/adeyanju-ayotomide-a630551b9/">
            <BsLinkedin className="text-2xl 2xl:mt-[20px]  text-white cursor-pointer  xs:text-2xl hover:text-slate-500" />
          </a>
          <a href="https://github.com/Thintalltom">
            <BsGithub className="text-2xl text-white 2xl:mt-[20px] cursor-pointer  xs:text-2xl  hover:text-slate-500" />
          </a>
          <a href="mailto:adeyanjutomide@gmail.com">
            {" "}
            <IoMdMail  className="text-2xl text-white 2xl:mt-[20px]  cursor-pointer  xs:text-2xl  hover:text-slate-500" />
          </a>
        </div>
        <div className="mt-[70px]">
          <p className=" cursor-pointer font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300">Tomide2024</p>
        </div>
      </div>
    </div>
  );
};

export default NoteWorthy;
