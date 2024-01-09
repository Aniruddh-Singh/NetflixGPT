import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const movieBG = movies[7];

    const { original_title, overview, id } = movieBG;
    return (
        <div className="pt-[35%] sm:pt-[15%] md:pt-0 bg-black">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBG movieID={id} />
        </div>
    );
};

export default MainContainer;
