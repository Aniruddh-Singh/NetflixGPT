import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
    const gptSearch = useSelector((store) => store.gptSearch.showGptSearch);
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            {gptSearch ? (
                <GptSearchPage />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;
