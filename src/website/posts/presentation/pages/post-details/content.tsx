import '@/common/presentation/styles/post.css'

interface ContentProps {
  html: any
}

export function Content({ html }: ContentProps) {
  return (
    <div
      className="lg:px-140 mt-7 flex flex-col gap-4 px-12 text-zinc-600 lg:mt-14"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
