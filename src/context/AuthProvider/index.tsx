import {
    FC,
    useState,
    useContext,
    createContext,
    ReactNode,
    useMemo,
} from "react";
import { IUserResponse } from "../../types";

interface AuthProviderProps {
    children: ReactNode;
}

interface IAuthContextData {
    user: null | IUserResponse;
    isloggedin: boolean;
    setUser: (user: IUserResponse) => void;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<null | IUserResponse>(null);

    const isloggedin = useMemo(() => {
        return user !== null;
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                isloggedin,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
