import React, { useState } from "react";
import { motion } from "framer-motion";
const Work = () => {
  const [tabstate, setTabstate] = useState(1);

  const action = (index) => {
    setTabstate(index);
  };

  const works = [
    {
      title: "Created Web applications using react",
    },
    {
      title: "Learnt how to managae and work with state properly in react ",
    },
    {
      title:
        "Worked on a team to achieve a common goal of created web application that meet te needs of users",
    },
  ];

  const Appen = [
    {
      title: "Registering of tickets ",
    },
    {
      title: "Scrutinizing of web requests and contents on websites ",
    },
    {
      title: "Collecting of users data",
    },
  ];

  const ALX = [
    {
      title: "Learnt the basics of programming learnt how to use HTML and CSS",
    },
    {
      title: "Worked on a team to carry out tasks given to us  ",
    },
    {
      title: "Learnt the basics of C programming langauge and  Python ",
    },
  ];

  return (
    <div
      name="experience"
      className="mt-[30px]  xs:text-xs 2xl:text-xl w-full h-full  p-4 2xl:p-[100px]  "
    >
      <div>
        <h1 className=" text-center font-bold text-zinc-950 md:text-2xl ">
          Experience
        </h1>
       

        <div className=" mt-[20px] p-4 ">
          <div className="flex xs:flex-col sm:flex-col lg:flex-row  gap-4 2xl:gap-[100px] text-slate-400">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="gap-9 xs:flex xs:flex-row  md:flex md:flex-col "
            >
              <div
                onClick={() => action(1)}
                className={`${
                  tabstate === 1
                    ? "border-l-2   bg-slate-900 text-white  font-thin cursor-pointer p-2 rounded-sm"
                    : " p-2  hover:bg-slate-900 text-zinc-950 hover:text-white font-thin cursor-pointer"
                }`}
              >
                Side Hustle
              </div>
              <div
                onClick={() => action(2)}
                className={`${
                  tabstate === 2
                  ? "border-l-2   bg-slate-900 text-white font-thin cursor-pointer p-2 rounded-sm"
                  : " p-2  hover:bg-slate-900 text-zinc-950 hover:text-white  font-thin cursor-pointer"
                }`}
              >
                Appen
              </div>
              <div
                onClick={() => action(3)}
                className={`${
                  tabstate === 3
                  ? "border-l-2   bg-slate-900 text-white font-thin cursor-pointer p-2 rounded-sm"
                  : " p-2  hover:bg-slate-900 text-zinc-950 font-thin hover:text-white cursor-pointer"
                }`}
              >
                ALX Africa
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, type: "spring", stiffness: 120 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className={`${tabstate === 1 ? "text-white" : "hidden"}`}
            >
              <div>
                <h1 className="text-white text-zinc-950 font-light">
                  React Developer Intern @<span className="text-zinc-950 font-bold">Sidehustle</span>
                </h1>
                <p className="text-md text-zinc-950 font-light">
                  August 2022 - October 2022
                </p>
                {works.map((work) => (
                  <li className="text-zinc-950 font-light">{work.title}</li>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, type: "spring", stiffness: 120 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className={`${tabstate === 2 ? "text-white" : "hidden"}`}
            >
              <div>
                <h1 className="text-zinc-950 font-light">
                  Data Collector @<span className="text-zinc-950 font-bold">Appen</span>
                </h1>
                <p className="text-zinc-950 font-light">June 2022 - Present</p>
                {Appen.map((work) => (
                  <li className="text-zinc-950 font-light">{work.title}</li>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, type: "spring", stiffness: 120 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className={`${tabstate === 3 ? "text-white" : "hidden"}`}
            >
              <div>
                <h1 className="text-zinc-950 font-light">
                  Intern @ <span className="text-zinc-950 font-bold">ALX Africa</span>
                </h1>
                <p className="text-md text-slate-400">
                  April 2022 - September 2022
                </p>
                {ALX.map((work) => (
                  <li className="text-white text-md text-zinc-950 font-light">{work.title}</li>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
