import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className='relative'>
      {/* <Image
        src='/images/headerImg.jpg'
        width={500}
        height={500}
        className='absolute inset-0 object-cover w-full h-full'
        alt=''
      /> */}
      <video
        className='absolute inset-0 object-cover w-full h-full'
        width='640'
        height='360'
        autoPlay
        loop
      >
        <source src='/videos/video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='relative bg-opacity-75 bg-[#000]'>
        <svg
          className='absolute inset-x-0 bottom-0 text-white'
          viewBox='0 0 1160 163'
        >
          <path
            fill='currentColor'
            d='M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z'
          />
        </svg>
        <div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full md:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#bba14f] sm:text-4xl sm:leading-none'>
                OkToPals LLC
              </h2>
              <p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg capitalize'>
                {' '}
                Your Journey to Software Excellence
              </p>
              <p
                aria-label=''
                className='inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700'
              >
                Innovative Software Solutions for Your Needs
              </p>
            </div>
            <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
              <div className='bg-white rounded shadow-2xl p-7 sm:p-10'>
                <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
                  WHY WE STAND OUT
                </h3>
                <p className='capitalize'>
                  {' '}
                  <span className='text-[#bba14f]'>
                    <strong>We are not your typical software company</strong>.
                  </span>
                  <br />
                  We are the dream team that turns ideas into reality!
                  <br />
                  Harnessing innovation and technology, we bring joy to software
                  development, making it an adventure you will cherish!
                  <br />
                  <br />
                  With boundless creativity and unwavering dedication, <br />
                  we redefine possibilities, pushing the boundaries of what is
                  achievable. <br />
                  <br />
                  Join us on this exciting journey and let us create something
                  extraordinary together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
