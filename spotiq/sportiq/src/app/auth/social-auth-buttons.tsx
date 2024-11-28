'use client'

import { AuthButton } from '@/components/ui/auth-button'
import { useAuth } from '@/hooks/useAuth'

export function SocialAuthButtons() {
  const { signInWithGoogle } = useAuth()

  return (
    <div className="space-y-3">
      <AuthButton
        variant="outline"
        provider="Google"
        onAuth={signInWithGoogle}
        className="w-full"
      >
        <svg
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.766 12.2764c0-.9175-.07-1.7935-.2-2.6235H12.24v4.9515h6.4685c-.2785 1.4976-1.1235 2.7676-2.3935 3.6116v3.0024h3.8775c2.269-2.0868 3.5775-5.1664 3.5775-8.9419z"
            fill="#4285F4"
          />
          <path
            d="M12.24 24c3.2365 0 5.9535-1.0687 7.9375-2.9055l-3.8775-3.0024c-1.0745.7189-2.4475 1.1464-4.06 1.1464-3.1235 0-5.7675-2.1089-6.7075-4.9435H1.5195v3.1021C3.4785 21.2555 7.5565 24 12.24 24z"
            fill="#34A853"
          />
          <path
            d="M5.5325 14.2975c-.2415-.7189-.379-1.486-.379-2.2775s.1375-1.5586.379-2.2775V6.6404H1.5195C.5545 8.2889 0 10.1821 0 12.02s.5545 3.7311 1.5195 5.3796l3.813-3.1021z"
            fill="#FBBC05"
          />
          <path
            d="M12.24 4.8345c1.7645 0 3.3465.6056 4.5955 1.7935l3.4415-3.4415C18.205 1.2334 15.488 0 12.24 0 7.5565 0 3.4785 2.7445 1.5195 6.6404L5.5325 9.7425c.94-2.8346 3.584-4.908 6.7075-4.908z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </AuthButton>
    </div>
  )
} 