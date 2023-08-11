/* eslint-disable react/no-unescaped-entities */
import { GiRobotGolem } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';

const Content = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#bba14f]'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
          <div className='flex items-center justify-center w-64 h-64 mb-4 rounded-full bg-black'>
            <FaChartLine className='text-[#bba14f] font-bold w-48 h-48' />
          </div>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Let Ovasite handle Your Data for You.
            </h2>
            <p className='text-base text-white md:text-lg'>
              Data holds the key to decisions, but with Ovasite, it's all about
              crafting superior decisions through insightful data. This
              cutting-edge web-app equips you with the capability to orchestrate
              diverse forms of data collection and management, all while gaining
              profound analytical insights that pave the way for well-informed
              choices.
            </p>
          </div>
          <div>
            Everything can be Customized too!
            <GiRobotGolem className='inline-block w-24 h-24 ml-2' />
          </div>
        </div>
        <div className='flex items-center justify-center -mx-4 lg:pl-8'>
          <div className='flex flex-col items-end px-3'>
            <img
              className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
              src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
            <img
              className='object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
              src='https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
          </div>
          <div className='px-3'>
            <img
              className='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
              src='https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
