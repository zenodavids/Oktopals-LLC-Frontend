'use client';

// Importing the necessary dependencies from React and Next.js
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

// This component renders individual items in the navigation bar
const NavBarItem = ({ title, classprops, link }) => (
  // Creating an <li> element with a Link component wrapped around the item title

  <li
    // Setting the class name of the <li> element with dynamic classes
    className={`font-medium tracking-wide text-[#777] transition-colors duration-200 hover:text-deep-blue-accent-400 cursor-pointer ${classprops}`}
  >
    <Link href={`${link}`}>{title}</Link>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class='bg-transparent text-[#111]'>
      <div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative flex items-center justify-between'>
          <Link
            href='/'
            aria-label='Company'
            title='Company'
            class='inline-flex items-center'
          >
            <span class='ml-2 text-xl font-bold tracking-wide text-[#bba14f] uppercase'>
              <strong>OkTo</strong>
              <span className='inline-block text-[#3f3f3f]'>
                <em>Pals</em>
              </span>
            </span>
          </Link>

          <ul className='flex items-center space-x-8 lg:flex'>
            <li>
              <p
                className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none cursor-pointer bg-[#bba14f] text-white
                `}

                // onClick={props.walletConnected() ? null : props.connect}
              >
                Contact us
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
