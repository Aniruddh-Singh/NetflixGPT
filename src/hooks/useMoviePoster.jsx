import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMoviePosterPath } from '../utils/movieSlice';

const useMoviePoster = (id) => {
    const dispatch = useDispatch();

    const images = async () => {
        const moviePoster = await fetch("https://api.themoviedb.org/3/movie/" + id + "/images", API_OPTIONS);

        const json = await moviePoster.json();

        const imagePath = json.posters[0].file_path;

        // console.log(imagePath);

        dispatch(addMoviePosterPath(imagePath));
    }

    useEffect(() => {
        images();
    }, []);
}

export default useMoviePoster
