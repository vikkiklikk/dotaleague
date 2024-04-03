'use client'
import HomeLayout from '../../components/HomeLayout';
import Carousel from '@/components/carousel';
import FilterBar from '@/components/filterBar';
import { useEffect, useState } from 'react';
import { Video } from '@prisma/client';

export default function Home () {
    const [allVideos, setAllVideos] = useState<Video[]>([]);

useEffect(() => {
    const fetchVideos = async () => {
        const res = await fetch('/api/videos');
        const data = await res.json();
        setAllVideos(data);
        console.log(data);
    };
    fetchVideos();
}, []);
    
    return (
        <HomeLayout>
            <div className="">
                <div className='fixed top-0 left-0 w-full z-10 bg-[#F5F5F5]'>
                    <div className="h-[188px] relative">
                        <h2>Here is the header, containing avatar image and name</h2>
                        <div className='absolute bottom-0 ml-7'>
                            <FilterBar/>
                        </div>
                    </div>
                </div>
                <div className=" pt-[188px]">
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Suggested for you</h2>
                        <Carousel videos={allVideos}/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Popular at the moment</h2>
                        <Carousel videos={allVideos}/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Games</h2>
                        <Carousel videos={allVideos}/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}