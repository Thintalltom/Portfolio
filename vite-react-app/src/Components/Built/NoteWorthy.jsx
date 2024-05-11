import { BsTwitter, BsLinkedin, BsGithub} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
const NoteWorthy = () => {
  return (
    <div
      name="contact"
      className=" 2xl:p-[100px] text-center  xs:text-xs w-full h-full   p-4 bg-zinc-950 text-white "
    >
      <div>
      <p className="text-center text-center xs:text-2xl lg:text-6xl font-light bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200  mt-[40px]">Wanna Discuss?</p>
        <p className=" font-thin mt-[20px] xs:text-sm  bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
          Although I’m currently looking for any new opportunities, my inbox is
          always open. <br /> Whether you have a question, a gig or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <h5 className="font-thin text-zinc-950 mt-4  text-lg">Contact me </h5>
        

        <div className="hidden lg:flex  lg:justify-center lg:mt-9 lg:gap-9 sm:flex mt-[20px]  xs:text-xs sm:justify-center sm:mt-9 sm:gap-9 md:flex  md:justify-center md:mt-9 md:gap-9 xs:flex  xs:justify-center xs:mt-9 xs:gap-9 2xl:hidden  lg:block md:block sm:block xs:block ">
          <a href="https://twitter.com/tomideofGod">
            <BsTwitter className="text-2xl text-white cursor-pointer  xs:text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/adeyanju-ayotomide-a630551b9/">
            <BsLinkedin className="text-2xl 2xl:mt-[20px]  text-white cursor-pointer  xs:text-2xl" />
          </a>
          <a href="https://github.com/Thintalltom">
            <BsGithub className="text-2xl text-white 2xl:mt-[20px] cursor-pointer  xs:text-2xl" />
          </a>
          <a href="mailto:adeyanjutomide@gmail.com">
            {" "}
            <IoMdMail  className="text-2xl text-white 2xl:mt-[20px]  cursor-pointer  xs:text-2xl" />
          </a>
        </div>
        <div className="mt-[70px]">
          <p className="text-white cursor-pointer font-thin">Tomide2024</p>
        </div>
      </div>
    </div>
  );
};

export default NoteWorthy;
