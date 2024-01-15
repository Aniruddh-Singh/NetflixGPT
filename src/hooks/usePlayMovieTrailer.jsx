import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPlayMovieTrailer } from "../utils/movieSlice";

const usePlayMovieTrailer = (movieID) => {
    console.log(movieID)
    const dispatch = useDispatch();
    // const trailerVideo = useSelector((store) => store.movies?.playMovieTrailer);

    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieID +
            "/videos?language=en-US",
            API_OPTIONS
        );

        const json = await data.json();

        const filterData = json.results.filter(
            (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addPlayMovieTrailer(trailer));
    };

    useEffect(() => {
        // !trailerVideo && getMovieVideos();
        getMovieVideos();
    }, []);
};

export default usePlayMovieTrailer;
