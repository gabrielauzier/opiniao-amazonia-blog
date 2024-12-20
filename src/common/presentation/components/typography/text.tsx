/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComponentProps, ReactNode } from 'react'

import { TypographyHtmlTags } from '../../utils/html-tagst'
import { cn } from '../../utils/classnames'

type TextSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
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

export function Text({
  children,
  className,
  size = 'base',
  as = 'p',
  stronger = false,
  ...rest
}: TextProps) {
  const Tag: any = as

  return (
    <Tag
      className={cn(
        'text-typography-text text-zinc-500',
        `text-${size}`,
        stronger && 'text-zinc-800',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
