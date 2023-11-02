import { BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="h-48 bg-zinc-900 lg:h-36">
      <div className="mx-auto flex h-full max-w-body flex-col items-center justify-center gap-10 px-5 py-14 text-center lg:flex-row lg:justify-between lg:px-0 lg:text-start">
        <div className="flex flex-col">
          <strong className="font-light text-white">
            Design & Desenvolvimento por Gabriel Auzier
          </strong>
          <strong className="font-light text-white">© Opinião Amazônia</strong>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2  ">
            <FaFacebook className="h-6 w-6 text-white" />
            <span className="text-xs text-white">320</span>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <BiLogoTwitter className="h-6 w-6 text-white" />
            <span className="text-xs text-white">1.3mil</span>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <BiLogoInstagram className="h-6 w-6 text-white" />
            <span className="text-xs text-white">4.2mil</span>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <BiLogoYoutube className="h-6 w-6 text-white" />
            <span className="text-xs text-white">943</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
