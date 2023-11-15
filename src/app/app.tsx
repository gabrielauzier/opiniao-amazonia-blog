'use client'

import { ReactNode } from 'react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { NavbarProvider } from '@/presentation/contexts/navbar-context'

interface AppProps {
  children: ReactNode
}

export function App({ children }: AppProps) {
  return (
    <NavbarProvider>
      <PrismicPreview repositoryName={repositoryName}>
        {children}
      </PrismicPreview>
    </NavbarProvider>
  )
}
