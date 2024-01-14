import { ComponentProps } from 'react'

export function MediumIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={24} rx={12} fill="#000" />
      <path
        d="M12.864 12.32c0 2.056-1.694 3.724-3.792 3.724S5.28 14.376 5.28 12.321c0-2.055 1.694-3.724 3.792-3.724s3.792 1.669 3.792 3.724zm4.154 0c0 1.932-.85 3.502-1.896 3.502-1.045 0-1.896-1.57-1.896-3.501 0-1.932.851-3.502 1.896-3.502s1.896 1.562 1.896 3.502zm1.702 0c0 1.735-.295 3.14-.665 3.14-.371 0-.666-1.405-.666-3.14 0-1.734.295-3.139.666-3.139.37 0 .665 1.405.665 3.14z"
        fill="#fff"
      />
    </svg>
  )
}
