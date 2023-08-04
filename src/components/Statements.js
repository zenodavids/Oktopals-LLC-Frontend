/* eslint-disable react/no-unescaped-entities */
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BiMailSend } from 'react-icons/bi';

const Pricing = () => {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute hidden w-full lg:block h-96' />
      <div class='max-w-xl my-10 md:mx-auto sm:text-center pt-12 lg:max-w-2xl md:my-12'>
        <h2 class='max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#bba14f] sm:text-4xl md:mx-auto'>
          Mission & Vision Statement
        </h2>
        {/* <p class='text-base text-[#bba14f] md:text-lg'>
          Get the best value unparalleled freelancing resources at unbeatable
          prices.
          <br />
          Whether you're starting from scratch or looking to take your career to
          new heights, we've got you covered!
        </p> */}
      </div>
      <div className='relative px-4 mt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 pb-12'>
        {/* ====================================================== */}
        <div className='grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto'>
          {/* ============================================= */}
          <div>
            <div className='p-8 rounded bg-[#bba14f]'>
              <div className='mb-4 text-center'>
                <p className='text-xl font-medium tracking-wide text-white'>
                  OkToPals LLC's
                </p>
                <div className='flex items-center justify-center'>
                  <p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
                    Mission
                  </p>
                </div>
              </div>
              <ul className='mb-8 space-y-2'>
                <li className='flex items-center'>
                  <div className='mr-3'>
                    <IoMdCheckmarkCircleOutline className='w-4 h-4 text-black' />
                  </div>
                  <p className='font-medium text-black'>
                    Empowerment is the name of our game! We're on a mission to
                    empower your visions through top-notch, user-friendly
                    software solutions. Your success is our success!
                  </p>
                </li>
              </ul>
            </div>
            <div className='w-11/12 h-2 mx-auto bg-[#bba14f] rounded-b opacity-75' />
            <div className='w-10/12 h-2 mx-auto bg-[#bba14f] rounded-b opacity-50' />
            <div className='w-9/12 h-2 mx-auto bg-[#bba14f] rounded-b opacity-25' />
          </div>
          {/* ============================================= */}

          <div>
            <div className='p-8 bg-[#bba14f] rounded'>
              <div className='mb-4 text-center'>
                <p className='text-xl font-medium tracking-wide text-white'>
                  OkToPals LLC's
                </p>
                <div className='flex items-center justify-center'>
                  <p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
                    Vision
                  </p>
                </div>
              </div>
              <ul className='mb-8 space-y-2'>
                <li className='flex items-center'>
                  <div className='mr-3'>
                    <IoMdCheckmarkCircleOutline className='w-4 h-4 text-black' />
                  </div>
                  <p className='font-medium text-black'>
                    At OkToPals, we envision a world where technology
                    intertwines seamlessly with your dreams, making them a
                    beautiful reality - one byte at a time!
                  </p>
                </li>{' '}
              </ul>
            </div>
            <div className='w-11/12 h-2 mx-auto bg-[#bba14f] rounded-b opacity-75' />
            <div className='w-10/12 h-2 mx-auto bg-[#bba14f] rounded-b opacity-50' />
            <div className='w-9/12 h-2 mx-auto bg-[#bba14f] rounded-b opacity-25' />
          </div>
        </div>
        {/* ================================================ */}
        <div className='items-center'>
          {' '}
          {/* <p className='text-center w-full text-xl font-semibold leading-none   sm:text-2xl md:mx-auto pt-8'>
            Limited Time Mega Deal: <br />
            <span className='font-bold uppercase text-6xl sm:text-4xl'>
              Get Both Live Classes for Just ₦5,000!
            </span>
            <br />
            <br />
            Grab this limited-time opportunity! Access two premium Live Classes
            at an incredibly affordable price. Act fast and secure your spot
            now!
            <br />
            <br />
            <br />
          </p> */}
          {/* =========================================================== */}
          {/* <a href='https://flutterwave.com/pay/techniches'>
            <div className='b relative mx-auto h-16 w-64 flex justify-center items-center'>
              <div className='i h-16 w-64 bg-black items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'></div>
              <p className='text-center  text-white font-semibold z-10 text-2xl pointer-events-none'>
                Get 80% Off!
              </p>
              <span className='absolute flex h-10 w-10 top-0 right-0 transform translate-x-2.5 -translate-y-2.5'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-black  shadow-2xl'></span>
                <span className='absolute inline-flex rounded-full h-10 w-10 bg-gradient-to-br from-yellow-400 to-red-600 shadow-2xl'></span>
              </span>
            </div>
          </a> */}
          {/* =========================================================== */}
        </div>

        {/* ================================================ */}
        <a
          href='mailto:contact@oktopals.com'
          title='whatsapp'
          className='fixed z-50 bottom-10 right-8 bg-[#bba14f]  w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-black hover:text-white text-4xl hover:bg-black border-black border-dashed hover:drop-shadow-2xl hover:animate-bounce duration-300'
        >
          <BiMailSend />
        </a>
        {/* ================================================ */}
      </div>
    </div>
  );
};

export default Pricing;
