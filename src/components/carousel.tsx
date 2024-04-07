'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "./card";
import { Video } from '@prisma/client';
import { Suspense } from 'react';
import { CardSkeleton } from './ui/skeletons';

interface CarouselProps {
    videos: Video[];
}

const Carousel: React.FC<CarouselProps> = ({videos}) => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={-28}
                slidesPerView={2}
                slidesOffsetBefore={28}
                slidesOffsetAfter={28}
                navigation={true}
                //pagination={{ clickable: true }}
            >          
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <Suspense fallback={<CardSkeleton/>}>
                            <Card video={video}/>
                        </Suspense>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>    
    );
}

export default Carousel;
