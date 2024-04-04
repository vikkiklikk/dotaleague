// Assuming this is your VideoPage component within /app/video/[videoId]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Next.js 13 navigation hook
import HomeLayout from '@/components/HomeLayout';

type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export default function VideoPage() {
  const [video, setVideo] = useState<Video | null>(null);
  const pathname = usePathname();
  const videoId = pathname.split('/').pop(); // Assuming the last segment is the videoId
  console.log(videoId);

  useEffect(() => {
    if (videoId) {
      // Fetching from the API route that utilizes getVideoById server-side
      fetch(`/api/videos/${videoId}`)
        .then((res) => res.json())
        .then((data) => setVideo(data))
        .catch((error) => console.error('Failed to fetch video:', error));
    }
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video.url);

  return (
    <HomeLayout>
      <div>
        <h1>{video.title}</h1>
        <p>{video.description}</p>
        <iframe width="420" height="345" src={video.url} />
      </div>
    </HomeLayout>
  );
}
