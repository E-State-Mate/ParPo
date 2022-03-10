import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

let config = {
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appId: process.env.REACT_APP_FB_APP,
};

const app = firebase.initializeApp(config);
const db =  getFirestore(app);
const auth = app.auth()
const googleAuthentication = getAuth(app);

export  { db, auth, googleAuthentication };