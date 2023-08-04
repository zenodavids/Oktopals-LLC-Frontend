import FeatureItem from './FeatureItem';
import { BsGlobeAmericas, BsTools } from 'react-icons/bs';
import { TbBulbFilled } from 'react-icons/tb';

const Features = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 lg:grid-cols-3'>
        <FeatureItem
          Icon={TbBulbFilled}
          title='Innovative Solutions'
          description='Our passion for innovation drives us to create groundbreaking software that revolutionizes your world.'
        />
        <FeatureItem
          Icon={BsGlobeAmericas}
          title='Global Footprint'
          description='From the sunny beaches of Florida to all our clients worldwide, our impact and creativity knows no bounds!'
        />
        <FeatureItem
          Icon={BsTools}
          title='Tailored for You'
          description='Your desires and needs are at the heart of everything we craft - bespoke solutions just for you!'
        />
      </div>
    </div>
  );
};

export default Features;
