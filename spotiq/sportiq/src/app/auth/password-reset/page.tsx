'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await resetPassword(email)
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-md w-full space-y-8 bg-slate/10 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-light">Check your email</h2>
          <p className="text-light/70">
            We've sent password reset instructions to {email}
          </p>
          <Link href="/auth/login">
            <Button className="mt-4">Back to login</Button>
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-md w-full space-y-8 bg-slate/10 p-8 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-light">Reset password</h2>
          <p className="mt-2 text-light/70">
            Enter your email to receive reset instructions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Reset password'}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-light/70">
          Remember your password?{' '}
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
