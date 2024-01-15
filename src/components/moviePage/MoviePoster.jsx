import React, { useEffect, useState } from 'react'
import useMoviePosterId from '../../hooks/useMoviePoster'
import { useSelector } from 'react-redux';
import { IMG_MOVIE_URL } from '../../utils/constants';

const MoviePoster = () => {

    let moviePosterPath = null;
    const moviePosterID = useSelector((store) => store.movies.movieId);
    useMoviePosterId(moviePosterID);
    moviePosterPath = useSelector((store) => store.movies.moviePosterPath);


    return (
        <>
            {
                moviePosterPath && <div className='absolute -z-10'>
                    <img src={IMG_MOVIE_URL + moviePosterPath} alt='movie_poster' className='w-screen h-screen ' />
                </div>
            }

        </>
    )
}

export default MoviePoster
