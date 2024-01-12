import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND } from "../../utils/constants";

const GptSearchPage = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    className="h-screen object-cover lg:h-auto"
                    src={BACKGROUND}
                    alt="background"
                />
            </div>
            <div className="pt-[35%] sm:pt-[10%] md:py-[3%] lg:p-0">
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    );
};

export default GptSearchPage;
