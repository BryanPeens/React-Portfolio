import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="flex items-center justify-center min-h-screen">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-left">
          <p className="text-red-800 text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2 sm:mt-4 lg:mt-6 xl:mt-8">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold leading-tight tracking-tight text-[#ccd6f6] mt-2 sm:mt-4 lg:mt-6 xl:mt-8">
            Bryan Peens
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#8892b0] mt-2 sm:mt-4 lg:mt-6 xl:mt-8">
            I'm a Full Stack Engineer.
          </h2>

          <p className="text-[#8892b0] text-base lg:text-lg xl:text-xl py-4 max-w-md">
            I'm a full-stack engineer with a passion for building and designing
            exceptional digital experiences.
          </p>
        </div>
        <div className="flex justify-start mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="text-white border-2 border-red-900 px-6 py-3 my-2 flex items-center hover:bg-red-900 hover:border-red-900 transition duration-300 ease-in-out">
              View Work
              <span className="ml-3">
                <HiArrowNarrowRight className="animate-bounce" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
