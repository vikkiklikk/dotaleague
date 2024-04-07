
import { FaFill, FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import useFavorites from "@/hooks/useFavorites";
import { Video } from "@prisma/client";


interface CardProps {
    video: Video;
};

const Card: React.FC<CardProps> = ({video}) => {
    const fallbackImageUrl = "/logo.svg";
    // the favorite function for the favorite button
    /*const { addFavorite, removeFavorite, isFavorite} = useFavorites();
    const favorite = isFavorite(null);

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie.imdbID);
        }
    }
    // making changes to the color of the favorite star when it is clicked
    const starStyle = {
        ...favorite ? {fill: '#FAFF00'} : {fill: '#FFFFFF'}
    }*/

    return (
        <div className='w-[152px] h-[138px] rounded-2xl bg-white relative'>
            <button className='absolute top-2 right-2 z-10'>
                {/*I'm using two stars that overlay each other, couldn't find a star that I could change fill and border */}
                <FaRegStar  className="absolute"/>
                <FaStar color='white'/>
            </button>
            <Link href={`/video/${video.id}`}>
                <div className="relative w-[152px] h-[98px] rounded-t-2xl bg-gray-200 overflow-hidden">
                    <img className='w-full h-full' alt="Video Thumbnail" src={video.thumbnailUrl || fallbackImageUrl}/>
                    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src='/PlayIcon.svg' alt='Play image' />
                </div>
            </Link>
            <Link href={`/video/${video.id}`}>
                <div className='flex py-2 px-2 place-items-center'>
                    <h2 className=' text-sm font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis'>{video.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default Card;