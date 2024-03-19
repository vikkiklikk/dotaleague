'use client'
import Link from 'next/link';
import { FaHome, FaCalendarAlt, FaSearch, FaAward, FaUser } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    //here are the navigation items, I do this to be able to change color on the active link
    const navigationItems = [
        {href: '/home', icon: FaHome},
        {href: '/schedule', icon: FaCalendarAlt},
        {href: '/search', icon: FaSearch},
        {href: '/awards', icon: FaAward},
        {href: '/profile', icon: FaUser},
    ];

    //function to check if the route is active
    const isActive = (href: string) => pathname === href;

    return (
        <div className='m-0 bg-white w-full h-24 px-6 pt-3 bottom-0 fixed z-10'>
            <div className='flex justify-between items-center'>
                {navigationItems.map(({ href, icon: Icon }) => (
                    <Link href={href} key={href} >
                        <Icon size={24} className={`${isActive(href) ? 'text-button-blue' : 'text-black-text'}`}/>
                    </Link>    
                ))}
            </div>
        </div>
    );
};

export default Footer;