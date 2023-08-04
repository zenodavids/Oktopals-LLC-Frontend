import React from 'react';
import { GiScrollQuill } from 'react-icons/gi';

const StatementItem = ({ Icon, title, description }) => {
  return (
    <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-4xl'>
      <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-purple-700 group-hover:scale-x-100' />
      <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-[#bba14f] group-hover:scale-y-100' />
      <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-[#bba14f] group-hover:scale-x-100' />
      <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-[#bba14f] group-hover:scale-y-100' />
      <div className='relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row'>
        <div className='mb-6 mr-6 lg:mb-0'>
          <div className='flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32'>
            <Icon className='w-16 h-16 text-[#bba14f] lg:w-20 lg:h-20' />
          </div>
        </div>
        <div className='flex flex-col justify-between flex-grow'>
          <div>
            <h6 className='mb-6 font-semibold leading-5 text-xl text-center'>
              {title}
            </h6>
            <p className='mb-2 text-sm text-gray-900'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Statement = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#bba14f]'>
      <h1 className='text-center font-bold text-2xl sm:text-4xl pb-8 text-white'>
        Mission & Vision Statement
      </h1>
      <div className='grid gap-8 row-gap-5 md:grid-cols-2'>
        <StatementItem
          Icon={GiScrollQuill}
          title='Our Mission'
          description="Empowerment is the name of our game! We're on a mission to empower your visions through top-notch, user-friendly software solutions. Your success is our success!"
        />
        <StatementItem
          Icon={GiScrollQuill}
          title='Our Vision'
          description={
            'At OkToPals, we envision a world where technology intertwines seamlessly with your dreams, making them a beautiful reality - one byte at a time!'
          }
        />
      </div>
    </div>
  );
};

export default Statement;
