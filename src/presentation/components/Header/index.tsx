'use client'

import { Search } from 'lucide-react'
import { NavBar } from './Navigation'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useWindowDimensions } from '@/presentation/hooks/use-window-dimensions'

export function Header() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true)

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
        !isNavbarTransparent
          ? 'animate-slideDownAndFade bg-white shadow-md'
          : 'bg-transparent',
      )}
    >
      <div
        className={twMerge(
          'mx-auto flex h-header max-w-header items-center justify-between bg-transparent 2xl:text-xl',
          isNavbarTransparent ? 'text-white' : 'text-zinc-700',
        )}
      >
        {/* <h1 className="font-serif text-3xl font-semibold">Opinião Amazônia</h1> */}
        <h1
          className={twMerge(
            'bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text font-serif text-3xl font-semibold text-transparent',
          )}
        >
          Opinião Amazônia
        </h1>

        <NavBar isBackgroundTransparent={isNavbarTransparent} />

        <div className="flex items-center gap-6">
          <Search />
          <button className="rounded-sm bg-black px-10 py-2 text-white shadow-sm">
            Entrar
          </button>
        </div>
      </div>
    </header>
  )
}
