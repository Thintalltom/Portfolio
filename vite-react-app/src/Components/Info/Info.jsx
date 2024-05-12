import { Link } from "react-scroll";
const Info = () => {
  return (
    <div
      name="about"
      className="w-full h-full  text-white xs:mt-[20px]   lg:mt-[100px] p-[50px] 2xl:p-[100px]  "
    >

      <div className=" lg:h-[30rem] sm:h-[40rem] lg:mt-[50px]   xs:mt-[-20px]">
        <div className="lg:mt-[80px] xs:mt-[350px]  lg:h-[30rem] xs:h-[30rem] ">
          <p className="text-center xs:text-[30px] font-bold lg:text-[40px] text-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300 p-[20px]">
            Over the years,
          </p>
          <div className="flex justify-center items-center">

          <div className="lg:w-[50%] xs:w-[100%] xs:text-sm ">
          <p className="lg:font-thin text-center xs:font-medium xs:text-[14px] lg:text-[16px] leading-loose  p-[20px]  bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-blue-200 ">
            I have developed websites for personal brands within Nigeria, 
            undertaken a frontend developer internship at SideHustle, and
            engaged in various hackathons. 
            Notably, I emerged victorious in the Afrihack competition, <br />
            collaborating with an AI developer to craft a solution that
            addresses <br /> specific challenges
          </p>
          </div>
          </div>
          
        
          <div className="flex items-center justify-center xs:mt-[-30px]">
          <Link to="work" smooth={true}  >
            <button className="p-[20px] hover:bg-white hover:text-slate-800 border-[0.9px] mt-[90px] xs:w-[200px] lg:w-[300px]  font-bold">
              SEE MY WORKS{" "}
            </button>
            </Link>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Info;
