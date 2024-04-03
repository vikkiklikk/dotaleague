
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import useFavorites from "@/hooks/useFavorites";

interface Video {
    id: number;
    title: string;
    //thumbnailUrl: string;
};
interface CardProps {
    video: Video;
};

const Card: React.FC<CardProps> = ({video}) => {
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
        ...favorite ? {fill: '#FAFF00'} : {fill: 'transparent'}
    }*/

    return (
        <div className='w-[152px] h-[138px] rounded-2xl bg-white relative'>
            <button className='absolute top-2 right-6'>
                {/*I'm using two stars that overlay each other, couldn't find a star that I could change fill and border */}
                <FaRegStar  className="absolute"/>
            </button>
            <Link href={`/videos/${video.id}`}>
                <div className='w-[152px] h-[98px] rounded-t-2xl bg-slate-500'/>
            </Link>
            <Link href={`/videos/${video.id}`}>
                <div className='flex py-2 px-2 place-items-center'>
                    <h2 className=' text-sm font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis'>{video.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default Card;