import HomeLayout from '../../components/HomeLayout'

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
                </div>
            </div>
        </HomeLayout>
    )
}