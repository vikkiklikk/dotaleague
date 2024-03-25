'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FilterLabels from './ui/filterLabels';
import { Navigation, Pagination } from 'swiper/modules';

const FilterSwiper = () => {

    const labels = [
        {text: "All"},
        {text: "Games"},
        {text: "Outdoor"},
        {text: "Math"},
        {text: "Sports"},
        {text: "Food"},
        {text: "Science"},
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={2}
            slidesPerView={3}
            className='filterSwiper'
            slidesOffsetBefore={0}
                slidesOffsetAfter={0}
            >
                {labels.map((label, index) => (
                    <SwiperSlide key={index}>
                        <FilterLabels text={label.text} />
                
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default FilterSwiper;