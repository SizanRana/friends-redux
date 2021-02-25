import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdGFEZf7MPGt6pVsLhUctxXtL6CTm-h5k",
  authDomain: "friends-cee70.firebaseapp.com",
  projectId: "friends-cee70",
  storageBucket: "friends-cee70.appspot.com",
  messagingSenderId: "235644023391",
  appId: "1:235644023391:web:491596eaf51a1fed4d61ea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
