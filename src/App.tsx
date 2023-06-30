import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { useAuthContext } from "./context/AuthProvider";
import { appRoutes, authRoutes } from "./constants/routes";

const App = () => {
    const { user } = useAuthContext();

    const router = useMemo(() => {
        return user ? appRoutes : authRoutes;
    }, [user]);

    return <RouterProvider router={router} />;
};

export default App;
