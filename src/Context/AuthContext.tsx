import React, { useContext, useState, useEffect, createContext } from 'react'
import { auth } from "../firebase" 

type AuthProviderProps = {
    children: any;
}

interface Auth {
    signup: Promise<any>;
    login: Promise<any>;
    logout: Promise<any>;
    resetPassword: Promise<any>;
    currentUser: any;
}

const AuthContext = createContext('')

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<firebase.default.User | null>()
    const [loading, setLoading] = useState(true)


    function signup(email: string, password: string): Promise<any> {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = async (email: string, password: string): Promise<any> => {
        const response = await auth.signInWithEmailAndPassword(email, password)
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(): Promise<any> {
        return auth.signOut()
    }

    function resetPassword(email: string): Promise<any> {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: firebase.default.User | null) => {
            setCurrentUser(user)
            setLoading(false)
            
        })
        return unsubscribe
    }, [])

    const value: any = {
        currentUser,
        login,
        logout,
        resetPassword,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
  