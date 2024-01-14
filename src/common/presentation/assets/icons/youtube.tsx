import { ComponentProps } from 'react'

export function YoutubeIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={24} rx={12} fill="red" />
      <path
        d="M18.675 8.699a1.718 1.718 0 00-1.21-1.213C16.4 7.2 12.12 7.2 12.12 7.2s-4.276 0-5.345.286a1.718 1.718 0 00-1.21 1.213C5.28 9.768 5.28 12 5.28 12s0 2.232.285 3.301c.157.59.62 1.054 1.21 1.213 1.069.286 5.345.286 5.345.286s4.279 0 5.345-.286a1.718 1.718 0 001.21-1.213c.285-1.069.285-3.301.285-3.301s0-2.232-.285-3.301z"
        fill="#fff"
      />
      <path d="M10.754 14.057L14.307 12l-3.553-2.057v4.114z" fill="red" />
    </svg>
  )
}
