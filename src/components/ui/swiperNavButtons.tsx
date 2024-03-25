import { useSwiper } from "swiper/react";
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi"

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="flex justify-between z-10">
            <button onClick={() => swiper.slidePrev()} className="h-6 w-6 bg-gray-200 opacity-70 rounded-full flex items-center justify-center">
                <HiOutlineChevronLeft className="text-black-text"/>
            </button>
            <button onClick={() => swiper.slideNext()} className="h-6 w-6 bg-gray-200 opacity-70 rounded-full flex items-center justify-center">
                <HiOutlineChevronRight className="text-black-text"/>
            </button>
        </div>
    );
};