import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCu7kZ_Q3pKaHJQGOPIjS8NIL_dAj1PDkY",
  authDomain: "disneyplus-39768.firebaseapp.com",
  projectId: "disneyplus-39768",
  storageBucket: "disneyplus-39768.appspot.com",
  messagingSenderId: "294525555852",
  appId: "1:294525555852:web:b22434e4ceb0e8609097a9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
