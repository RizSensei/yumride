import { getAuth } from "firebase/auth";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const authentication = getAuth();

    // const login = async (email, password) => {
    //     try {
    //       await signInWithEmailAndPassword(authentication, email, password);
    //       setIsAuthenticated(true);
    //     } catch (error) {
    //       console.error("Login failed:", error);
    //     }
    //   };
    
    //   const logout = async () => {
    //     try {
    //       await auth().signOut();
    //       setIsAuthenticated(false);
    //     } catch (error) {
    //       console.error("Logout failed:", error);
    //     }
    //   };

    return(
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;