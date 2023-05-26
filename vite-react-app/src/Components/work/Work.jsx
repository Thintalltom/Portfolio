import React, { useState } from "react";

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
    <div name='experience' className="mt-[100px]  2xl:mt-[10px] xs:text-xs 2xl:text-xl w-full h-full  p-4 2xl:p-[100px]  ">
      <div>
      <h1 className="font-bold text-slate-200 md:text-2xl ">
        {" "}
        <span className="font-normal text-lime-500">02.</span>Where I,ve Worked
      </h1>
      <hr className="border-1 border-slate-500 mt-4" />

      <div className=" mt-4 ">
        <div className="flex xs:flex xs:flex-col md:flex-row gap-4 2xl:gap-[100px] text-slate-400">
          <div className="gap-9 xs:flex xs:flex-row md:flex md:flex-col ">
            <div
              onClick={() => action(1)}
              className={`${
                tabstate === 1
                  ? "border-l-2 border-l-lime-500  bg-slate-900 text-lime-500 cursor-pointer p-2"
                  : " p-2  hover:bg-slate-900 text-slate-500 cursor-pointer"
              }`}
            >
              Side Hustle
            </div>
            <div
              onClick={() => action(2)}
              className={`${
                tabstate === 2
                  ? "border-l-2 border-l-lime-500  bg-slate-900 text-lime-500 cursor-pointer p-2"
                  : " p-2  hover:bg-slate-900 text-slate-500 cursor-pointer"
              }`}
            >
              Appen
            </div>
            <div
              onClick={() => action(3)}
              className={`${
                tabstate === 3
                  ? "border-l-2 border-l-lime-500  bg-slate-900 text-lime-500 cursor-pointer p-2"
                  : " p-2  hover:bg-slate-900 text-slate-500 cursor-pointer"
              }`}
            >
              ALX Africa 
            </div>
          </div>
          <div className={`${tabstate === 1 ? "text-white" : "hidden"}`}>
            <div>
              <h1 className="text-white font-medium">
                React Developer Intern @{" "}
                <span className="text-lime-500">SideHustle</span>
              </h1>
              <p className="text-md text-slate-400">
                August 2022 - October 2022
              </p>
              {works.map((work) => (
                <li className="text-white text-md">{work.title}</li>
              ))}
            </div>
          </div>

          <div className={`${tabstate === 2 ? "text-white" : "hidden"}`}>
            <div>
              <h1 className="text-white font-medium">
                Data Collector @ <span className="text-lime-500">Appen</span>
              </h1>
              <p className="text-md text-slate-400">June 2022 - Present</p>
              {Appen.map((work) => (
                <li className="text-white 2xl:text-lg">{work.title}</li>
              ))}
            </div>
          </div>

          <div className={`${tabstate === 3 ? "text-white" : "hidden"}`}>
            <div>
              <h1 className="text-white font-medium">
                Intern @ <span className="text-lime-500">ALX Africa</span>
              </h1>
              <p className="text-md text-slate-400">April 2022 - September 2022</p>
              {ALX.map((work) => (
                <li className="text-white text-md">{work.title}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
