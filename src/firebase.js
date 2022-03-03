import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

export const auth= firebase.initializeApp({
    apiKey: "AIzaSyBYPZHPpHSXfFoqt04JGD6S-jCepYbgv9c",
    authDomain: "livechat-f88e1.firebaseapp.com",
    projectId: "livechat-f88e1",
    storageBucket: "livechat-f88e1.appspot.com",
    messagingSenderId: "499819872540",
    appId: "1:499819872540:web:1546d97f6f7dbb5ebebad9"
  }).auth();