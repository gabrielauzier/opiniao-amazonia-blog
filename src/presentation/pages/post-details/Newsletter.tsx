'use client'

import * as Input from '@/presentation/components/Form/Input2'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function Newsletter() {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheck() {
    setIsChecked(!isChecked)
  }

  return (
    <section className="mt-24">
      <div className="mx-auto mt-6 flex h-96 max-w-body flex-col items-start justify-center gap-4 bg-newsletter bg-cover bg-left px-5 text-center shadow-lg lg:px-20">
        <h3 className="text-3xl font-medium text-white">
          Se inscreva na nossa Newsletter!
        </h3>
        <span className="text-lg text-white">
          Seja notificado ao sair conteúdos novos.
        </span>

        <Input.Root className="bg-zinc-100 px-3 py-3 lg:py-1">
          <Input.Control placeholder="Entre com seu e-mail"></Input.Control>
          <button className="hidden rounded border border-zinc-300 px-6 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-200 lg:block">
            Enviar
          </button>
        </Input.Root>

        <div className="mt-0 flex w-full items-center justify-center lg:hidden">
          <button className="w-full rounded bg-zinc-900 py-3 font-medium text-zinc-200 shadow-md hover:bg-zinc-700">
            Enviar
          </button>
        </div>

        <button
          className={twMerge(
            'flex w-full cursor-pointer outline-none',
            'focus-visible:bg-zinc-100',
          )}
          onClick={handleCheck}
        >
          <span
            className={twMerge(
              'mr-4 h-fit w-fit rounded border',
              'border-zinc-300 p-0.5',
              'transition duration-300 ease-in-out',
              isChecked && 'border-emerald-500 bg-emerald-500',
            )}
          >
            <Check
              className={twMerge(
                'ease h-4 w-4 scale-0 transition duration-300',
                isChecked && 'scale-100 text-zinc-200',
              )}
            />
          </span>
          <span className="text-start leading-5 text-zinc-200">
            Ao marcar esta caixa, você confirma que leu e concorda com nossos
            termos de uso relativos ao armazenamento dos dados enviados através
            deste formulário.
          </span>
        </button>
      </div>
    </section>
  )
}
