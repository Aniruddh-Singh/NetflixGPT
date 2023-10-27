import React from "react";
import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const movieBG = movies[1];
    // console.log(movieBG);

    const { original_title, overview, id } = movieBG;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBG movieID={id} />
        </div>
    );
};

export default MainContainer;
