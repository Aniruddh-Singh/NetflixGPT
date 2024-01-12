import React from 'react'
import useMovieDetails from '../../hooks/useMovieDetails'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieDetails = () => {
    const navigate = useNavigate();
    const movieID = useSelector((store) => store.movies.movieId);

    useMovieDetails(movieID);

    const movieDetails = useSelector((store) => store.movies.movieDetails);
    // console.log(movieDetails)

    // const { title, overview, release_date, runtime, genres, } = movieDetails;
    const title = movieDetails?.title;
    const overview = movieDetails?.overview;

    const playClickHandle = () => {
        navigate("/playmovie/" + movieID)
    }

    return (
        <div className="pt-[25%] md:pt-[10%] px-6 xl:px-12 absolute text-white bg-gradient-to-r from-black w-full h-screen ">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
                {title}
            </h1>
            <p className=" py-6 text-sm xl:text-lg w-5/6 md:w-1/2">
                {overview}
            </p>
            <div>
                <button className="my-2 py-0 md:py-2 px-2 md:px-10 bg-white text-black text-md sm:text-lg rounded-lg bg-opacity-85 hover:bg-opacity-80" onClick={playClickHandle}>
                    ▶ Play
                </button>
                <button className=" m-2 py-0 md:py-2 px-2 md:px-10 bg-gray-500 text-white text-lg rounded-lg bg-opacity-85 hover:bg-opacity-80">
                    moreInfo
                </button>
            </div>
        </div>
    )
}

export default MovieDetails
