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
                    <div className='pt-4 pb-4'>
                        <h2 className='p-4'>Suggested for you</h2>
                        <Carousel/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='p-4'>Popular at the moment</h2>
                        <Carousel/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='p-4'>Games</h2>
                        <Carousel/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}