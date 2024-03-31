import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <>{children}</>
      <Footer></Footer>
    </div>
  )
}
