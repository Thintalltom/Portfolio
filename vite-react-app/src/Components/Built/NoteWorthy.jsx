import React from "react";
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const NoteWorthy = () => {
  return (
    <div name='contact' className=" 2xl:p-[100px] text-center mt-9 xs:text-xs w-full h-full  p-4  ">
      <div>

    
      <p className="text-white text-lg">
        {" "}
        <span className="text-lime-500">04. </span>Whats next?
      </p>
      <p className="text-white text-4xl font-bold mt-9 mb-4 xs:text-2xl">
        Get In Touch
      </p>
      <p className="text-white xs:text-xs sm:text-md md:text-md lg:text-xl">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button className="mt-5  border-2 rounded-md border-lime-500 xs:p-2 xs:text-xs p-4 hover:drop-shadow-[10px 10px 5px -3px rgba(0,0,0,0.75)] text-sm text-lime-500">
        Say Hello
      </button>

      <div className="hidden lg:flex  lg:justify-center lg:mt-9 lg:gap-9 sm:flex  xs:text-xs sm:justify-center sm:mt-9 sm:gap-9 md:flex  md:justify-center md:mt-9 md:gap-9 xs:flex  xs:justify-center xs:mt-9 xs:gap-9 2xl:hidden  lg:block md:block sm:block xs:block ">
      <a href="https://twitter.com/tomideofGod">
          <BsTwitter className="text-2xl text-lime-500 cursor-pointer hover:text-red-800 xs:text-sm" />
        </a>
        <a href="https://www.linkedin.com/in/adeyanju-ayotomide-a630551b9/">
          <BsLinkedin className="text-2xl 2xl:mt-[20px]  text-lime-500 cursor-pointer hover:text-red-800 xs:text-sm" />
        </a>
        <a href="https://github.com/Thintalltom">
          <BsGithub className="text-2xl text-lime-500 2xl:mt-[20px] cursor-pointer hover:text-red-800 xs:text-sm" />
        </a>
        <a href="">
          {" "}
          <BsInstagram className="text-2xl text-lime-500 2xl:mt-[20px]  cursor-pointer hover:text-red-800 xs:text-sm" />
         
        </a>
      </div>
      <div className="mt-[70px]">
        <p className="text-lime-500 cursor-pointer">Built by tomide</p>
      </div>
      </div>
    </div>
  );
};

export default NoteWorthy;
