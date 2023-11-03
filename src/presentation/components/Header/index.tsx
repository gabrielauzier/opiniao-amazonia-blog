'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { LoginButton } from './LoginButton'
import { NavBar } from './Navigation'
import { Logo } from './Logo'

export function Header() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true)
  const currentPath = usePathname()

  function handleNavbarBackgroundChanging() {
    if (window.scrollY >= 80) {
      setIsNavbarTransparent(false)
    } else {
      setIsNavbarTransparent(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarBackgroundChanging)
  })

  return (
    <header
      className={twMerge(
        'fixed top-0 z-50 hidden h-header w-full lg:block',
        !isNavbarTransparent && currentPath === '/'
          ? 'animate-slideDownAndFade bg-white shadow-md'
          : 'bg-transparent',
        currentPath !== '/' &&
          'animate-slideDownAndFade bg-zinc-900 text-zinc-200',
      )}
    >
      <div
        className={twMerge(
          'mx-auto flex h-header max-w-header items-center justify-between bg-transparent text-zinc-200 2xl:text-xl',
          !isNavbarTransparent && currentPath === '/' && 'text-zinc-700',
          currentPath !== '/' && 'text-zinc-200',
        )}
      >
        <Logo />
        <NavBar isBackgroundTransparent={isNavbarTransparent} />
        <LoginButton />
      </div>
    </header>
  )
}
