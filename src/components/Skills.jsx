import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import AWS from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen flex items-center justify-center'>
      <div className='max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
          <p className='text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-red-800 text-center  text-gray-300'>Some Skills</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6'>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={GitHub} alt="GitHub icon" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={Node} alt="Node.js icon" />
            <p className='my-4'>Node.js</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-16 sm:w-20 mx-auto' src={AWS} alt="AWS icon" />
            <p className='my-4'>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
