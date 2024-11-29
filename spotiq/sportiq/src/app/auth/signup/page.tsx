'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SocialAuthButtons } from '@/app/auth/social-auth-buttons'
import { useAuth } from '@/contexts/auth-context'
import { useToast } from '@/contexts/toast-context'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { signUp } = useAuth()
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signUp(email, password, name)
      router.push('/dashboard')
    } catch (error) {
      showToast('Signup failed. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-md w-full space-y-8 bg-slate/10 p-8 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-light">Create account</h2>
          <p className="mt-2 text-light/70">Start your journey with us</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <Input
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign up'}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-light/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-dark text-light/70">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6">
            <SocialAuthButtons />
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-light/70">
          Already have an account?{' '}
          <Link
            href="/auth/login"
            className="font-medium text-light hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  )
}
