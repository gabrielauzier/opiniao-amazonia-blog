import { User2, Image as Photo } from 'lucide-react'

export default function Post() {
  return (
    <div className="my-28 flex flex-col">
      <h1 className="text-center text-5xl font-bold">Título do post</h1>

      {/* Author */}
      <div className="m-auto mt-8 flex w-fit items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
          <User2 className="h-8 w-8 text-white" />
        </div>
        <div className="flex h-full flex-col">
          <h2 className="font-semibold text-orange-600">Nome do autor</h2>
          <span className="text-sm">30 de outubro de 2023</span>
        </div>
      </div>

      <span className="pb-16 pt-8 text-center text-5xl font-semibold">
        . . .
      </span>

      {/* Post Image */}
      <div className="flex h-[32rem]">
        <div className="p-30 flex h-full w-full items-center justify-center bg-orange-100">
          <Photo className="h-18 w-18 text-orange-500" />
        </div>
      </div>

      {/* Post text */}
      <div className="mt-9 flex flex-col space-y-4 text-lg text-zinc-700">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
          pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio
          enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu
          vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate
          cursus in eu sit pulvinar et.
        </p>
        <p>
          Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et
          rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra
          in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam
          sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac
          maecenas pharetra.
        </p>
        <p>
          Velit scelerisque in dictum non consectetur a erat nam. Massa placerat
          duis ultricies lacus sed turpis tincidunt id aliquet. Nisi est sit
          amet facilisis magna. Venenatis cras sed felis eget velit. Justo donec
          enim diam vulputate ut pharetra. Vitae nunc sed velit dignissim
          sodales ut. Pretium nibh ipsum consequat nisl vel pretium. Id ornare
          arcu odio ut sem nulla pharetra. Odio tempor orci dapibus ultrices in
          iaculis. Ac ut consequat semper viverra nam. Sapien et ligula
          ullamcorper malesuada proin. Vel facilisis volutpat est velit egestas
          dui id ornare. Donec et odio pellentesque diam volutpat commodo. Nisi
          lacus sed viverra tellus in hac habitasse. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec.
        </p>
        <p>
          Augue eget arcu dictum varius duis at consectetur lorem donec. Sit
          amet tellus cras adipiscing. Augue mauris augue neque gravida. Orci ac
          auctor augue mauris augue neque gravida in. Justo laoreet sit amet
          cursus sit amet dictum. Lacinia at quis risus sed. Ut aliquam purus
          sit amet luctus. Imperdiet nulla malesuada pellentesque elit eget
          gravida cum sociis natoque. Nunc faucibus a pellentesque sit.
          Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Dis
          parturient montes nascetur ridiculus mus mauris vitae. Velit ut tortor
          pretium viverra. Tellus mauris a diam maecenas sed enim. Nec tincidunt
          praesent semper feugiat nibh sed. Posuere urna nec tincidunt praesent
          semper. Nunc congue nisi vitae suscipit tellus.
        </p>
        <p>
          Habitasse platea dictumst vestibulum rhoncus est pellentesque.
          Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Ut
          venenatis tellus in metus vulputate eu scelerisque felis. Sed euismod
          nisi porta lorem mollis aliquam ut porttitor leo. Mattis nunc sed
          blandit libero volutpat sed. Sed cras ornare arcu dui vivamus arcu
          felis bibendum. Adipiscing bibendum est ultricies integer quis auctor
          elit. Pellentesque pulvinar pellentesque habitant morbi tristique
          senectus et netus. Volutpat odio facilisis mauris sit amet massa.
          Massa enim nec dui nunc mattis enim ut tellus elementum. Vel fringilla
          est ullamcorper eget nulla facilisi etiam dignissim.
        </p>
        <p>
          Condimentum id venenatis a condimentum vitae sapien pellentesque
          habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet. Metus
          vulputate eu scelerisque felis imperdiet. Nunc non blandit massa enim
          nec dui nunc. Cras adipiscing enim eu turpis egestas pretium aenean
          pharetra magna. Ultricies mi eget mauris pharetra. Ornare lectus sit
          amet est placerat in egestas erat imperdiet. Turpis egestas integer
          eget aliquet nibh praesent tristique magna. Molestie at elementum eu
          facilisis sed odio morbi quis commodo. Sagittis orci a scelerisque
          purus semper. Nunc pulvinar sapien et ligula. Cursus turpis massa
          tincidunt dui ut. Placerat in egestas erat imperdiet. Risus commodo
          viverra maecenas accumsan lacus. Sit amet justo donec enim.
        </p>
      </div>
    </div>
  )
}
