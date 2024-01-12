import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBG = ({ movieID }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideos);

    useMovieTrailer(movieID);

    return (
        <div>
            <iframe
                className="w-full aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?autoplay=1&loop=1&mute=1&controls=0&playlist=" + trailerVideo?.key
                }
            ></iframe>
        </div>
    );
};

export default VideoBG;
