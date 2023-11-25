import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    // console.log(movies);
    return (
        <div className=" bg-black ">
            <div className="py-3 md:-mt-44 xl:-mt-80 px-3 md:pl-6 xl:pl-12 pr-4 relative z-10">
                {!movies.nowPlayingMovies ||
                !movies.popularMovies ||
                !movies.topRatedMovies ||
                !movies.upcomingMovies ? (
                    <ShimmerUI />
                ) : (
                    <>
                        {movies.nowPlayingMovies && (
                            <MovieList
                                title={"Now Playing"}
                                movies={movies.nowPlayingMovies}
                            />
                        )}

                        {movies.topRatedMovies && (
                            <MovieList
                                title={"Top Rated"}
                                movies={movies.topRatedMovies}
                            />
                        )}
                        {movies.popularMovies && (
                            <MovieList
                                title={"Popular"}
                                movies={movies.popularMovies}
                            />
                        )}
                        {movies.upcomingMovies && (
                            <MovieList
                                title={"Upcoming"}
                                movies={movies.upcomingMovies}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SecondaryContainer;
