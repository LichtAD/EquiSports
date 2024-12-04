import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(loading, user);

    // ! register with email and password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ! log in with email and password
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ! log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const AuthInfo = {
        user,
        setUser,
        createNewUser,
        logInUser,
        logOut,
        loading,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;