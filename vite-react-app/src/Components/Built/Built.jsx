import React from "react";
import Book from "../../assets/BookApp.jpg";
import Transact from "../../assets/TransactApp.jpg";
import NFT from "../../assets/NFT.jpg";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const Built = () => {
  return (
    <div
      name="work"
      className="mt-[-5px] 2xl:mt-[-50px]  xs:text-xs w-full h-full  p-4 2xl:p-[100px] "
    >
      <div>
        <h1 className="font-medium text-white text-2xl xs:text-sm md:text-xl  lg:text-2xl">
          {" "}
          <span className="text-lime-500 text-2xl xs:text-sm md:text-xl">
            03.
          </span>
          Some Things I've Built
        </h1>
        <hr className="border-1 border-slate-500 mt-4" />
      </div>

      <div className="mt-4 md:flex md:justify-center sm:justify-center ">
        <div className="md:flex md:flex-col md:justify-center sm:justify-center  ">
          <div className="lg:flex lg:flex-row cursor-pointer xs:flex xs:flex-col md:justify-items-stretch xs:hidden sm:hidden md:hidden ">
            <img
              src={Book}
              className="w-[600px] h-[400px] xs:hidden sm:hidden lg:block 2xl:block xl:block"
            />
            <div className="z-10">
              <h1 className="text-white xs:text-xs text-right">
                Book Web Application
              </h1>
              <div className="w-[500px] lg:w-[300px] sm:ml-[5px] xs:ml-[5px] xs:text-xs md:ml-[-5px] xs:w-full sm:w-full  text-right  md:w-[600px] mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 md:mt-[20px]">
                <p>
                  A web Application that allows users to read books on different
                  genres, Bookmark books and also create a copy of their own
                  book
                </p>
              </div>
              <div className="flex justify-between sm:justify-center sm:justify-between xs:text-xs mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0">
                <p>React</p>
                <p>Nodejs </p>
                <p>MySQL</p>
                <p>ExpressJs</p>
              </div>

              <div className="mt-4 ml-4 text-2xl justify-between flex ">
                <FaGithub className="text-white hover:text-lime-500 xs:text-xs" />
                <FaLink className="text-white hover:text-lime-500 xs:text-xs" />
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row cursor-pointer xs:hidden sm:hidden md:hidden xs:flex-col-reverse lg:flex-row-reverse lg:mt-9 sm:mt-9 ">
            <img
              src={Transact}
              className="w-[600px] h-[400px] xs:hidden sm:hidden lg:block 2xl:block xl:block"
            />
            <div className="z-10 xs:mt-[30px]">
              <h1 className="text-white xs:text-xs text-right">
                Sales Application
              </h1>
              <div className="w-[500px] lg:w-[300px]  xs:ml-[5px] xs:text-xs xs:backgroundImage-hero-pattern  sm:ml-[5px] md:ml-[-5px] sm:w-full text-right xs:w-full md:w-[600px] mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 md:mt-[20px]">
                <p>
                  A web Application that allows users to sell their products and
                  display it
                </p>
              </div>
              <div className="flex justify-between xs:text-xs mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0 ">
                <p>React</p>
                <p>Firebase </p>
              </div>

              <div className=" ml-4 text-2xl justify-between flex ">
                <FaGithub className="text-white hover:text-lime-500 xs:text-xs" />
                <FaLink className="text-white hover:text-lime-500 xs:text-xs" />
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row cursor-pointer xs:hidden sm:hidden md:hidden xs:flex-col-reverse lg:flex-row-reverse lg:mt-9 sm:mt-9 ">
            <img
              src={NFT}
              className="w-[600px] h-[400px] xs:hidden sm:hidden lg:block 2xl:block xl:block"
            />
            <div className="z-10 xs:mt-[30px]">
              <h1 className="text-white xs:text-xs text-right">Sea place</h1>
              <div className="w-[500px] lg:w-[300px]  xs:ml-[5px] xs:text-xs xs:backgroundImage-hero-pattern  sm:ml-[5px] md:ml-[-5px] sm:w-full text-right xs:w-full md:w-[600px] mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 md:mt-[20px]">
                <p>An NFT landing page</p>
              </div>
              <div className="flex justify-between xs:text-xs mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0 ">
                <p>React</p>
                <p>tailwind css </p>
              </div>

              <div className=" ml-4 text-2xl justify-between flex ">
                <FaGithub className="text-white hover:text-lime-500 xs:text-xs" />
                <a href="https://Stylist-page.vercel.app">
                <FaLink className="text-white hover:text-lime-500 xs:text-xs" />
                  </a>{" "}
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*for small phone */}

      <div className=" lg:hidden xl:hidden 2xl:hidden cursor-pointer xs:flex xs:flex-col md:justify-items-stretch ">
        <div className="z-10">
          <h1 className="text-white xs:text-xs text-right">
            Book Web Application
          </h1>
          <div
            style={{
              backgroundImage: `url(${Book})`,
              backgroundSize: "cover",
              backgroundColor: "grey",
              backgroundBlendMode: "multiply",
            }}
            className="w-[500px] lg:w-[300px] sm:ml-[5px] xs:ml-[5px] xs:text-xs md:ml-[-5px] xs:w-full sm:w-full  text-right   mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 md:mt-[20px]"
          >
            <p className="text-white">
              A web Application that allows users to read books on different
              genres, Bookmark books and also create a copy of their own book
            </p>
          </div>
          <div className="flex justify-between sm:justify-center sm:justify-between xs:text-xs mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0">
            <p>React</p>
            <p>Nodejs </p>
            <p>MySQL</p>
            <p>ExpressJs</p>
          </div>

          <div className="mt-4 ml-4 text-2xl justify-between flex ">
            <FaGithub className="text-white hover:text-lime-500 xs:text-xs" />
            <FaLink className="text-white hover:text-lime-500 xs:text-xs" />
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row cursor-pointer xs:flex xs:flex-col-reverse  lg:hidden xl:hidden 2xl:hidden">
        <div className="z-10 xs:mt-[30px]">
          <h1 className="text-white xs:text-xs text-right">
            Sales Application
          </h1>
          <div
            style={{
              backgroundImage: `url(${Transact})`,
              backgroundSize: "cover",
              backgroundColor: "grey",
              backgroundBlendMode: "multiply",
            }}
            className="w-[500px] lg:w-[300px]  xs:ml-[5px] lg:hidden xl:hidden 2xl:hidden xs:text-xs  sm:ml-[5px]  sm:w-full text-right xs:w-full  mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 "
          >
            <p className="text-white">
              A web Application that allows users to sell their products and
              display it
            </p>
          </div>
          <div className="flex justify-between xs:text-xs mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0 ">
            <p>React</p>
            <p>Firebase </p>
          </div>

          <div className=" ml-4 text-2xl justify-between flex ">
            <FaGithub className="text-white hover:text-lime-500 xs:text-xs" />
            <FaLink className="text-white hover:text-lime-500 xs:text-xs" />
          </div>
        </div>
      </div>



      <div className="lg:flex lg:flex-row cursor-pointer xs:flex xs:flex-col-reverse  lg:hidden xl:hidden 2xl:hidden">
        <div className="z-10 xs:mt-[30px]">
          <h1 className="text-white xs:text-xs text-right">
            Sales Application
          </h1>
          <div
            style={{
              backgroundImage: `url(${NFT})`,
              backgroundSize: "cover",
              backgroundColor: "grey",
              backgroundBlendMode: "multiply",
            }}
            className="w-[500px] lg:w-[300px]  xs:ml-[5px] lg:hidden xl:hidden 2xl:hidden xs:text-xs  sm:ml-[5px]  sm:w-full text-right xs:w-full  mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 "
          >
            <p className="text-white">
              Sea place
            </p>
          </div>
          <div className="flex justify-between xs:text-xs mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0 ">
            <p>React</p>
            <p>tailwindcss </p>
          </div>

          <div className=" ml-4 text-2xl justify-between flex ">
            <FaGithub className="text-white hover:text-lime-500 xs:text-xs" />
            <a href="https://Stylist-page.vercel.app">
                <FaLink className="text-white hover:text-lime-500 xs:text-xs" />
                  </a>{" "}
               
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
