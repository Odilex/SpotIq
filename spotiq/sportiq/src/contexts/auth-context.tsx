'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  OAuthProvider
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase/config'
import { useRouter } from 'next/navigation'
import { useToast } from './toast-context'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithFacebook: () => Promise<void>
  signInWithTwitter: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  verifyEmail: () => Promise<void>
  logout: () => Promise<void>
  signInWithApple: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { showToast } = useToast()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleAuthError = (error: any) => {
    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'No account found with this email',
      'auth/wrong-password': 'Invalid password',
      'auth/email-already-in-use': 'Email already registered',
      'auth/weak-password': 'Password should be at least 6 characters',
      'auth/invalid-email': 'Invalid email address',
      'auth/popup-closed-by-user': 'Sign in cancelled',
    }
    
    const message = error.code ? (errorMessages[error.code] || error.code.replace('auth/', '').replace(/-/g, ' ')) : error.message
    showToast(message, 'error')
  }

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, { displayName: name })
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email,
        displayName: name,
        role: 'user',
        createdAt: new Date().toISOString(),
        emailVerified: false
      })
      await sendEmailVerification(user)
      showToast('Account created! Please check your email to verify your account.', 'success')
      router.push('/dashboard')
    } catch (error) {
      handleAuthError(error)
      throw error
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      showToast('Successfully signed in!', 'success')
    } catch (error: any) {
      showToast(error.message, 'error')
      throw error
    }
  }

  const handleSocialAuth = async (provider: any) => {
    try {
      const { user } = await signInWithPopup(auth, provider)
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
      
      showToast('Signed in successfully!', 'success')
      router.push('/dashboard')
    } catch (error) {
      handleAuthError(error)
      throw error
    }
  }

  const signInWithGoogle = () => handleSocialAuth(new GoogleAuthProvider())
  const signInWithFacebook = () => handleSocialAuth(new FacebookAuthProvider())
  const signInWithTwitter = () => handleSocialAuth(new TwitterAuthProvider())

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
      showToast('Password reset email sent!', 'success')
    } catch (error) {
      handleAuthError(error)
      throw error
    }
  }

  const verifyEmail = async () => {
    try {
      if (user && !user.emailVerified) {
        await sendEmailVerification(user)
        showToast('Verification email sent!', 'success')
      }
    } catch (error) {
      handleAuthError(error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      showToast('Successfully signed out!', 'success')
    } catch (error: any) {
      showToast(error.message, 'error')
      throw error
    }
  }

  const signInWithApple = () => handleSocialAuth(new OAuthProvider('apple.com'))

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithGoogle, signInWithFacebook, signInWithTwitter, resetPassword, verifyEmail, logout, signInWithApple }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 