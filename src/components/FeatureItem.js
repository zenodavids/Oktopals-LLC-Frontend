const FeatureItem = ({ Icon, title, description }) => {
  return (
    <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-2xl hover:scale-105 group hover:shadow-4xl'>
      <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-black group-hover:scale-x-100' />
      <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-black group-hover:scale-y-100' />
      <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-black group-hover:scale-x-100' />
      <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-black group-hover:scale-y-100' />
      <div className='relative p-5 bg-[#bba14f] rounded-sm'>
        <div className='flex flex-col mb-2 lg:items-center lg:flex-row'>
          <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0'>
            <Icon className='w-8 h-8 text-[#bba14f]' />
          </div>
          <h6 className='font-semibold leading-5'>{title}</h6>
        </div>
        <p className='mb-2 text-sm text-white'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
