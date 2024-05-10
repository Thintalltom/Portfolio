import { Link } from "react-scroll";
const Info = () => {
  return (
    <div
      name="about"
      className="w-full h-full  text-white xs:mt-[50px]   lg:mt-[100px] p-[50px] 2xl:p-[100px]  "
    >

      <div className="bg-zinc-900 lg:h-[30rem] sm:h-[40rem] mt-[50px] ">
        <div className="lg:mt-[80px] xs:mt-[350px]  lg:h-[30rem] xs:h-[30rem] ">
          <p className="text-center xs:text-[20px] font-bold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 p-[20px]">
            Over the years,
          </p>
          <div className="flex justify-center items-center">

          <div className="lg:w-[50%] xs:w-[100%] xs:text-sm ">
          <p className="text-white text-center xs:text-[10px] leading-loose  bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 p-[20px]">
            I have developed websites for personal brands within Nigeria, 
            undertaken a frontend developer internship at SideHustle, and
            engaged in various hackathons. 
            Notably, I emerged victorious in the Afrihack competition, <br />
            collaborating with an AI developer to craft a solution that
            addresses <br /> specific challenges
          </p>
          </div>
          </div>
          
        
          <div className="flex items-center justify-center">
          <Link to="work" smooth={true}  >
            <button className="p-[20px]  border-[0.9px] mt-[90px] xs:w-[200px] lg:w-[300px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 font-bold">
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
