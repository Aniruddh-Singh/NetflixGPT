import React from "react";
import lang from "../utils/languageConstatnts";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.language);

    return (
        <div className="pt-[10%] flex justify-center">
            <div className="bg-black grid grid-cols-12 w-1/2 rounded-lg">
                <input
                    type="text"
                    className="py-2 px-4 m-3 col-span-9 rounded-lg placeholder-gray-700 placeholder:font-bold"
                    placeholder={lang[language].gptSearchPlaceholder}
                />
                <button className="px-4 py-2 m-3 bg-red-500 text-white rounded-lg col-span-3">
                    {lang[language].search}
                </button>
            </div>
        </div>
    );
};

export default GptSearchBar;
