import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase//compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDqvX62z_DYxMw8dyAgo4uEJVcOnoU6qE",
    authDomain: "regie-pub.firebaseapp.com",
    projectId: "regie-pub",
    storageBucket: "regie-pub.appspot.com",
    messagingSenderId: "48965515062",
    appId: "1:48965515062:android:b4405ebd8db9db7ac22597",
};

firebase.initializeApp(firebaseConfig)


export {firebase};