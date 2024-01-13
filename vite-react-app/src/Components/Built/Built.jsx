import React from "react";
import Book from "../../assets/BookApp.jpg";
import Transact from "../../assets/TransactApp.jpg";
import NFT from "../../assets/NFT.jpg";
import Project from "../../assets/project1.jpg";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const Built = () => {
  return (
    <div
      name="work"
      className="mt-[50px] 2xl:mt-[-50px]  xs:text-xs w-full h-full  p-4 2xl:p-[100px] "
    >
      <div>
        <p className=" text-center  text-3xl  font-bold text-slae-450">
          Recent Projects
        </p>
      </div>

      <div className="mt-4  mt-[30px] ">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:flex lg:flex-row xs:flex-col sm:flex-col md:flex-row justify-around  p-4 gap-[20px] ">
            <img
              src={Project}
              className=" rounded-[10px] lg:w-[400px] h-[300px] sm:w-[300px] xs:w-[300px] "
            />
            <div className="w-[400px]">
              <p className="font-bold">Project 1</p>
              <h1 className="text-slate-500 xs:text-xs font-light ">
                E-commerce Website
              </h1>

              <p className="text-zinc-600 font-light">
                Created a web application that allows users to be able to buy
                products utilizing an external api called FAKESTORE Api, which
                allows users to order for items and pay for the items ordered
                for . Also incorporated the use of FLUTTERWAVE API as the
                payment gateway
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
