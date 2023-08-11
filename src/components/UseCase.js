/* eslint-disable react/no-unescaped-entities */
const Content = () => {
  return (
    <div className='bg-black text-white'>
      <div className='flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row'>
        <div className='mb-5 lg:w-1/3 lg:mb-0 lg:mr-20'>
          <h2 className='relative mb-4 font-sans text-3xl font-bold tracking-tight text-[#bba14f] sm:text-4xl sm:leading-none'>
            Ovasite isn't just a tool;
          </h2>
          <p className='mb-4 lg:mb-6'>
            it's a force that's embraced by a diverse array of entities:
          </p>
        </div>
        <div className='flex-grow pt-1'>
          <div className='flex items-center mb-3'>
            <span className='font-bold tracking-wide text-[#bba14f]'>
              Categories
            </span>
            <span className='ml-1'>
              {/* <svg
                className='w-5 h-5 mt-px text-deep-purple-accent-400'

                /> */}
            </span>
          </div>
          <div className='grid grid-cols-2 row-gap-6 sm:grid-cols-4'>
            <ul className='space-y-2'>
              <li>The Government</li>
              <li>Health Sectors</li>
            </ul>
            <ul className='space-y-2'>
              <li>Research institutions</li>
              <li>NGOs</li>
            </ul>
            <ul className='space-y-2'>
              <li>individual researchers</li>
              <li>Students</li>
            </ul>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='transition-colors duration-300 hover:text-deep-purple-accent-700'
                >
                  Infopreneur
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='transition-colors duration-300 hover:text-deep-purple-accent-700'
                >
                  Businesses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          className='object-cover w-full h-56 sm:h-96'
          src='https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          alt=''
        />
        <div className='absolute inset-0 bg-gray-900 bg-opacity-50' />
      </div>
    </div>
  );
};

export default Content;
