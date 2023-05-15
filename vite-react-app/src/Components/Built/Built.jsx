import React from "react";
import Book from "../../assets/BookApp.jpg";
import Transact from "../../assets/TransactApp.jpg";
import { FaGithub, FaLink } from "react-icons/fa";

const Built = () => {
  return (
    <div className="mt-[100px] ">
      <div>
        <h1 className="font-normal text-white text-2xl xs:text-xl ">
          {" "}
          <span className="text-lime-500 text-2xl xs:text-sm">03.</span>Some
          Things I've Built
        </h1>
        <hr className="border-1 border-slate-500 mt-4" />
      </div>

      <div className="mt-4 md:flex md:justify-center sm:justify-center ">
        <div className="md:flex md:flex-col md:justify-center sm:justify-center  ">
          <div className="lg:flex lg:flex-row cursor-pointer xs:flex xs:flex-col md:justify-items-stretch ">
            <img
              src={Book}
              className="w-[600px] h-[400px] xs:hidden sm:hidden lg:block 2xl:block xl:block"
            />
            <div className="z-10">
              <h1 className="text-white xs:text-sm text-right">
                Book Web Application
              </h1>
              <div className="w-[500px] lg:w-[300px] sm:ml-[5px] xs:ml-[5px] md:ml-[-5px] xs:w-full sm:w-full xs:text-sm text-right  md:w-[600px] mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 md:mt-[20px]">
                <p>
                  A web Application that allows users to read books on different
                  genres, Bookmark books and also create a copy of their own
                  book
                </p>
              </div>
              <div className="flex justify-between sm:justify-center sm:justify-between xs:text-sm mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0">
                <p>React</p>
                <p>Nodejs </p>
                <p>MySQL</p>
                <p>ExpressJs</p>
              </div>

              <div className="mt-4 ml-4 text-2xl justify-between flex ">
                <FaGithub className="text-white hover:text-lime-500" />
                <FaLink className="text-white hover:text-lime-500" />
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row cursor-pointer xs:flex xs:flex-col-reverse lg:flex-row-reverse lg:mt-9 sm:mt-9 ">
            <img
              src={Transact}
              className="w-[600px] h-[400px] xs:hidden sm:hidden lg:block 2xl:block xl:block"
            />
            <div className="z-10 xs:mt-[30px]">
              <h1 className="text-white xs:text-sm text-right">
                Sales Application
              </h1>
              <div className="w-[500px] lg:w-[300px]  xs:text-sm xs:ml-[5px]  sm:ml-[5px] md:ml-[-5px] sm:w-full text-right xs:w-full md:w-[600px] mt-4 mx-[-25px] drop-shadow-lg h-[150px] p-4 bg-sky-200 md:mt-[20px]">
                <p>
                  A web Application that allows users to sell their products and display it
                </p>
              </div>
              <div className="flex justify-between xs:text-sm mt-4 ml-2 xs:ml-0 text-lime-500 md:ml-0">
                <p>React</p>
                <p>Firebase </p>
                
              </div>

              <div className="mt-4 ml-4 text-2xl justify-between flex ">
                <FaGithub className="text-white hover:text-lime-500" />
                <FaLink className="text-white hover:text-lime-500" />
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Built;
