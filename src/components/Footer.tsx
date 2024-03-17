import Link from 'next/link';
import { FaHome, FaCalendarAlt, FaSearch, FaAward, FaUser } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='m-0 bg-gray-300 w-full h-24 px-6 pt-3 bottom-0 fixed z-10'>
            <div className='flex justify-between items-center'>
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
    );
};

export default Footer;