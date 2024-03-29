import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen flex justify-center items-center px-4 py-8'>
      <form method='POST' action='https://getform.io/f/1785a9e0-97b5-419f-aac8-bce32400c34b' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-900 text-gray-300'>Contact</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-2 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10'></textarea>
        <button className='text-white border-2 px-6 py-3 my-3 mx-auto hover:bg-red-800 hover:border-red-900 flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
