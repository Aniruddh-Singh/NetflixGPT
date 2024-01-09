import { useRef } from "react";
import lang from "../utils/languageConstatnts";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addSuggestedMovies } from "../utils/GptSearchSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const language = useSelector((store) => store.config.language);
    // const { gptMovies } = useSelector((store) => store.gptSearch);

    const searchText = useRef(null);

    const searchMovie = async (movie) => {
        const fetchMovies = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await fetchMovies.json();

        return json.results;
    };

    const handleSearchClick = async () => {

        dispatch(
            addSuggestedMovies({ getShimmer: true })
        );

        const querySearch =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        // Command which I gave to openAI 😊
        // const querySearch =
        //     "Give the list of movies as given below: " +
        //     searchText.current?.value +
        //     ` in the format as mentioned below: movie1, movie2, movie3, movie4, movie5 with no extra text in the result.`;

        const movieList = await openai.chat.completions.create({
            messages: [{ role: "user", content: querySearch }],
            model: "gpt-3.5-turbo",
        });

        if (!movieList.choices) {
            // TODO: Handle error
        }

        const movies = movieList.choices?.[0]?.message?.content.split(", ");

        const promiseData = movies.map((movies) => searchMovie(movies));
        const data = await Promise.all(promiseData);

        dispatch(
            addSuggestedMovies({ gptMovies: movies, suggestedMovies: data })
        );
    };

    return (
        <div className="pt-[10%] flex justify-center">
            <form
                className="bg-black grid grid-cols-12 w-5/6 md:w-4/6 lg:w-1/2 rounded-lg"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    ref={searchText}
                    className="py-2 px-2 md:px-4 m-2 md:m-3 col-span-9 rounded-lg placeholder-gray-700 placeholder:text-xs md:placeholder:text-lg placeholder:font-bold"
                    placeholder={lang[language].gptSearchPlaceholder}
                />
                <button
                    className=" px-2 md:px-4 py-2 m-2 md:m-3 bg-red-500 text-white rounded-lg col-span-3"
                    onClick={handleSearchClick}
                >
                    {lang[language].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
