import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./homePage/MainContainer";
import SecondaryContainer from "./homePage/SecondaryContainer";
import GptSearchPage from "./gptSearchPage/GptSearchPage";
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
