'use client'

import { twMerge } from 'tailwind-merge'
import { Menu } from 'lucide-react'

import { LoginButton } from './LoginButton'
import { NavBar } from './Navigation'
import { Logo } from './Logo'

import { useNavbar } from '@/presentation/contexts'

export function Header() {
  const { navbarState } = useNavbar()

  return (
    <header
      className={twMerge(
        'fixed top-0 z-50 h-header w-full px-5 lg:block',
        navbarState === 'white' &&
          'animate-slideDownAndFade bg-white shadow-md',
        navbarState === 'transparent' && 'bg-transparent',
        navbarState === 'black' &&
          'animate-slideDownAndFade bg-zinc-900 text-zinc-200',
      )}
    >
      <div
        className={twMerge(
          'mx-auto flex h-header max-w-header items-center justify-between bg-transparent text-zinc-200 2xl:text-xl',
          navbarState === 'black' ? 'text-zinc-200' : 'text-zinc-700',
        )}
      >
        <Logo />
        <NavBar />
        <LoginButton />

        <button className="lg:hidden">
          <Menu className="h-8 w-8 text-zinc-400" />
        </button>
      </div>
    </header>
  )
}
