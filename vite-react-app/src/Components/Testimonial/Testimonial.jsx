import React from "react";
import "./testimonial.css";
import Slider from 'react-slick';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  const testimonial = [
    {
      name: "Lola",
      word: "We have worked together he is a great developer",
      image:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aina",
      word: "I am a certified writer and publisher. Tomide worked on my personal portfolio and it is fantastic",
      image:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shadrack",
      word: "I am a Data Scientist. Tomide worked with me on a personal project and it is fantastic",
      image:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="mt-[30px]">
      <p className="text-center font-bold text-2xl">Testimonial</p>
      <Slider {...settings}>
      <div className="flex items-center justify-center gap-[20px] ">
      
        {testimonial.map((test) => (
          <div
            className=" w-[300px] mt-[50px] bg-slate-500  flex flex-col p-[20px] rounded-[10px] h-[300px]"
            key={test.name}
          >
            <img src={test.image} className=" mx-auto w-[200px] clipImg" />
            <p className="text-center">{test.name}</p>
            <p className="text-center">{test.word}</p>
          </div>
        ))}
       
      </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
