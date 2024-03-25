'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "./card";

const Carousel = () => {
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
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
        </>    
            
        
    );
}

export default Carousel;
