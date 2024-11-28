'use client'

import { useState } from 'react'
import { Button, ButtonProps } from './button'
import { LucideIcon } from 'lucide-react'

interface AuthButtonProps extends ButtonProps {
  icon?: LucideIcon
  provider: string
  onAuth: () => Promise<void>
}

export function AuthButton({ 
  icon: Icon, 
  provider, 
  onAuth, 
  children, 
  ...props 
}: AuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleAuth = async () => {
    setIsLoading(true)
    try {
      await onAuth()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleAuth}
      disabled={isLoading}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {isLoading ? `Signing in with ${provider}...` : children}
    </Button>
  )
} 