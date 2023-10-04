import { Twitter, Facebook, Instagram } from 'lucide-react'

export function SocialMedia() {
  return (
    <div className="flex gap-4">
      <div className="cursor-pointer rounded-full border-2 border-black bg-white p-4 shadow-lg hover:-translate-y-2 hover:scale-105 hover:bg-zinc-300">
        <Twitter className="h-6 w-6" />
      </div>
      <div className="cursor-pointer rounded-full border-2 border-black bg-white p-4 shadow-lg hover:-translate-y-2 hover:scale-105 hover:bg-blue-100">
        <Facebook className="h-6 w-6" />
      </div>
      <div className="cursor-pointer rounded-full border-2 border-black bg-white p-4 shadow-lg hover:-translate-y-2 hover:scale-105 hover:bg-red-100">
        <Instagram className="h-6 w-6" />
      </div>
    </div>
  )
}
