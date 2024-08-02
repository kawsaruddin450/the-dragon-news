import React, { createContext, useState } from 'react';
import { useCol } from 'react-bootstrap/esm/Col';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const authInfo = {
        user,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;