import { Search } from 'lucide-react'
import { Brand } from './brand'
import { Navigation } from './navigation'

export function Header() {
  return (
    <header>
      <div className="flex h-20 items-center justify-center bg-green-800 px-3 xl:px-0">
        <div className="relative flex w-full max-w-[1200px] items-center justify-center">
          <Brand />

          <div className="absolute right-0">
            <Search className="text-white"></Search>
          </div>
        </div>
      </div>

      <div className="h-2 border-b-2 border-green-800"></div>

      <Navigation />
    </header>
  )
}
