import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieDetails } from '../utils/movieSlice';

const useMovieDetails = (id) => {
    const dispatch = useDispatch();

    const movieDetails = async () => {
        const movieDetail = await fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US', API_OPTIONS);
        const json = await movieDetail.json();
        // console.log(json);
        dispatch(addMovieDetails(json));
    }

    useEffect(() => {
        movieDetails();
    }, [])
}

export default useMovieDetails
