import { FC, useState, useContext, createContext, ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface IAuthContextData {
    user: boolean;
    setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
