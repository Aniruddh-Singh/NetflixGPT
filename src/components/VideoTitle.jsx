import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-[25%] md:pt-[14%] px-6 xl:px-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video ">
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold">
                {title}
            </h1>
            <p className="hidden md:inline-block py-6 text-sm xl:text-lg w-5/6 md:w-1/2">
                {overview}
            </p>
            <div>
                <button className="my-2 py-0 md:py-2 px-2 md:px-10 bg-white text-black text-lg rounded-lg bg-opacity-85 hover:bg-opacity-80">
                    ▶ Play
                </button>
                <button className="hidden xl:inline-block m-2 py-2 px-10 bg-gray-500 text-white text-lg rounded-lg bg-opacity-85 hover:bg-opacity-80">
                    moreInfo
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
