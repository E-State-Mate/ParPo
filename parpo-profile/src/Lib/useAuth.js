// import React, { useState, useEffect, useContext, createContext } from 'react'
// import firebase from 'firebase/app'
// import 'firebase/auth'

// let config = {
//     apiKey: process.env.REACT_APP_FB_API,
//     authDomain: process.env.REACT_APP_FB_DOMAIN,
//     databaseURL: process.env.REACT_APP_DB_URL,
//     projectId: process.env.REACT_APP_FB_PROJECT,
//     storageBucket: process.env.REACT_APP_FB_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FB_SENDER,
//     appId: process.env.REACT_APP_FB_APP,
// };

// firebase.initializeApp(config)

// const AuthContext = createContext()

// export const useAuth = () => {
//     return useContext(AuthContext)
// }

// export const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null)
//     const [isAuthenticating, setIsAuthenticating] = useState(true)

//     const sendSignInLinkToEmail = (email) => {
//         return firebase.auth().sendSignInLinkToEmail(email, {
//             url: 'http://localhost:3000',
//             handleCodeInApp: true
//         }).then(() => {
//             return true
//         })
//     }

//     const signInWithEmailLink = (email, url) => {
//         return firebase.auth.signInWithEmailLink(email, url).then(result => {
//             setUser(result.user)
//             return true
//         })
//     }

//     const logout = () => {
//         return firebase.auth().signOut().then(() => {
//             setUser(null)
//         })
//     }

//     useEffect(() => {
//         const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//             setUser(user)
//             setIsAuthenticating(false)
//         })

//         return () => unsubscribe()
//     }, [])

//     const values = {
//         user,
//         isAuthenticating,
//         sendSignInLinkToEmail,
//         signInWithEmailLink,
//         logout
//     }

//     return(
//         <AuthContext.Provider value={values}>
//             {!isAuthenticating && children }
//         </AuthContext.Provider>
//     )
// }