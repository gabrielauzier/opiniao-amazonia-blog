import '@/presentation/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/presentation/components/Header'
import { App } from './app'
import { Footer } from '@/presentation/components/Footer'

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
    <App>
      <html lang="en" className="overflow-x-hidden">
        <body className={inter.className}>
          <div className="relative h-[100vh] w-[100vw]">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </App>
  )
}
