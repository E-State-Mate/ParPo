import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth'
import 'firebase/compat/firestore'

let config = {
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appId: process.env.REACT_APP_FB_APP,
};

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = firebase.initializeApp(config);
const db =  getFirestore();
const auth = getAuth();

const addUser = async () => {
    const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 2022
    })
    console.log('Doc written with ID: ', docRef.id)
}

export  { db, auth };