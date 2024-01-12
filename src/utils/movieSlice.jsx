import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideos: null,
        movieId: null,
        playMovieTrailer: null,
        moviePosterPath: null,
        movieDetails: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },

        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        },

        addMovieId: (state, action) => {
            state.movieId = action.payload;
        },

        addPlayMovieTrailer: (state, action) => {
            state.playMovieTrailer = action.payload;
        },

        addMoviePosterPath: (state, action) => {
            state.moviePosterPath = action.payload;
        },

        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        }
    },
});

export const {
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addTrailerVideos,
    addMovieId,
    addPlayMovieTrailer,
    addMoviePosterPath,
    addMovieDetails,
} = movieSlice.actions;

export default movieSlice.reducer;
