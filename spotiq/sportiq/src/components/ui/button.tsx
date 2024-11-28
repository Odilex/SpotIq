import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { LoadingSpinner } from './loading-states'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  loadingText?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', isLoading, loadingText, children, disabled, ...props }, ref) => {
    const baseStyles = 'rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate/50'
    
    const variants = {
      default: 'bg-slate text-light hover:bg-slate/90',
      outline: 'border-2 border-slate text-slate hover:bg-slate hover:text-light',
      ghost: 'text-slate hover:bg-slate/10'
    }
    
    const sizes = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-6 py-2 text-base',
      lg: 'px-8 py-3 text-lg'
    }
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} 
          ${isLoading ? 'cursor-not-allowed opacity-80' : ''}`}
        disabled={disabled || isLoading}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          {isLoading && <LoadingSpinner />}
          {isLoading ? loadingText || 'Loading...' : children}
        </div>
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export { Button }