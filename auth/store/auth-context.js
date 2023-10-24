import React from "react";

const AuthContext = React.createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {}
});

export default AuthContext;