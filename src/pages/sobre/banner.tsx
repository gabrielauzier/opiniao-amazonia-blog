import { Heading } from '@/common/presentation/components/typography/heading'

export function Banner() {
  return (
    <section className="shadow-x animate-banner-appearance h-fit w-full bg-banner2 bg-cover transition-all duration-300">
      <div className="mx-auto mt-0 h-screen w-full max-w-[1200px] px-3 pt-5 text-white lg:max-w-body xl:px-0">
        <div className="space-y-3 font-medium text-zinc-100 2xl:w-3/4">
          <Heading className="text-white" size="4xl" stronger>
            Amazônia, uma região de contrastes
          </Heading>
          <p>
            A região amazónica é constituída de uma rica, literalmente, floresta
            pluvial (equatorial). Sua dimensão é continental e alcança 9 países
            da América do Sul. O Brasil detém 62% dela Em seus nove estados
            amazónicos: Amazonas, Acre, Rondônia, Roraima, Pará, Maranhão,
            Amapá, Tocantins e Mato Grosso. É o maior sistema hidrográfico do
            Planeta e domina mais de 70% das águas brasileiras, enquanto o
            Brasil é o maior reservatório de água doce do mundo, com 13%.
          </p>
          <p>
            Com uma fauna e flora diversa possui riqueza incalculável em ativos
            fitoterápicos, minerais e florestais. Para efeito de estimativa, o
            Banco Mundial indicou ser, somente a parte preservada da Floresta
            Amazônica, avaliada em U$ 317 bilhões anual.
          </p>
          <p>
            Contraditoriamente nesse mesmo espaço sobrevivem pessoas em estado
            de pobreza extrema. No Amazonas são 51,42%, no Maranhão 57,90%, Acre
            52,9%, Pará 46,85%, Amapá 46,30%, Roraima 46,16%, Tocantins 35,8%,
            Mato Grosso 23,3% (PNAD/IBGE 2022).
          </p>

          <div>
            <h4 className="mb-4 mt-8 text-2xl font-extrabold">
              Quais são as origens desses fenômenos? <br /> Quais são os
              entraves? Quais são as soluções?
            </h4>
            <p>
              Estimular o debate para compreender os problemas e indicar
              soluções é a missão do Opinião Amazônia. Por meio de artigos,
              entrevistas e reportagens iremos ao encontro dos produtores de
              estudos sobre a realidade amazônica e dos responsáveis por
              iniciativas privadas e dos gestores públicos responsáveis (ou
              irresponsáveis) por politicas públicas visando mudar a situação
              por meio de ações. Nosso objetivo é inclusivo social e
              economicamente. Queremos contribuir para encontrar e viabilizar o
              progresso economico e social das populações, garantindo qualidade
              de vida universal na Amazônia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
