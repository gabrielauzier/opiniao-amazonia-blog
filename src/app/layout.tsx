import '@/common/presentation/styles/globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { RootLayout } from '@/common/presentation/components/layouts/root.layout'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Opinião Amazônia',
  description: 'Blog de opinião',
}

export default function AppRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
