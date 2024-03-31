import '@/common/presentation/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header, Footer } from '@/common/presentation/components'
import { AppProviders } from '@/common/presentation/contexts/app-context-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Opinião Amazônia | Início',
  description: 'Blog de opinião',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProviders>
      <html lang="en" className="overflow-x-hidden">
        <body className={inter.className}>
          <div className="relative min-h-screen w-full">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </AppProviders>
  )
}
