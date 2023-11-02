import '@/presentation/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/presentation/components/Header'

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
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <div className="relative h-[100vh] w-[100vw]">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
