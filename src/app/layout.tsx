import { Logo } from '@/presentation/assets/Logo'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Aside } from '@/presentation/components/Aside'
import { Switch } from '@/presentation/components/Aside/Switch'
import { SocialMedia } from '@/presentation/components/Aside/SocialMedia'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog | Next Tailwind',
  description: 'Blog app made with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={poppins.className}>
        <div className="h-[100vh] w-[100vw] overflow-y-auto">
          <Aside />
          <div className="m-auto w-full px-[512px]">
            <main className="m-auto h-full w-full min-w-[900px] max-w-body pt-8">
              {children}
            </main>
            <div></div>
          </div>
          <div className="absolute right-0 top-0 flex h-full flex-col items-end justify-between px-12 py-8">
            <Switch />
            <SocialMedia />
          </div>
        </div>
      </body>
    </html>
  )
}
