import { ReactElement } from 'react'

interface SocialMediaProps {
  icon: ReactElement
  name: string
  infoText: string
  infoData: string
}

export function SocialMedia({
  icon,
  name,
  infoText,
  infoData,
}: SocialMediaProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {icon}
      <span className="mb-1 mt-2 text-sm text-zinc-700">{name}</span>
      <span className="flex flex-col items-center gap-0 text-sm leading-4 text-zinc-500">
        {infoData}
        <span className="text-xs text-zinc-400">{infoText}</span>
      </span>
    </div>
  )
}
