import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
// import BasicPopover from "./BasicPopover";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "browse",
            element: <Browse />,
        },
        // {
        //     path: "popover",
        //     element: <BasicPopover />,
        // },
    ]);

    return <RouterProvider router={appRouter} />;
};

export default Body;
