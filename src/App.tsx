import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { useAuthContext } from "./context/AuthProvider";
import { appRoutes, authRoutes } from "./constants/routes";

const App = () => {
    const { isloggedin } = useAuthContext();

    const router = useMemo(() => {
        return isloggedin ? appRoutes : authRoutes;
    }, [isloggedin]);

    return <RouterProvider router={router} />;
};

export default App;
