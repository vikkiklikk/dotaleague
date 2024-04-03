
import HomeLayout from '@/components/HomeLayout';
import { GetServerSideProps } from 'next';
import React from 'react';

// Assuming you have a type for your video
type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
};

// Props type
type VideoPageProps = {
  video: Video;
};

const VideoPage: React.FC<VideoPageProps> = ({ video }) => {
  // Here you can layout your page with the video data
  return (
    <HomeLayout>
        <div>
            <h1>{video.title}</h1>
            <p>{video.description}</p>
            <video src={video.url} controls />
        </div>
    </HomeLayout>    
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const videoId = context.params;

  // Fetch the video data based on videoId
  // Replace this URL with your actual API endpoint
  const res = await fetch(`https://api/videos/${videoId}`);
  const video: Video = await res.json();

  return {
    props: {
      video,
    },
  };
};

export default VideoPage;
