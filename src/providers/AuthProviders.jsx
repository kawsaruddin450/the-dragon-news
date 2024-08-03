import React, { createContext, useEffect, useState } from 'react';
import { useCol } from 'react-bootstrap/esm/Col';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[]);
    const signOutUser = ()=> {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        signOutUser,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;