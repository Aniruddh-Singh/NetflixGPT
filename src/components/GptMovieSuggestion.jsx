import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { suggestedMovies, gptMovies } = useSelector(
        (store) => store.gptSearch
    );
    if (!gptMovies) return null;
    return (
        <div>
            <div className="m-6 p-4 bg-black bg-opacity-80">
                {gptMovies.map((movie, index) => {
                    return (
                        <MovieList
                            key={movie}
                            title={movie}
                            movies={suggestedMovies[index]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;
