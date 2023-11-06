import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <h1 className="text-xl md:text-4xl md:py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll my-2">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCards
                            key={movie.id}
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
