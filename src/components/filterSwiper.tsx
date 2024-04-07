'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FilterLabels from './ui/filterLabels';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Category } from '@prisma/client';

interface FilterSwiperProps {
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}

const FilterSwiper: React.FC<FilterSwiperProps> = ({onSelectCategory, selectedCategory}) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch('/../api/categories')
        .then(response => response.json())
        .then(data => {
            const {themeCategories} =data;
            setCategories(themeCategories);
        })
        .catch(console.error);
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={2}
            slidesPerView={3}
            className='filterSwiper'
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
        >
            {categories.map((category) => (
                <SwiperSlide key={category.id}>
                    <FilterLabels 
                        text={category.name} 
                        isSelected={category.name === selectedCategory} 
                        onClick={() => onSelectCategory(category.name)} 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FilterSwiper;