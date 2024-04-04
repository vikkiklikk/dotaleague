// pages/videos/[videoId].tsx

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import HomeLayout from '@/components/HomeLayout';

type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState<Video | null>(null);
  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`/api/videos/${id}`)
        .then((res) => res.json())
        .then(setVideo)
        .catch(console.error);
    }
  }, [id]);

  if (!video) return <div>Loading...</div>; // or handle loading state differently

  return (
    <HomeLayout>
      <iframe src={video.url} />
      <h1>{video.title}</h1>
      <p>{video.description}</p>
    </HomeLayout>
  );
};

export default VideoPage;
