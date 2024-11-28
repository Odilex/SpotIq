'use client'

import { useState, useEffect } from 'react'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase/config'
import { useRouter } from 'next/navigation'
import { useToast } from '@/contexts/toast-context'

export interface UserData {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  role: 'user' | 'admin'
}

export function useAuth() {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { showToast } = useToast()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          role: userDoc.exists() ? userDoc.data().role : 'user'
        }
        setUser(userData)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [auth, db])

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, { displayName: name })
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email,
        displayName: name,
        role: 'user',
        createdAt: new Date().toISOString()
      })
      showToast('Account created successfully!', 'success')
      router.push('/dashboard')
    } catch (error: any) {
      showToast(error.message, 'error')
      throw error
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      showToast('Signed in successfully!', 'success')
      router.push('/dashboard')
    } catch (error: any) {
      showToast(error.message, 'error')
      throw error
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const { user } = await signInWithPopup(auth, provider)
      
      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid))
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          role: 'user',
          createdAt: new Date().toISOString()
        })
      }
      
      showToast('Signed in with Google successfully!', 'success')
      router.push('/dashboard')
    } catch (error: any) {
      showToast(error.message, 'error')
      throw error
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
      showToast('Password reset email sent!', 'success')
    } catch (error: any) {
      showToast(error.message, 'error')
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      showToast('Signed out successfully!', 'success')
      router.push('/')
    } catch (error: any) {
      showToast(error.message, 'error')
      throw error
    }
  }

  return {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    resetPassword,
    logout
  }
} 