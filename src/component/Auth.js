import {createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)

export const ContextProvider = ({children}) => {
    const [user , setuser] = useState(null)
    const login = (user) => {
        setuser(user) 
    }
    const logout = () => {
        setuser(null)
    }
    return <AuthContext.Provider value={{user , login , logout}}>
        {children}
        </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext);
}
