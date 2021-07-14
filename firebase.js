import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8qphewYQ3HsmSpMvyJwweqAGM2xVsgBE",
  authDomain: "underdocs-babfc.firebaseapp.com",
  projectId: "underdocs-babfc",
  storageBucket: "underdocs-babfc.appspot.com",
  messagingSenderId: "372978033308",
  appId: "1:372978033308:web:659f917ac6c6ecdb4dc359"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();

export { db };