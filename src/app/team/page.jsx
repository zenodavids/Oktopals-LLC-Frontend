import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import teamData from '../../data/team';

const Team = () => {
  return (
    <>
      <Navbar />
      <div className='justify-items-center justify-center items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        {/* ......................................... */}
        <div className='mx-auto mb-10 lg:max-w-xl text-center'>
          <p className='inline-block px-3 py-px mb-4 text-md font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
            Meet the Team
          </p>
          {/* <p className='text-base text-gray-700 md:text-lg'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p> */}
        </div>
        {/* ......................................... */}
        <div className='grid gap-10 mx-auto lg:max-w-screen-lg grid-cols-2 mb-6'>
          <div className='flex flex-col items-center'>
            <Image
              className='object-cover w-20 h-20 mb-2 rounded-full shadow'
              src='/images/nancy.jpg'
              alt='Person'
              width={500}
              height={500}
            />
            <div className='flex flex-col items-center'>
              <p className='text-lg font-bold text-[#bba14f]'>Nancy Kahihu</p>
              <p className='text-sm text-gray-800'>CEO</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              className='object-cover w-20 h-20 mb-2 rounded-full shadow'
              src='/images/daniell.jpg'
              alt='Person'
              width={500}
              height={500}
            />
            <div className='flex flex-col items-center'>
              <p className='text-lg font-bold text-[#bba14f]'>Daniel Mbazu</p>
              <p className='text-sm text-gray-800'>CTO</p>
            </div>
          </div>
        </div>
        {/* ......................................... */}
        <div className='grid gap-10 mx-auto items-center justify-center text-center lg:max-w-screen-lg grid-cols-2 sm:grid-cols-3'>
          {teamData.map((member, index) => (
            <div
              className='flex flex-col justify-center justify-items-center items-center'
              key={index}
            >
              <Image
                className='object-cover w-20 h-20 mb-2 rounded-full shadow'
                src={member.imageSrc}
                alt='Person'
                width={500}
                height={500}
              />
              <div className='flex flex-col items-center'>
                <p className='text-lg font-bold text-[#bba14f]'>
                  {member.name}
                </p>
                <p className='text-sm text-gray-800'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
