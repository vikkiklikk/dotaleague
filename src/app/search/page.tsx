import HomeLayout from '../../components/HomeLayout'

export default function Search () {
    
    return (
        <HomeLayout>
            <div className="bg-red-100">
                <div className="h-[560px]">
                    <h1 className="text-4xl">This is the Search page</h1>
                    <iframe width="420" height="345" src="https://www.youtube.com/embed/OVKRBGzH8aM">
                    </iframe>
                </div>
            </div>
        </HomeLayout>
    )
}