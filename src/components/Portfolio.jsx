import React from "react";


import p1 from '../assets/portfolio/real-estate.PNG';
import p2 from '../assets/portfolio/real-estate2.PNG';
import p3 from '../assets/portfolio/electricity.PNG';
import p4 from '../assets/portfolio/electricity2.PNG';
import p5 from '../assets/portfolio/todo.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      site: "Real Estate",
      src: p1,
    },
    {
      id: 2,
      site: "Real Estate",
      src: p2,
    },
    {
      id: 3,
      site: "Billing System",
      src: p3,
    },
    {
      id: 4,
      site: "Billing System",
      src: p4,
    },
    {
      id: 5,
      site: "Todo List",
      src: p5,
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-auto md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, site, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                />
                <h4 className="p-2">{site}</h4>
              <div className="flex items-center justify-center hidden">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Site
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
