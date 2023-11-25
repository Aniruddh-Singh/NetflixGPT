import { useDispatch, useSelector } from "react-redux";
import {
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const movies = useSelector((store) => store.movies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results));
    };

    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addPopularMovies(json.results));
    };

    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    };

    const getUpcomingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        !movies.nowPlayingMovies && getNowPlayingMovies();
        !movies.popularMovies && getPopularMovies();
        !movies.topRatedMovies && getTopRatedMovies();
        !movies.upcomingMovies && getUpcomingMovies();
    }, []);
};

export default useNowPlayingMovies;
