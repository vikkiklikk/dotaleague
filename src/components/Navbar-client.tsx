'use client'
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Image from 'next/image';
import { useState } from 'react';
import {HiMenu} from "react-icons/hi"
import { FaAward, FaCalendarAlt, FaHome, FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/home'>
          <Image src="/logo.svg" alt="Logo" width={43} height={43}/>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiMenu size={30}/>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
          <Link href='/home'>
              <FaHome size={26}/>
          </Link>
          <Link href='/calendar'>
              <FaCalendarAlt size={24}/>
          </Link>
          <Link href='/search'>
              <FaSearch size={24}/>
          </Link>
          <Link href='/awards'>
              <FaAward size={24}/>
          </Link>
          <Link href='/profile'>
              <FaUser size={24}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
