import React, { useEffect } from 'react'
import useMoviePosterId from '../../hooks/useMoviePoster'
import { useSelector } from 'react-redux';
import { IMG_MOVIE_URL } from '../../utils/constants';

const MoviePoster = () => {
    const moviePosterID = useSelector((store) => store.movies.movieId);
    useMoviePosterId(moviePosterID);
    const moviePosterPath = useSelector((store) => store.movies.moviePosterPath);

    return (
        <>
            <div className='absolute -z-10'>
                <img src={IMG_MOVIE_URL + moviePosterPath} alt='movie_poster' className='w-screen h-screen' />
            </div>
        </>
    )
}

export default MoviePoster
