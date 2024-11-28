import { useState } from 'react'
import { useToast } from '@/contexts/toast-context'

interface ErrorState {
  [key: string]: string
}

export const useErrorHandler = () => {
  const [errors, setErrors] = useState<ErrorState>({})
  const { showToast } = useToast()

  const handleError = (error: unknown, field?: string) => {
    if (error instanceof Error) {
      if (field) {
        setErrors(prev => ({ ...prev, [field]: error.message }))
      } else {
        showToast(error.message, 'error')
      }
    } else if (typeof error === 'string') {
      if (field) {
        setErrors(prev => ({ ...prev, [field]: error }))
      } else {
        showToast(error, 'error')
      }
    } else {
      showToast('An unexpected error occurred', 'error')
    }
  }

  const clearError = (field?: string) => {
    if (field) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    } else {
      setErrors({})
    }
  }

  return { errors, handleError, clearError }
} 