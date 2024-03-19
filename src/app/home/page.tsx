import HomeLayout from '../../components/HomeLayout';
import Carousel from '@/components/carousel';
import FilterBar from '@/components/filterBar';

export default function Home () {
    
    return (
        <HomeLayout>
            <div className="">
                <div className="h-[188px] bg-blue-300 relative">
                    <h2>Here is the header, containing avatar image and name, underneith is the filtered choices</h2>
                    <div className='absolute bottom-0 ml-7 w-[362px]'>
                        <FilterBar/>
                    </div>
                </div>
                <div className="h-[560px]">
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Suggested for you</h2>
                        <Carousel/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Popular at the moment</h2>
                        <Carousel/>
                    </div>
                    <div className='pt-4 pb-4'>
                        <h2 className='py-4 pl-7'>Games</h2>
                        <Carousel/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}