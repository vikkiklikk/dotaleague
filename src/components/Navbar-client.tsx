'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaAward, FaCalendarAlt, FaHome, FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {

  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/home'>
          <Image src="/logo.svg" alt="Logo" width={43} height={43}/>
        </Link>
        <div className='flex'>
          <Link href='/home'>
              <FaHome size={26}/>
              <h3>Home</h3>
          </Link>
          <Link href='/calendar'>
              <FaCalendarAlt size={24}/>
              <h3>Shcedule</h3>
          </Link>
          <Link href='/awards'>
              <FaAward size={24}/>
              <h3>Awards</h3>
          </Link>
          <Link href='/search'>
              <FaSearch size={24}/>
              <h3>Search</h3>
          </Link>
          <Link href='/profile'>
              <FaUser size={24}/>
              <h3>Profile name</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
