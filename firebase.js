import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAr7RvvBgIPgUxfrPePtijFtlQARcwxHmg",
  authDomain: "underdocs-revival.firebaseapp.com",
  projectId: "underdocs-revival",
  storageBucket: "underdocs-revival.appspot.com",
  messagingSenderId: "673797498787",
  appId: "1:673797498787:web:a2b2b8f911fdbfd6c21c16",
  measurementId: "G-RJ8MV8K9W5"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();

export { db };