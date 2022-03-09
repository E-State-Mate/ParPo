import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase"
import { sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
    url: 'https://www.estatemateservices.com',
    // This must be true.
    handleCodeInApp: true,
  };

sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }
// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState()
//     const [loading, setLoading] = useState(true)

//     function signup(email, password) {
//         return auth.createUserWithEmailAndPassword(email, password)
//     }
    
//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//             setLoading(false)
//         })
//         return unsubscribe
//     }, [])

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }


