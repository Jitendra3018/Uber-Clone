// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCxxuJtNTMumfJyT6WWmENRbS6FZzdl930',
    authDomain: 'uber-clone-ddfa0.firebaseapp.com',
    projectId: 'uber-clone-ddfa0',
    storageBucket: 'uber-clone-ddfa0.appspot.com',
    messagingSenderId: '610887988578',
    appId: '1:610887988578:web:86c127609e7e2ce5fe283b',
    measurementId: 'G-MCF95WQRRB',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
