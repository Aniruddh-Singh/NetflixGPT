import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    // console.log(movies)

    if (!movies) return;

    const movieBG = movies[0];

    const { original_title, overview, id } = movieBG;
    return (
        <div className="pt-[35%] sm:pt-[15%] md:pt-0 bg-black w-full ">
            <VideoTitle title={original_title} overview={overview} movieID={id} />
            <VideoBG movieID={id} />
        </div>
    );
};

export default MainContainer;
