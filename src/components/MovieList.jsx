import MovieCards from "./MovieCards";
import "../App.css"

const MovieList = ({ title, movies }) => {

    return (
        <div>
            <h1 className="text-xl md:text-4xl md:py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll my-2 no-scrollbar">
                <div className="flex ">
                    {movies?.map((movie) => (
                        <MovieCards
                            key={movie.id}
                            posterPath={movie.poster_path}
                            movie={movie}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
