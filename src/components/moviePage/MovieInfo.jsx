import React from 'react';
import MoviePoster from './MoviePoster';
import MovieDetails from './MovieDetails';
import MovieHeader from './MovieHeader';

const MovieInfo = () => {
    return (
        <>
            <div>
                <MovieHeader />
                <MoviePoster />
                <MovieDetails />
            </div>
        </>
    )
}

export default MovieInfo
