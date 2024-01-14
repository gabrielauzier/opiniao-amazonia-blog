import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi'

export function SocialMediaContainer() {
  return (
    <div className="mx-auto my-6 flex max-w-body items-center justify-center gap-4 px-5 lg:justify-end lg:px-0">
      <a
        className="flex cursor-pointer items-center gap-1 duration-200 ease-in-out hover:-translate-y-1"
        href=""
      >
        <BiLogoFacebook size="1.5rem" color="black" />
        <span className="text-xxs">1.2mil</span>
      </a>
      <a
        className="flex cursor-pointer items-center gap-1 duration-200 ease-in-out hover:-translate-y-1"
        href=""
      >
        <BiLogoTwitter size="1.5rem" color="black" />
        <span className="text-xxs">3.2mil</span>
      </a>
      <a
        className="flex cursor-pointer items-center gap-1 duration-200 ease-in-out hover:-translate-y-1"
        href=""
      >
        <BiLogoInstagram size="1.5rem" color="black" />
        <span className="text-xxs">742</span>
      </a>
      <a
        className="flex cursor-pointer items-center gap-1 duration-200 ease-in-out hover:-translate-y-1"
        href=""
      >
        <BiLogoYoutube size="1.5rem" color="black" />
        <span className="text-xxs">3.4mil</span>
      </a>
    </div>
  )
}
