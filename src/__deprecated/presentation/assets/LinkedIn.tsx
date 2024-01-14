import { ComponentProps } from 'react'

function SvgComponent(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={24} rx={12} fill="#007BB6" />
      <path
        d="M9.664 16.093V10.57H7.83v5.523h1.834zm-.917-6.277c.64 0 1.038-.425 1.038-.955-.012-.542-.398-.954-1.026-.954-.627 0-1.037.412-1.037.954 0 .53.398.955 1.013.955h.012zm1.932 6.277h1.835v-3.084c0-.165.011-.33.06-.448.133-.33.434-.672.941-.672.664 0 .93.507.93 1.25v2.954h1.833v-3.167c0-1.696-.904-2.486-2.111-2.486-.99 0-1.424.554-1.666.93h.013v-.8H10.68c.023.518 0 5.523 0 5.523z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
