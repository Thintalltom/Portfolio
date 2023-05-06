import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import Info from "../Info/Info";
import Work from "../work/Work";
import Built from "../Built/Built";
import NoteWorthy from "../Built/NoteWorthy";
const About = () => {
  return (
    <div className="xl:flex  2xl:justify-between md: flex-row lg:p-9 mt-4 xs:h-full xs:w-full h-full lg:w-full  xs:mt[-50px] ">
      <div className="flex xl:hidden  lg:hidden 2xl:mt-[-1000px] md:hidden xs:hidden 2xl:block  ">
        <a href="https://twitter.com/tomideofGod">
          <BsTwitter className="text-2xl text-lime-500 cursor-pointer hover:text-red-800" />
        </a>
        <a href="https://www.linkedin.com/in/adeyanju-ayotomide-a630551b9/">
          <BsLinkedin className="text-2xl mt-[40px] text-lime-500 cursor-pointer hover:text-red-800" />
        </a>
        <a href="https://github.com/Thintalltom">
          <BsGithub className="text-2xl mt-[40px] text-lime-500 cursor-pointer hover:text-red-800" />
        </a>
        <a href="">
          {" "}
          <BsInstagram className="text-2xl text-lime-500 mt-[40px] cursor-pointer hover:text-red-800" />
         
        </a>
      </div>
      <div className="md:justify-center  md:mt-16 sm:justify-center md:p-[40px] sm:p-[40px] xs:p-[40px] sm:mt-16">
        <p className="text-lime-500 font-bold">Hi, my name is </p>
        <h1 className="lg:text-6xl xs:text-3xl font-bold text-slate-900 xs:mt-[-5px] lg:mt-4 md:mt-[30px] md:text-6xl sm:mt-[30px] sm:text-6xl">
          Adeyanju Tomide.
        </h1>
        <h1 className="lg:text-6xl xs:text-3xl xs:mt-[-2px] text-zinc-400 md:font-bold md:mt-[30px] md:text-6xl sm:mt-[30px] sm:text-4xl lg:mt-4 xs:font-bold">
          I build things for the web.
        </h1>
        <h1 className="md:text-sm text-zinc-400 md:font-medium mt-4 xs:font-normal">
          I’m a software engineer specializing in building (and occasionally{" "}
          <br /> writing) exceptional digital experiences. Currently, I’m
          focused on <br />
          building accessible, human-centered products
        </h1>
        <div className="xl:mt-4 ">
          <button className="border-2 rounded bg-slate-200 p-2 border-rose-700 hover:drop-shadow-xl ">
            Resume
          </button>
        </div>
        <Info />
        <Work />
        <Built />
      </div>
      <div className="xl:p-9 lg:hidden xl:hidden 2xl:block 2xl:mt-[-1000px]">
        <p className="xl:rotate-90 md:mt-[200px] xl:top-0 xs:hidden xl:block 2xl:block  xl:ml-[-105px] xl:mr-[-105px] ">
          adeyanjutomide@gmail.com{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
