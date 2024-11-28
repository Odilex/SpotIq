'use client'

import { useState } from 'react'
import { Input } from './input'
import { Button } from './button'
import { useErrorHandler } from '@/hooks/useErrorHandler'
import { useToast } from '@/contexts/toast-context'

export const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { errors, handleError, clearError } = useErrorHandler()
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()
    setIsLoading(true)

    try {
      // Validate email
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      showToast('Successfully subscribed to newsletter!', 'success')
      setEmail('')
    } catch (error) {
      handleError(error, 'email')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          clearError('email')
        }}
        error={errors.email}
        disabled={isLoading}
        placeholder="Enter your email"
      />
      <Button
        type="submit"
        isLoading={isLoading}
        loadingText="Subscribing..."
        className="w-full"
      >
        Subscribe
      </Button>
    </form>
  )
} 