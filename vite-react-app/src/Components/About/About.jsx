import Profile from "../../assets/profile.png";
const About = () => {
  return (
    <div>
      <div className="bg-zinc-950 h-[30rem]">
        <div className="flex xs:flex-col lg:flex-row sm:flex-col  md:flex-col items-center justify-between p-[50px]">
          <div>
            <p className="font-bold sm:text-[20px] xs:text-[40px] lg:text-[70px] bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300">
              Frontend <br /> Developer.
            </p>
            <p className="text-bold mt-[10px] xs:font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300">
              I like to craft frontend products that meets the needs of users.{" "}
            </p>
         
            <div className="flex flex-row gap-[30px] mt-[50px]">
              <p className="xs:text-[10px] lg:text-sm  leading-loose font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300 ">
                Highly skilled with solving problems using with code  and <br />
                working with API's.
              </p>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-blue-300 lg:text-xs xs:text-[10px] font-medium  leading-loose  ">
                With over a year experience <br />  building products for users.
              </p>
            </div>
          </div>
          <div className="mt-[6rem]  border-l-2 border-double  p-[10px] border-gradient-to-r from-slate-200 to-blue-300">
            <img src={Profile} className=" w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
