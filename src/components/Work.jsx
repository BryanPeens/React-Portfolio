import React from "react";
import banana from "../assets/Banana.png";
import threeShirt from "../assets/threeShirt.png";
import summarizer from "../assets/summarizer.png";
import workImg1 from "../assets/workImg1.png";
import silky from "../assets/silky.png";
import spacetagram from "../assets/spacetagram.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full min-h-screen text-gray-300 py-20 md:py-40"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-red-800 text-center'>Some Projects</p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full" style={{ backgroundImage: `url(${banana})` }}>
            {/* Hover Effects */}
            <div className="overlay opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Banana Creative
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://dall-e-creator-client.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BryanPeens/dalle-e-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full" style={{ backgroundImage: `url(${threeShirt})` }}>
            {/* Hover Effects */}
            <div className="overlay opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Three Shirt Designer
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://threejs-ai-client.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BryanPeens/threejs_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full" style={{ backgroundImage: `url(${summarizer})` }}>
            {/* Hover Effects */}
            <div className="overlay opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                AI Article Summarizer
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ornate-selkie-56d420.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BryanPeens/Ai_Summarizer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full" style={{ backgroundImage: `url(${workImg1})` }}>
            {/* Hover Effects */}
            <div className="overlay opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Weather App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bryanpeens.github.io/weather-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BryanPeens/weather-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full" style={{ backgroundImage: `url(${silky})` }}>
            {/* Hover Effects */}
            <div className="overlay opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bryanpeens.github.io/Silky-Web-Design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BryanPeens/Silky-Web-Design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full" style={{ backgroundImage: `url(${spacetagram})` }}>
            {/* Hover Effects */}
            <div className="overlay opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Polaris Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bryanpeens.github.io/spacetagram/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BryanPeens/spacetagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
