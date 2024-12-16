import { BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'
import { Brand } from '../header/brand'

export function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col bg-green-800">
      <div className="mx-auto flex w-full max-w-[1200px] gap-6 pb-20 pt-12">
        <div className="flex flex-col gap-6 px-3 xl:px-0">
          <Brand></Brand>

          <div className="flex gap-5">
            <a href="https://www.facebook.com/profile.php?id=61562060516546&mibextid=ZbWKwL">
              <FaFacebook className="h-6 w-6 text-white" />
            </a>
            {/* <BiLogoTwitter className="h-6 w-6 text-white" /> */}
            <a href="https://www.instagram.com/opiniaoamazonia?igsh=cjY1bnVjMWo1OG9u">
              <BiLogoInstagram className="h-6 w-6 text-white" />
            </a>
            {/* <BiLogoYoutube className="h-6 w-6 text-white" /> */}
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-green-900 py-5">
        <strong className=" font-light text-white">
          Copyright © 2024 - Opinião Amazônia
        </strong>
      </div>
    </footer>
  )
}
