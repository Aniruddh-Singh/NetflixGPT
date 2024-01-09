import ShimmerCards from "./ShimmerCards";

const ShimmerUI = () => {
    const noOfCards = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div>
            <h1 className="text-xl md:text-4xl md:py-2 text-white">
                Loading...
            </h1>
            <div className="flex overflow-x-scroll my-2 no-scrollbar">
                <div className="flex">
                    {noOfCards.map((card, index) => <ShimmerCards key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default ShimmerUI;



