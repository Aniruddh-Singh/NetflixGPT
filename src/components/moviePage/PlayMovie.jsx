import React from 'react'
import { useSelector } from 'react-redux'
import usePlayMovieTrailer from '../../hooks/usePlayMovieTrailer';

const PlayMovie = () => {
    const movieID = useSelector((store) => store.movies?.movieId);

    usePlayMovieTrailer(movieID);
    // console.log(movieID);

    const playMovieTrailer = useSelector((store) => store.movies?.playMovieTrailer);
    // console.log(playMovieTrailer?.key);
    return (
        <>
            <div className='bg-black h-screen flex'>
                {
                    playMovieTrailer?.key ? <iframe
                        className="w-full md:w-5/6 m-auto aspect-video"
                        src={
                            "https://www.youtube.com/embed/" +
                            playMovieTrailer?.key +
                            "?autoplay=1&loop=1&mute=1&playlist=" + playMovieTrailer?.key

                        } allowFullScreen
                    ></iframe> : <h1 className=' m-auto text-white text-center'>Oops, Video not found.<br /> Please🙏, try another movie.</h1>
                }

            </div >
        </>
    )
}

export default PlayMovie
