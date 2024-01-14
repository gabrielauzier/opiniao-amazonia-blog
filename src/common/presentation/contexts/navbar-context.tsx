'use client'

import { usePathname } from 'next/navigation'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const NAVBAR_HEIGHT = 80 /* 5rem */
type NavbarState = 'transparent' | 'white' | 'black'

interface NavbarContextData {
  navbarState: NavbarState
  isMobileScreen: boolean
}

export const NavbarContext = createContext({} as NavbarContextData)

interface NavbarProviderProps {
  children: ReactNode
}

const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [navbarState, setNavbarState] = useState<NavbarState>('transparent')
  const [mustBeTransparentOnTop, setMustBeTransparentOnTop] = useState(false)
  const currentPath = usePathname()

  function handleNavbarBackgroundChanging() {
    if (window.scrollY >= NAVBAR_HEIGHT) {
      currentPath === '/' ? setNavbarState('white') : setNavbarState('black')
    } else {
      mustBeTransparentOnTop
        ? setNavbarState('transparent')
        : setNavbarState('black')
    }
  }

  useEffect(() => {
    setMustBeTransparentOnTop(currentPath === '/' || currentPath === '/about')
    handleNavbarBackgroundChanging()
  }, [currentPath])

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarBackgroundChanging)
  })

  return (
    <NavbarContext.Provider
      value={{
        navbarState,
        isMobileScreen: false,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

const useNavbar = () => useContext(NavbarContext)

export { NavbarProvider, useNavbar }
