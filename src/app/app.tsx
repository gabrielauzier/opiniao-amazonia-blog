'use client'

import { ReactNode } from 'react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

interface AppProps {
  children: ReactNode
}

export function App({ children }: AppProps) {
  return (
    <PrismicPreview repositoryName={repositoryName}>{children}</PrismicPreview>
  )
}
