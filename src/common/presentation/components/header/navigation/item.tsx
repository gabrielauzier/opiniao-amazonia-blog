import { cn } from '@/common/presentation/utils/classnames'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface NavigationItemProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export function NavigationItem({
  href,
  children,
  className,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'font-semibold text-green-800 hover:brightness-125',
        className,
      )}
    >
      {children}
    </Link>
  )
}
