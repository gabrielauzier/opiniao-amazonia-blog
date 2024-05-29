import { Search } from 'lucide-react'
import { Brand } from './brand'
import { Navigation } from './navigation'
import { Button } from '../ui/button'

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

      <div className="text-primary-foreground bg-sky-900 shadow-sm">
        <div className="m-auto flex max-w-[900px] items-center justify-between py-2">
          <p>
            Oferta Especial de lançamento: inscreva-se gratuitamente para
            receber nossa newsletter
          </p>
          <Button className="text-foreground bg-yellow-400 text-xs font-bold hover:bg-yellow-300">
            INSCREVA-SE
          </Button>
        </div>
      </div>
    </header>
  )
}
