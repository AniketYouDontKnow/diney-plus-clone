import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8Nq1_SaEdOjeB5H-gu04q-oA7fDIVXgw",
    authDomain: "disney-plus-clone-fb845.firebaseapp.com",
    projectId: "disney-plus-clone-fb845",
    storageBucket: "disney-plus-clone-fb845.appspot.com",
    messagingSenderId: "494704787828",
    appId: "1:494704787828:web:be5c205fa8781211c22c21"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;