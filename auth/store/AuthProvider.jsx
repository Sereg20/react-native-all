import AuthContext from "./auth-context";
import { useState } from "react";

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const isAuthenticated = !!token;

    const authenticate = (token) => {
        setToken(token);
    };

    const logout = () => {
        setToken(null);
    };

    const value = {
        token: token,
        isAuthenticated: isAuthenticated,
        authenticate: authenticate,
        logout: logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;