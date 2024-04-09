'use client'
import HomeLayout from '../../components/HomeLayout';
import Carousel from '@/components/carousel';
import FilterBar from '@/components/filterBar';
import { useEffect, useState } from 'react';
//import { Video } from '@prisma/client';
import { getVideos } from '@/lib/data';

interface Category {
    id: number;
    name: string;
    type: string;
};
interface Video {
    id: number;
    title: string;
    description: string;
    url: string;
    createdAt: Date;
    thumbnailUrl: string | null;
    categories: Category[];
}

export default function Home () {
    const [allVideos, setAllVideos] = useState<Video[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

    useEffect(() => {
        async function fetchVideos () {
            const res = await fetch('/api/videos') ;
            const data = await res.json();
            setAllVideos(data);
        };
        fetchVideos();
    }, []);

    // Function to handle category selection, passed to FilterLabels
    const handleCategorySelect = (category: string) => {
        setSelectedCategory(prevCategory => prevCategory === category ? 'ALL': category);
    };

    // Filtered videos based on selected category
    const filteredVideos = allVideos.filter(video => {
        if (selectedCategory === 'ALL') return true;
        // check if any of the videos categories match the selectedCategory
        return video.categories.some(category => category.name === selectedCategory);
    });
    
    return (
        <HomeLayout>
            <div className="">
                <div className='fixed top-0 left-0 w-full z-10 bg-[#F5F5F5]'>
                    <div className="h-[160px] relative flex">
                        <div className='pt-7 pl-7 flex'>
                            <img src="/Hamster.svg" alt="Profile image" className='h-[50px] w-[50px]' />
                            <h2 className='text-base font-semibold pt-3 pl-3'>Björk</h2>
                        </div>
                        
                        
                        <div className='absolute bottom-0 ml-7'>
                            <FilterBar onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory}/>
                        </div>
                    </div>
                </div>
                <div className=" pt-[188px]">
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7 text-base font-semibold'>Recommended for you</h2>
                        <Carousel videos={filteredVideos}/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7 text-base font-semibold'>Popular at the moment</h2>
                        <Carousel videos={filteredVideos}/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7 text-base font-semibold'>Games</h2>
                        <Carousel videos={filteredVideos}/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}