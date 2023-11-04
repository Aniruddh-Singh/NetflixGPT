import React, { useRef } from "react";
import lang from "../utils/languageConstatnts";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addSuggestedMovies } from "../utils/GptSearchSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const language = useSelector((store) => store.config.language);

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
        // console.log(searchText.current?.value);

        const querySearch =
            "Give the list of movies as given below: " +
            searchText.current?.value;

        // const movieList = await openai.chat.completions.create({
        //     messages: [{ role: "user", content: querySearch }],
        //     model: "gpt-3.5-turbo",
        // });

        // if (!movieList.choices) {
        //     // TODO: Handle error
        // }

        // console.log(movieList.choices?.[0]?.content.split(","));

        // const movies = movieList.choices?.[0]?.content.split(",");
        const movies = ["jawan", "omg", "namaste", "Dil", "Dil To Pagal Hai"];

        const promiseData = movies.map((movies) => searchMovie(movies));
        const data = await Promise.all(promiseData);
        console.log(data);

        dispatch(
            addSuggestedMovies({ gptMovies: movies, suggestedMovies: data })
        );
    };

    return (
        <div className="pt-[10%] flex justify-center">
            <form
                className="bg-black grid grid-cols-12 w-1/2 rounded-lg"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    ref={searchText}
                    className="py-2 px-4 m-3 col-span-9 rounded-lg placeholder-gray-700 placeholder:font-bold"
                    placeholder={lang[language].gptSearchPlaceholder}
                />
                <button
                    className="px-4 py-2 m-3 bg-red-500 text-white rounded-lg col-span-3"
                    onClick={handleSearchClick}
                >
                    {lang[language].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
