import { Logo } from '@/presentation/assets/Logo'
import { Tags } from './Tags'
import { PostMiniature } from '../Posts/PostMiniature'

export function Aside() {
  return (
    <aside className="absolute left-0 top-0 flex h-[100vh] max-h-screen w-full max-w-[512px] flex-col overflow-hidden px-12 py-8">
      <Logo />

      {/* Categorias */}
      <div className="mt-16">
        <h2 className="mb-5 text-2xl font-bold">Categorias</h2>

        <Tags.Root>
          <Tags.Item text="Política" />
          <Tags.Item text="Negócios" />
          <Tags.Item text="Administração" />
          <Tags.Item text="Economia" />
          <Tags.Item text="Sociedade" />
          <Tags.Item text="Cultura" />
          <Tags.Item text="Publicidade" />
          <Tags.Item text="Manaus" />
        </Tags.Root>
      </div>

      {/* Principais postagens */}
      <div className="mt-16">
        <h2 className="mb-5 text-2xl font-bold">Principais postagens</h2>

        <div className="flex flex-col gap-5">
          <PostMiniature
            title="Cid Gomes é destituído do comando do PDT no Ceará"
            date="13 de setembro de 2023"
          />
          <PostMiniature
            title="Sergio Massa pede desculpas pela inflação e promete salvar economia, se eleito."
            date="11 de setembro de 2023"
          />
          <PostMiniature
            title="Cid Gomes é destituído do comando do PDT no Ceará"
            date="18 de junho de 2023"
          />
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-auto">
        <span className="text-2xl font-semibold">
          Se inscreva na <br /> nossa&nbsp;
          <strong className="cursor-pointer text-brand underline hover:text-brand-hover">
            newsletter!
          </strong>
        </span>
      </div>
    </aside>
  )
}
