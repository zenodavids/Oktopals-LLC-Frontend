/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OvasiteHeader from '@/components/OvasiteHeader';
import UseCase from '@/components/UseCase';
import Benefits from '@/components/Benefits';

const OvaSite = () => {
  return (
    <>
      <Navbar />
      <div className='relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0'>
        <div className='inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0'>
          <svg
            className='absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block'
            viewBox='0 0 100 100'
            fill='currentColor'
            preserveAspectRatio='none slice'
          >
            <path d='M50 0H100L50 100H0L50 0Z' />
          </svg>
          <Image
            className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full'
            src='/images/chart.png'
            alt='chart'
            width={500}
            height={500}
          />
        </div>
        <div className='relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl'>
          <div className='mb-16 lg:my-40 lg:max-w-lg lg:pr-5'>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
              Coming Soon...
            </p>
            <h2 className='mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              OvaSite
            </h2>
            <p className='pr-5 mb-5 text-base text-gray-700 md:text-lg'>
              A visionary web-app that is currently a captivating work in
              progress. Ovasite is not just a tool; it's your partner in
              harnessing the power of insightful data, seamlessly merging
              innovation with professionalism
            </p>
            <div className='flex items-center'>
              <a
                href='#'
                className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-2xl bg-[#bba14f] hover:bg-black focus:shadow-outline focus:outline-none cursor-none pointer-events-none'
              >
                Get started
              </a>
              <a
                href='/'
                aria-label=''
                className='inline-flex items-center font-semibold text-[#bba14f] transition-colors duration-200 hover:text-gray-700'
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <OvasiteHeader />
      <Benefits />
      <UseCase />
      <Footer />
    </>
  );
};

export default OvaSite;
