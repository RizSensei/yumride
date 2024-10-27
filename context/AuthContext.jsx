import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return(
        <AuthContext.Provider value={{loggedInUser,setLoggedInUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;