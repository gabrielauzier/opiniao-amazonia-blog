import { ComponentProps } from 'react'

function SvgComponent(props: ComponentProps<'svg'>) {
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
        fill="#3CF"
      />
      <path
        d="M18.734 8.978c-.396.17-.813.29-1.24.354.2-.034.493-.394.61-.54.178-.219.313-.47.4-.738 0-.02.02-.048 0-.063a.068.068 0 00-.066 0 6.266 6.266 0 01-1.468.57.103.103 0 01-.102-.025 1.426 1.426 0 00-.129-.134 2.672 2.672 0 00-.7-.453 2.463 2.463 0 00-1.092-.18 2.64 2.64 0 00-1.037.285c-.318.174-.597.411-.82.696a2.636 2.636 0 00-.5.998 2.744 2.744 0 00-.025 1.055c0 .06 0 .069-.051.06-2.032-.3-3.7-1.02-5.061-2.57-.06-.068-.091-.068-.14 0-.592.902-.305 2.328.436 3.032.1.094.203.186.31.271a2.542 2.542 0 01-.974-.27c-.057-.038-.088-.018-.09.05a1.68 1.68 0 000 .286 2.59 2.59 0 001.595 2.065c.103.044.211.078.322.1a2.911 2.911 0 01-.955.028c-.068-.014-.094.023-.068.088.419 1.141 1.328 1.49 1.994 1.683.092.014.183.014.285.037l-.017.017c-.196.36-.991.602-1.356.728-.666.239-1.376.33-2.08.268-.111-.017-.137-.015-.165 0-.029.014 0 .045.03.074a6.819 6.819 0 001.824.827c2.502.69 5.318.182 7.196-1.686 1.476-1.466 1.994-3.488 1.994-5.513 0-.077.094-.122.148-.162.374-.291.703-.635.978-1.021a.3.3 0 00.068-.205c0-.043 0-.035-.054-.012z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent