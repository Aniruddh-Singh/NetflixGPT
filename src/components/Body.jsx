import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Authentication/Login";
import PlayMovie from "./moviePage/PlayMovie";
import MovieInfo from "./moviePage/MovieInfo";
import Error from "./Error";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/playmovie/:movieID",
            element: <PlayMovie />,
        },
        {
            path: "/movieinfo/:movieID",
            element: <MovieInfo />,
        },
        {
            path: "*",
            element: <Error />
        }
    ]);

    return <RouterProvider router={appRouter} />;
};

export default Body;
