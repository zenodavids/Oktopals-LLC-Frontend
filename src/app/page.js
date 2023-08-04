import Image from 'next/image';
import Navbar from '../components/Navbar';
// import Header from '../components/Header';
import Statements from '../components/Statements';
import HeroBanner from '../components/HeroBanner';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
/* *
 * Colors
 * ? Gold - [#bba14f]
 * ? Dark - #3f3f3f
 * ? white - #fff
 */
export default function Home() {
  return (
    <div className='text-[#664c4c]'>
      <Navbar />
      <div className='mb-8'>
        <HeroBanner />
      </div>
      <div className='py-6'>
        <h1 className='text-center font-bold text-2xl sm:text-4xl'>
          Why Embark on This Quest with Us?
        </h1>
        <Features />
      </div>
      <div className='bg-[#000]'>
        <Statements />
        {/* <Header /> */}
      </div>
      <Footer />
      {/* ============================================ */}
      {/* ini's Code */}
      {/* Testimonies
        Contact us
        Footer */}
    </div>
  );
}
