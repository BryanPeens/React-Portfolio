import React from 'react';

const About = () => {
  return (
    <div className='flex'>
      <div name='about' className='w-full min-h-screen text-gray-300'>
        <div className='max-w-screen-xl mx-auto px-4 flex flex-col justify-center h-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='md:text-right pb-4'>
              <p className='text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-red-800'>About</p>
            </div>
            <div></div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='md:text-right text-xl md:text-2xl lg:text-3xl font-bold'>
              <p>Hi, I'm Bryan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-base md:text-lg lg:text-xl'>
                I am passionate about building excellent software that improves the lives of those around me.
                I specialize in creating software for clients ranging from individuals and small businesses
                all the way to large enterprise corporations. What would you do if you had a software expert
                available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
