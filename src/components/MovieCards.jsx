import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-48">
            <img src={IMG_CDN_URL + posterPath} alt="movie_poster" />
        </div>
    );
};

export default MovieCards;
