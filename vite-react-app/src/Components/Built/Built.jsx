import agrisage from "../../assets/agrisage.jpg";
import aina from "../../assets/aina.jpg";
import Project from "../../assets/project1.jpg";


const Built = () => {

  return (
    <div
      name="work"
      className="mt-[50px] 2xl:mt-[-50px]  xs:text-xs w-full h-full  p-4 2xl:p-[100px] "
    >
      <div>
        <p className=" text-center  text-xl  font-medium text-zinc-950">
          Recent Projects
        </p>
       
      </div>


      <div className="mt-4  mt-[30px] ">
        <div className="flex flex-col justify-around  gap-[40px] ">
          <div className="lg:flex lg:flex-row xs:flex-col sm:flex-col md:flex-row justify-center  p-4 gap-[20px] ">
        <a  href="http://ecom-umber-delta.vercel.app/">  <img
              src={Project}
              className=" rounded-[10px] lg:w-[400px] h-[300px] sm:w-[300px] xs:w-[300px] cursor-pointer "
            />
            </a>
            <div className="w-[400px]">
              <p className="text-zinc-950 text-sm font-medium">Project 1</p>
              <h1 className="text-zinc-950 text-sm font-medium">
                E-Shop
              </h1>

              <p className="text-zinc-950 font-light text-sm">
                Created a web application that allows users to be able to buy
                products utilizing an external api called FAKESTORE Api, which
                allows users to order for items and pay for the items ordered
                for . Also incorporated the use of FLUTTERWAVE API as the
                payment gateway
              </p>
              <p className="text-zinc-950  text-sm">Reactjs | TailwindCss | FlutterWave Api | FakeStore Api </p>
            </div>
          </div>

          <div className="lg:flex lg:flex-row-reverse xs:flex-col sm:flex-col md:flex-row justify-center  p-4 gap-[20px] ">
            <a href="http://afrihack-project.vercel.app/">
            <img
              src={agrisage}
              className=" rounded-[10px] lg:w-[400px] h-[300px] sm:w-[300px] xs:w-[300px] cursor-pointer "
            />
            </a>
           
            <div className="w-[400px]">
              <p className="text-zinc-950 text-sm font-medium">Project 2</p>
              <h1 className="text-zinc-950 text-sm font-medium">
                Agrisage
              </h1>

              <p className="text-zinc-950 font-light text-sm">
                Built a AI with a team of developer and designer to help 
                farmers predict the best time to harvest crops by integrating an externally
                 trained dataset to solve a real world problem         
                
              </p>
              <p className="text-zinc-950  text-sm">Reactjs | TailwindCss | External Api </p>
            </div>
          </div>

          <div className="lg:flex lg:flex-row xs:flex-col sm:flex-col md:flex-row justify-center  p-4 gap-[20px] ">
          <a href="https://aina-portfolio.vercel.app/">
            <img
              src={aina}
              className=" rounded-[10px] lg:w-[400px] h-[300px] sm:w-[300px] xs:w-[300px] "
            />
            </a>
            <div className="w-[400px]">
              <p className="text-zinc-950 text-sm font-medium">Project 3</p>
              <h1 className="text-zinc-950 text-sm font-medium ">
                Aina Portfolio
              </h1>

              <p className="text-zinc-950 font-light text-sm">
                Built a personal portfolio for a writer and his publishing organisation
              </p>
              <p className="text-zinc-950  text-sm">Reactjs | TailwindCss | Framermotion </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
