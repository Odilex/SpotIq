import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAX4SkpE5ygzjead6S9yxGKJJgcNP90jsw",
  authDomain: "lumion-blog.firebaseapp.com",
  projectId: "lumion-blog",
  storageBucket: "lumion-blog.firebasestorage.app",
  messagingSenderId: "594471183421",
  appId: "1:594471183421:web:a21f5601f99f5ec587b654",
  measurementId: "G-FP30XTS8H9"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage }; 