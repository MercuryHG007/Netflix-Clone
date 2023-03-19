import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4WWxgBjqDVUKlYikeZ2pGKHW_hCAlT1E",
    authDomain: "netflix-clone-ff98b.firebaseapp.com",
    projectId: "netflix-clone-ff98b",
    storageBucket: "netflix-clone-ff98b.appspot.com",
    messagingSenderId: "285761370111",
    appId: "1:285761370111:web:76cced68b87f7a561759ca"
};

// Used this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Used these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;