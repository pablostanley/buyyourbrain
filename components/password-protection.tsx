'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PasswordProtectionProps {
  children: React.ReactNode
}

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const CORRECT_PASSWORD = 'udemy4ever'

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('siteAuthenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      setError(false)
      sessionStorage.setItem('siteAuthenticated', 'true')
    } else {
      setError(true)
      setPassword('')
    }
  }

  if (isLoading) {
    return null // Don't render anything while checking auth
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              🧠 Access Required
            </CardTitle>
            <CardDescription className="text-center">
              Please enter the password to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                  }}
                  className={error ? 'border-red-500' : ''}
                  autoFocus
                />
                {error && (
                  <p className="text-sm text-red-500">
                    Incorrect password. Please try again.
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Access Site
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}