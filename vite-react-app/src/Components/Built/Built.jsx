const Built = () => {

  const works = [
    {
      title: 'Agrisage',
      Link: 'http://afrihack-project.vercel.app/',
      description: 'This is an AI that predict the harvest time for farmers',
      skills: 'REACTJS + Tailwindcss',
      github: 'https://github.com/Thintalltom/Afrihack-Project'
    },
    {
      title: 'E-shop',
      Link: 'https://ecom-umber-delta.vercel.app/',
      description: 'A simple web app for shoppers  ',
      skills: 'REACTJS + Tailwindcss + FlutterWave API + API',
      github: 'https://github.com/Thintalltom/E-commerce'
    },
    {
      title: 'eth.Aina',
      Link: 'http://aina-portfolio.vercel.app/',
      description: 'A simple portfolio for Aina ',
      skills: 'REACTJS + Tailwindcss + Sanity',
      github: 'https://github.com/Thintalltom/Laurette-portfolio'
    },
  ]
  return (
    <div
      name="work"
      className="mt-[50px] 2xl:mt-[-50px] xs:mt-[25px]  xs:text-xs w-full h-full  p-4 2xl:p-[100px] "
    >
      <div>
        
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 place-items-center xs:gap-[20px] lg:gap-[8rem]">
          {
            works.map((work, index) => (
              <div key={index} className="xs:w-[300px] lg:w-[300px] bg-zinc-900 h-[300px] p-[20px] cursor-pointer relative shadow-lg ">
              <div className="">
                <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200">{work.title}</p>
                <p className="leading-loose text-md font-bold mt-[20px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 ">{work.skills}</p>
                <p className="leading-loose mt-[20px] text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-blue-200 text-md">{work.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0  flex justify-between items-center p-[20px]">
              <a href={work.github} target="_blank" rel="noopener noreferrer"><button className="text-bold font-light">CODE</button></a>
                <a href={work.Link} target="_blank" rel="noopener noreferrer"><button className="text-bold font-light">LIVE</button></a>
              </div>
            </div>
            ))
          }

        </div>
       
      </div>


      
    </div>
  );
};

export default Built;
