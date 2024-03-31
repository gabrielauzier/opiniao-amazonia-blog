import Flag from 'react-world-flags'
import { NavigationItem } from './item'

export function Navigation() {
  return (
    <div className="bg-[#f9f9f9]">
      <nav className="mx-auto flex h-12 w-full max-w-[1200px] items-center justify-between">
        <NavigationItem href="/sobre">Sobre nós</NavigationItem>
        <NavigationItem href="/equipe">Equipe</NavigationItem>
        <NavigationItem href="/publicacoes">Publicações</NavigationItem>
        <NavigationItem href="/comercial">Comercial</NavigationItem>
        <NavigationItem href="/" className="flex gap-2">
          <Flag
            className="h-5 w-5 rounded-full object-cover object-center"
            code="BR"
          />{' '}
          PT-BR
        </NavigationItem>
      </nav>
    </div>
  )
}
