import React, { createContext, useEffect, useState } from 'react';
import { useCol } from 'react-bootstrap/esm/Col';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
        })
        return () => {
            unsubscribe();
        }
    },[]);
    const signOutUser = ()=> {
        return signOut(auth);
    }
    const authInfo = {
        user,
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