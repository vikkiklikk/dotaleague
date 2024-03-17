import HomeLayout from '../../components/HomeLayout'

export default function Profile () {
    
    return (
        <HomeLayout>
            <div className="bg-red-100">
                <div className="h-[560px]">
                    <h1 className="text-4xl">This is the Profile page</h1>
                </div>
            </div>
        </HomeLayout>
    )
}