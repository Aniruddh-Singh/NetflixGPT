import React from "react";
import ShimmerCards from "./ShimmerCards";

const ShimmerUI = () => {
    return (
        <div>
            <h1 className="text-xl md:text-4xl md:py-2 text-white">
                Loading...
            </h1>
            <div className="flex overflow-x-scroll my-2">
                <div className="flex">
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                    <ShimmerCards />
                </div>
            </div>
        </div>
    );
};

export default ShimmerUI;
