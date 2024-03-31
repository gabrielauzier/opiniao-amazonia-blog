import React from 'react'
import { Header } from '../header'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      {children}
    </div>
  )
}
