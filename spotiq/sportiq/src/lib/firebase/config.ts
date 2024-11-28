import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDgLKUugT00tjL7ODhfXWwrx2FMWGRpj9E",
  authDomain: "spotiq-51295.firebaseapp.com",
  projectId: "spotiq-51295",
  storageBucket: "spotiq-51295.firebasestorage.app",
  messagingSenderId: "758161918554",
  appId: "1:758161918554:web:22fb243d62c94978b96663",
  measurementId: "G-L70CTC9LP1"
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

let analytics = null
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && getAnalytics(app))
}

export { app, auth, db, storage, analytics } 