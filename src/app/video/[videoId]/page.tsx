'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HomeLayout from '@/components/HomeLayout';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export default function VideoPage() {
  const [video, setVideo] = useState<Video | null>(null);
  const pathname = usePathname();
  const videoId = pathname.split('/').pop(); 
  const router = useRouter();

  useEffect(() => {
    if (videoId) {
      fetch(`/api/videos/${videoId}`)
        .then((res) => res.json())
        .then((data) => setVideo(data))
        .catch((error) => console.error('Failed to fetch video:', error));
    }
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <HomeLayout>
      <div className='pt-7 pl-4'>
      <FaChevronLeft size={24} onClick={handleBackClick} />
      </div>
      <div className="flex flex-col items-center px-7 pt-10">    
        <div className="flex flex-col items-center"> 
          <div className='rounded-2xl overflow-hidden inline-block'>
            <iframe className='rounded-2xl' width="350" height="206" src={video.url} />
          </div>

          <h1 className='text-xl font-semibold w-full pt-8'>{video.title}</h1> 
          <p className='text-md w-full pt-5'>{video.description}</p> 
        </div>
      </div>
    </HomeLayout>
  );
}
