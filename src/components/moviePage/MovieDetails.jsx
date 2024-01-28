import React, { useState } from 'react'
import useMovieDetails from '../../hooks/useMovieDetails'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieDetails = () => {
    const [info, setInfo] = useState(null);
    const navigate = useNavigate();
    const movieID = useSelector((store) => store.movies.movieId);

    useMovieDetails(movieID);

    const movieDetails = useSelector((store) => store.movies.movieDetails);
    // console.log(movieDetails)

    // const { title, overview, release_date, runtime, genres, original_language, production_companies, revenue, vote_average, tagline } = movieDetails;
    const title = movieDetails?.title;
    const overview = movieDetails?.overview;

    const runtime = movieDetails?.runtime;
    const imdb_rating = movieDetails?.vote_average;
    const release_date = movieDetails?.release_date;
    const tagline = movieDetails?.tagline;
    const original_language = movieDetails?.original_language;
    const revenue = movieDetails?.revenue;
    const genres = movieDetails?.genres;
    const production_companies = movieDetails?.production_companies;

    const playClickHandle = () => {
        navigate("/playmovie/" + movieID)
    }

    const infoClickHandle = () => {
        setInfo("hidden");
    }

    return (
        <div className="pt-[35%] md:pt-[10%] px-6 xl:px-12 absolute text-white bg-gradient-to-r from-black w-full h-screen ">
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
                <button className={info + " m-2 py-0 md:py-2 px-2 md:px-10 bg-gray-500 text-white text-md sm:text-lg rounded-lg bg-opacity-85 hover:bg-opacity-80"} onClick={infoClickHandle}>
                    moreInfo
                </button>
            </div>
            {info && <div className='mt-8 p-2 bg-black bg-opacity-40 rounded-lg shadow-md shadow-white'>
                {runtime && <div>
                    <p>* Runtime: {Math.trunc(runtime / 60) + "h " + (runtime % 60) + "min"}</p>
                </div>}
                {imdb_rating != 0 && <div>
                    <p>* IMDB Rating: {imdb_rating}</p>
                </div>}
                {release_date && <div>
                    <p>* Release Date: {release_date}</p>
                </div>}
                {tagline && <div>
                    <p>* Tagline: {tagline}</p>
                </div>}
                {original_language && <div>
                    <p>* Original Language: {original_language}</p>
                </div>}
                {revenue != 0 && <div>
                    <p> * Revenue: {(revenue / 10000000).toFixed(2)} crore</p>
                </div>}
                {genres && <div>
                    <p>* Genres: {genres.map((genre) => {
                        return (genre.name + " | ");
                    })}</p>
                </div>}
                {production_companies && <div>
                    <p>* Production Companies: {production_companies.map((company) => {
                        return (company.name + " | ")
                    })}</p>
                </div>}
            </div>}
        </div>
    )
}

export default MovieDetails
