import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const NoteWorthy = () => {
  return (
    <div
      name="contact"
      className=" 2xl:p-[100px] text-center mt-9 xs:text-xs w-full h-full mt-[200px]  p-4 bg-zinc-950 text-white "
    >
      <div>
        <p className="text-center mt-[20px] text-white text-xl  font-medium ">
          Whats next?
        </p>
        <p className=" text-center font-thin mt-9 mb-4 text-lg">
          Get In Touch
        </p>
        <p className=" font-thin text-sm">
          Although I’m currently looking for any new opportunities, my inbox is
          always open. <br /> Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <h5 className="font-thin text-zinc-950 mt-4  text-lg">Contact me </h5>
        <form
          action="https://getform.io/f/14010235-323c-4574-afe5-36dca9a66011"
          className="mt-4"
          method="POST"
        >
          <input
            type="text"
            placeholder="Name"
            className="p-4 2xl:w-[500px] text-black text-md font-md xs:w-[300px] sm:w-[400px] h-[20px] xl:w-[500px] rounded border-zinc-500 border-[0.5px] "
            name="name"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Email"
            className="p-4 mt-4 2xl:w-[500px] xs:w-[300px] sm:w-[400px] xl:w-[500px] h-[20px] rounded  border-zinc-950 bg-transaparent  border-[0.5px] "
            name="email"
          />{" "}
          <br />
          <textarea
            className="p-4 mt-4 2xl:w-[500px] 2xl:h-[200px] xs:w-[300px] xs:h-[100px] sm:w-[400px] xl:w-[500px] rounded  border-zinc-500 border-[0.5px]  "
            name="message"
            placeholder="Enter feedback...."
          ></textarea>{" "}
          <br />
          <button className=" shadow-lg p-2  bg-zinc-950 text-white mt-4  border-zinc-500 border-[0.5px] lg:w-[200px]  rounded text-md 2xl:w-[100px] xs:w-[70px]">
            Send
          </button>
        </form>

        <div className="hidden lg:flex  lg:justify-center lg:mt-9 lg:gap-9 sm:flex mt-[20px]  xs:text-xs sm:justify-center sm:mt-9 sm:gap-9 md:flex  md:justify-center md:mt-9 md:gap-9 xs:flex  xs:justify-center xs:mt-9 xs:gap-9 2xl:hidden  lg:block md:block sm:block xs:block ">
          <a href="https://twitter.com/tomideofGod">
            <BsTwitter className="text-2xl text-white cursor-pointer  xs:text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/adeyanju-ayotomide-a630551b9/">
            <BsLinkedin className="text-2xl 2xl:mt-[20px]  text-white cursor-pointer  xs:text-2xl" />
          </a>
          <a href="https://github.com/Thintalltom">
            <BsGithub className="text-2xl text-white 2xl:mt-[20px] cursor-pointer  xs:text-2xl" />
          </a>
          <a href="">
            {" "}
            <BsInstagram className="text-2xl text-white 2xl:mt-[20px]  cursor-pointer  xs:text-2xl" />
          </a>
        </div>
        <div className="mt-[70px]">
          <p className="text-white cursor-pointer font-thin">Tomide2024</p>
        </div>
      </div>
    </div>
  );
};

export default NoteWorthy;
