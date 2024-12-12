'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class AuthErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Auth error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <motion.div
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#191D23] to-[#57707A] px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center bg-black p-6 rounded-lg shadow-lg">
            <motion.h2
              className="text-2xl font-bold text-light mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Something went wrong
            </motion.h2>
            <motion.p
              className="text-light mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We encountered an error while processing your request. Please try again.
            </motion.p>
            <Button
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 bg-[#57707A] hover:bg-[#7B818C] text-[#DEDCDC] rounded-full"
            >
              Try again
            </Button>
          </div>
        </motion.div>
      )
    }

    return this.props.children
  }
} 