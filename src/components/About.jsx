import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full lg:h-screen md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is Nwaka Isdore, i'm a hard working web developer with passion for creating elegant solutions in the least amount of time. i have developed an ecommerce webapp, real-estate website etc. Passionate about software architecture.
        </p>

        <br />

        
      </div>
    </div>
  );
};

export default About;
