import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath, movie }) => {
    if (!posterPath) return null;

    const handleMovieCard = () => {
        console.log(movie.id);
    }

    return (
        <div className="w-28 md:w-36 xl:w-[185px] mx-1 xl:m-0 px-1 py-[15px]">
            <img src={IMG_CDN_URL + posterPath} alt="movie_poster"
                className="rounded-md hover:scale-110 hover:duration-200 "
                onClick={handleMovieCard} />
        </div>
    );
};

export default MovieCards;
