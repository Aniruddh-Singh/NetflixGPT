import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "GptSearch",
    initialState: {
        showGptSearch: false,
        suggestedMovies: null,
        gptMovies: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addSuggestedMovies: (state, action) => {
            const { suggestedMovies, gptMovies } = action.payload;
            state.suggestedMovies = suggestedMovies;
            state.gptMovies = gptMovies;
        },
    },
});

export const { toggleGptSearchView, addSuggestedMovies } =
    gptSearchSlice.actions;

export default gptSearchSlice.reducer;
