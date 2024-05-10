import Profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <div>
      <div className="bg-zinc-950 h-[30rem]">
        <div className="flex xs:flex-col lg:flex-row sm:flex-col  md:flex-col items-center justify-between p-[50px]">
          <div>
            <p className="font-bold sm:text-[20px] xs:text-[30px] lg:text-[70px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">
              Frontend <br /> Developer.
            </p>
            <p className="text-bold">
              I like to craft frontend products that meets the needs of users.{" "}
            </p>
            <a href="https://drive.google.com/file/d/12Y1zwPnIrlljrb_5JUfaRBCKYBI_KAwo/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="bg-zinc-800 p-[10px] mt-[20px] w-[200px] hover:bg-white hover:text-slate-800">Resume</button></a>  
            <div className="flex flex-row gap-[30px] mt-[50px]">
              <p className="text-xs leading-loose ">
                Highly skilled with solving problems using with code <br /> and
                working with data.
              </p>
              <p className="text-xs leading-loose">
                With over a year experience <br /> building products for users.
              </p>
            </div>
          </div>
          <div className="mt-[6rem]">
            <img src={Profile} className=" w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
