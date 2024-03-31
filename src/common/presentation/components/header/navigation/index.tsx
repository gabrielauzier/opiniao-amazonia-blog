import Flag from 'react-world-flags'
import { NavigationItem } from './item'

export function Navigation() {
  return (
    <div className="hidden bg-[#f9f9f9] shadow-sm md:block">
      <nav className="mx-auto flex h-12 w-full max-w-[1200px] items-center justify-between px-3 xl:px-0">
        <NavigationItem href="/amazonia">Amazônia</NavigationItem>
        <NavigationItem href="/equipe">Equipe</NavigationItem>
        <NavigationItem href="/leitor">Leitor</NavigationItem>
        <NavigationItem href="/imagens">Imagens</NavigationItem>
        <NavigationItem href="/posts">Publicações</NavigationItem>
        <NavigationItem href="/comercial">Comercial</NavigationItem>
        <NavigationItem href="/" className="flex gap-2">
          <Flag
            className="h-5 w-5 rounded-full object-cover object-center"
            code="BR"
          />
          PT-BR
        </NavigationItem>
      </nav>
    </div>
  )
}
