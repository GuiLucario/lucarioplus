import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlC13f3ILs1WiauqjvbBrE7SgrfhzVlzY",
  authDomain: "lucarioplus-7f46a.firebaseapp.com",
  projectId: "lucarioplus-7f46a",
  storageBucket: "lucarioplus-7f46a.firebasestorage.app",
  messagingSenderId: "537249634046",
  appId: "1:537249634046:web:5c3f1241358ac34a27b7af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async(name, email, password)=>{
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};