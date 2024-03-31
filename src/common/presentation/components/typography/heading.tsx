/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComponentProps, ReactNode } from 'react'

import { TypographyHtmlTags } from '../../utils/html-tagst'
import { cn } from '../../utils/classnames'

type TextSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

export interface TextProps extends ComponentProps<'p'> {
  children?: ReactNode
  size?: TextSize
  as?: TypographyHtmlTags
  stronger?: boolean
}

export function Heading({
  children,
  className,
  size = '2xl',
  as = 'h2',
  stronger = false,
  ...rest
}: TextProps) {
  const Tag: any = as

  return (
    <Tag
      className={cn(
        'text-3xl font-semibold text-zinc-700',
        `lg:text-${size}`,
        stronger && 'font-bold text-zinc-800',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
