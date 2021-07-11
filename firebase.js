import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjGDRieV5VMdNNAhilXXodCj-PQpgthS0",
    authDomain: "underdocs-13933.firebaseapp.com",
    projectId: "underdocs-13933",
    storageBucket: "underdocs-13933.appspot.com",
    messagingSenderId: "366071427590",
    appId: "1:366071427590:web:5719370a32a1f3647a0987"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();

export { db };