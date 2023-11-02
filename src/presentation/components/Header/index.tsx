'use client'

import { Search } from 'lucide-react'
import { NavBar } from './Navigation'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'

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
        <h1
          className={twMerge(
            'bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text font-serif text-3xl font-semibold text-transparent',
          )}
        >
          Opinião Amazônia
        </h1>

        <NavBar
          isBackgroundTransparent={isNavbarTransparent}
          currentPath={currentPath}
        />

        <div className="flex items-center gap-6">
          <Search />
          <button
            className={twMerge(
              'rounded-sm bg-black px-10 py-2 text-base shadow-sm',
              currentPath === '/'
                ? 'bg-zinc-900 text-zinc-100'
                : 'bg-zinc-100 text-zinc-700',
            )}
          >
            Entrar
          </button>
        </div>
      </div>
    </header>
  )
}
