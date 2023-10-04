import { Image as Photo } from 'lucide-react'
import Link from 'next/link'

export function PostPreview() {
  return (
    <Link href="/post">
      <div className="flex gap-4 pb-2 pt-8">
        <div className="flex w-3/4 flex-col">
          <div className="mb-5 flex gap-4">
            <span className="font-sm text-zinc-500">4 dias atrás</span>
            <span className="font-sm text-zinc-500">·</span>
            <span className="font-sm text-zinc-500">3 min de leitura</span>
          </div>
          <h2 className="text-xl text-zinc-800">
            Sergio Massa pede desculpas pela inflação e promete salvar economia,
            se eleito.
          </h2>
          <p className="pt-2 text-base font-light text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="flex w-1/4 justify-end">
          <div className="p-30 flex h-48 w-48 items-center justify-center bg-orange-100">
            <Photo className="h-18 w-18 text-orange-500" />
          </div>
        </div>
      </div>
    </Link>
  )
}
