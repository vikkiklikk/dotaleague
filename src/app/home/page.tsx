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
            console.log(data);
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
                    <div className="h-[188px] relative">
                        <h2>Here is the header, containing avatar image and name</h2>
                        <div className='absolute bottom-0 ml-7'>
                            <FilterBar onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory}/>
                        </div>
                    </div>
                </div>
                <div className=" pt-[188px]">
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Suggested for you</h2>
                        <Carousel videos={filteredVideos}/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Popular at the moment</h2>
                        <Carousel videos={filteredVideos}/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Games</h2>
                        <Carousel videos={filteredVideos}/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}