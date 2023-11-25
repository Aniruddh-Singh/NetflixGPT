import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND } from "../utils/constants";

const GptSearchPage = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    className="h-screen object-cover xl:h-auto"
                    src={BACKGROUND}
                    alt="background"
                />
            </div>
            <div className="pt-[40%] md:p-0">
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    );
};

export default GptSearchPage;
