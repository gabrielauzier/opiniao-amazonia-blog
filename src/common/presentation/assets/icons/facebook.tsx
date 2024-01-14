import { ComponentProps } from 'react'

export function FacebookIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.777344}
        y={0.777832}
        width={24}
        height={24}
        rx={12}
        fill="#3B5B9C"
      />
      <path
        d="M15.714 13.559l.342-2.173h-2.107V9.974c0-.594.294-1.174 1.235-1.174h.97V6.95a11.771 11.771 0 00-1.709-.147c-1.734 0-2.866 1.043-2.866 2.927v1.656H9.659v2.173h1.921v5.255h2.37V13.56h1.765z"
        fill="#fff"
      />
    </svg>
  )
}
