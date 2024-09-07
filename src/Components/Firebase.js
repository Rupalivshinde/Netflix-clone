import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyBCZ29eXqHo_cU2y3z-g_OEwoS1wLTtEeo",
    authDomain: "netflix-clone-efafb.firebaseapp.com",
    projectId: "netflix-clone-efafb",
    storageBucket: "netflix-clone-efafb.appspot.com",
    messagingSenderId: "166181912512",
    appId: "1:166181912512:web:423b6a41a80600777fd225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Sign up function
const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        // Add user to Firestore
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

        toast.success("User signed up successfully!");
    } catch (error) {
        toast.error(`Sign Up Error: ${error.message}`);
    }
};

// Login function
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
    } catch (error) {
        toast.error(`Login Error: ${error.message}`);
    }
};

// Logout function
const logout = async (navigate) => {
    try {
        await signOut(auth);
        toast.success("Logged out successfully!");
        if (navigate) navigate("/login"); // Redirect to login page
    } catch (error) {
        toast.error(`Logout Error: ${error.message}`);
    }
};

export { auth, db, login, signUp, logout };
