import { faker } from '@faker-js/faker'
import Image from 'next/image'

export function Author() {
  return (
    <section className="px-14">
      <div className="mb-8 mt-12 border-t" />
      <strong className="font-mono font-light tracking-[0.150rem] text-zinc-700">
        SOBRE O AUTOR
      </strong>
      <div className="mb-10 mt-8 flex h-fit w-full gap-2">
        <Image
          src="https://github.com/gabrielauzier.png"
          alt="Imagem do autor"
          width="100"
          height="100"
          className="h-24 w-24 rounded-full"
        />
        <div className="ml-12 flex w-full flex-col">
          <span className="mb-6 text-zinc-800">{faker.person.fullName()}</span>
          <p className="text-zinc-500">{faker.lorem.paragraphs(1)}</p>
        </div>
      </div>
    </section>
  )
}
