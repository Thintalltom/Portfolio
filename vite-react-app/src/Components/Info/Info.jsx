import { Link } from "react-scroll";
const Info = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-zinc-950 text-white xs:mt-[200px]   lg:mt-[100px] p-[50px] 2xl:p-[100px]  "
    >
      <div className="flex lg:flex-row md:flex-col xs:flex-col sm:flex-col xs:gap-[80px] lg:gap-[50px] items-center justify-between">
        <div className="xs:mt-[180px]">
          <p className="font-bold xs:text-[40px]  lg:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
            Data
          </p>
          <p className="text-sm leading-loose font-light">
            I am passionate about working with data  <br /> in the
            meticulous craft of creating and manipulating spreadsheets.
          </p>
        </div>
        <div>
          <p className="font-bold xs:text-[40px] lg:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
            Engineering
          </p>
          <p className="text-sm leading-loose font-light">
            I enjoy writing code seemlessly to solve problems in real life
            scenerio <br />
            using one of my greatest superpower (JavaScript) - <br /> i am keen
            on sustainability of code and performance{" "}
          </p>
        </div>
      </div>

      <div className="bg-white h-[30rem] lg:mt-[50px] xs:mt-[200px] ">
        <div className="mt-[80px] bg-zinc-900 xs:gap-[50px] xs:h-[50rem] lg:h-[30rem] flex lg:flex-row sm:flex-col xs:flex-col justify-around justify-center items-center text-zinc-950">
          <div>
            <p className="font-bold xs:text-[20px] lg:text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
              I, build & <br /> provide solution
            </p>
            <p className="font-bold mt-[20px] text-md bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
              open source, <br /> hackerathon, web app, <br /> and experimentals
            </p>
            <Link to="work" smooth={true}  >
            <button className="p-[20px]  border-[0.9px] mt-[90px] xs:w-[200px] lg:w-[300px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 font-bold">
              SEE MY WORKS{" "}
            </button>
            </Link>
          </div>

          <div>
            <p className="font-bold xs:text-[20px] lg:text-[40px]  bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
              I, Analyse & <br /> provide result
            </p>
            <p className="font-bold mt-[20px] text-md bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
              Ms. Excel <br /> Tableau <br /> and SQL
            </p>
            <button className="p-[20px]  border-[0.9px] mt-[90px] xs:w-[200px] lg:w-[300px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 font-bold">
              SEE MY WORKS{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 lg:h-[30rem] sm:h-[40rem] mt-[50px] ">
        <div className="lg:mt-[80px] xs:mt-[350px]  lg:h-[30rem] xs:h-[50rem] ">
          <p className="text-center font-bold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 p-[40px]">
            Over the years,
          </p>
          <p className="text-white text-center leading-loose bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 p-[40px]">
            I have developed websites for personal brands within Nigeria, 
            undertaken a frontend developer internship at SideHustle, and
            engaged in various hackathons. 
            Notably, I emerged victorious in the Afrihack competition, <br />
            collaborating with an AI developer to craft a solution that
            addresses <br /> specific challenges
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
