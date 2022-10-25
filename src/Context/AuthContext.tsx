import { User } from 'firebase/auth';
import React, { useContext, useState, useEffect, createContext } from 'react'
import { auth } from "../firebase" 

type AuthProviderProps = {
    children: any;
}

const AuthContext = createContext(null)
  
  export function useAuth() {
      return useContext(AuthContext)
  }
  
  
  export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
      const [currentUser, setCurrentUser] = useState<firebase.default.User | null>()
      const [loading, setLoading] = useState(true)
   
  
      function signup(email: string, password: string) {
          return auth.createUserWithEmailAndPassword(email, password)
      }
  
      const login = async (email: string, password: string) => {
        const response = await auth.signInWithEmailAndPassword(email, password)
          return auth.signInWithEmailAndPassword(email, password)
      }
  
      function logout() {
          return auth.signOut()
      }
  
      function resetPassword(email: string) {
          return auth.sendPasswordResetEmail(email)
      }
  
      useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged((user: firebase.default.User | null) => {
              setCurrentUser(user)
              setLoading(false)
              
          })
          return unsubscribe
      }, [])

      const value = {
          currentUser,
          signup,
          login, 
          logout,
          resetPassword,
      }
    
      return (
          <AuthContext.Provider value={value}>
              {!loading && children}
          </AuthContext.Provider>
      )
  }
  