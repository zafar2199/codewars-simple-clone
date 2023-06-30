import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";

const authRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
]);

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export { authRoutes, appRoutes };
