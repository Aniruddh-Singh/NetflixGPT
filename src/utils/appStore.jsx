import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSearchReducer from "./GptSearchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gptSearch: gptSearchReducer,
        config: configReducer,
    },
});

export default appStore;
