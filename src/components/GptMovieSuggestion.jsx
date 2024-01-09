import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerUI from "./ShimmerUI";

const GptMovieSuggestion = () => {
    const { suggestedMovies, gptMovies, getShimmer } = useSelector(
        (store) => store.gptSearch
    );
    return (
        <div>
            {(!gptMovies) ? (!getShimmer ? <></> : <div className="my-4 mx-3 md:m-6 p-3 md:p-4 bg-black bg-opacity-80"><ShimmerUI /><ShimmerUI /><ShimmerUI /></div>) :
                <div className="my-4 mx-3 md:m-6 p-3 md:p-4 bg-black bg-opacity-80">
                    {(gptMovies.map((movie, index) => {
                        return (
                            <MovieList
                                key={movie}
                                title={movie}
                                movies={suggestedMovies[index]}
                            />
                        );
                    })
                    )}
                </div>
            }
        </div >
    );
};

export default GptMovieSuggestion;
