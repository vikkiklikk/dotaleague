import HomeLayout from '../../components/HomeLayout';
import Card from '@/components/card';
import Carousel from '@/components/carousel';

export default function Home () {
    
    return (
        <HomeLayout>
            <div className="bg-red-100">
                <div className="h-[188px] bg-blue-300">
                    <h2>Here is the header, containing avatar image and name, underneith is the filtered choices</h2>
                </div>
                <div className="h-[560px]">
                    <h1 className="text-4xl">This is the homepage</h1>
                    <h3>Here will be few carousels, and scrolled down</h3>
                    <div className='flex'>
                        <Carousel/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}