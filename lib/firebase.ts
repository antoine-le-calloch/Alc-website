import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.APP_ENV === 'DEV') {
    connectFirestoreEmulator(db, 'localhost', 8080);
}

export { db };