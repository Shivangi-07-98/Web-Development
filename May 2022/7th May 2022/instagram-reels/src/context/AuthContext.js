import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = React.createContext();

// children is an inbuilt prop -> it refers to all the component specified inside 
export function AuthContextProvider({ children }) {
    let [mainLoader, setMainLoader] = useState(true);
    let [cUser, setUser] = useState(null);
    
    useEffect(() => {
        // event listener
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
            } else {
                // User is signed out
                setUser(null);
            }

            setMainLoader(false);

            
        });
        
    }, []);
    
    let value = cUser;
    return (
        <AuthContext.Provider value={value}>
            {mainLoader == false && children}
        </ AuthContext.Provider>
    )
}