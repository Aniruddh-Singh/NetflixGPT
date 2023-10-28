import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log(movies);
    return (
        movies.nowPlayingMovies && (
            <div className=" bg-black">
                <div className="-mt-72 pl-12 pr-4 relative z-10">
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;
