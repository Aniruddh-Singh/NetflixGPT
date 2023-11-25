import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-28 md:w-36 xl:w-48 mx-1 xl:mx-0">
            <img src={IMG_CDN_URL + posterPath} alt="movie_poster" />
        </div>
    );
};

export default MovieCards;
