import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-[14%] px-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video ">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-2/3">{overview}</p>
            <div>
                <button className="m-2 py-2 px-10 bg-white text-black text-lg rounded-lg bg-opacity-85 hover:bg-opacity-80">
                    ▶ Play
                </button>
                <button className="m-2 py-2 px-10 bg-gray-500 text-white text-lg rounded-lg bg-opacity-85 hover:bg-opacity-80">
                    moreInfo
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
