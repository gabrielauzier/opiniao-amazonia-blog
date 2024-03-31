'use client'

import { ReactNode } from 'react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { NavbarProvider } from '@/common/presentation/contexts'

interface AppProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProps) {
  return (
    <NavbarProvider>
      <PrismicPreview repositoryName={repositoryName}>
        {children}
      </PrismicPreview>
    </NavbarProvider>
  )
}
