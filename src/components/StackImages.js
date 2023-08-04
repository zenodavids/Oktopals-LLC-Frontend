import React from 'react';
import Image from 'next/image';

const ImageStack = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* The back image */}
      <div className='relative transform translate-x-[-10%]'>
        <Image
          src='/images/img-1.jpg'
          alt='Back Image'
          width={700}
          height={700}
          className='rounded-lg shadow-md'
        />
      </div>
      {/* The front image */}
      <div className='relative z-10'>
        <Image
          src='/images/img-2.jpg'
          alt='Front Image'
          width={500}
          height={500}
          className='rounded-lg shadow-md'
        />
      </div>
    </div>
  );
};

export default ImageStack;
