import Image from 'next/image';
import Link from 'next/link';
import { IoIosPhonePortrait } from 'react-icons/io';
import {
  TiLocation,
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialInstagram
} from 'react-icons/ti';
import { navLinks } from '../../../constant/navlink';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900/80 text-white py-4 flex flex-col items-center justify-center">
      <div className="container flex justify-between">
        <Image src={'/logo.png'} alt="logo" width={100} height={100} />
        <nav className="">
          <ul className="flex flex-col items-left justify-center">
            <h2 className="text-lg font-bold pb-1">Menu</h2>
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-left">
          <h3 className="text-lg font-bold pb-1">Contact</h3>
          <div className="flex flex-col">
            <a className="flex gap-2 items-center" href="tel:+33666666666">
              <IoIosPhonePortrait />
              <p>06 66 66 66 66</p>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <TiLocation />
            <p>
              impasse charles fournier
              <br />
              34560 Baillargues
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t-2 border-gray-200/50 w-11/12 p-4 mt-4">
        <div className="flex gap-8 mb-4">
          <Link
            className="border-2 rounded-full p-1"
            href="https://www.facebook.com/cliniquedebailargues"
          >
            <TiSocialFacebook size={34} className="hover:text-blue-500" />
          </Link>
          <Link
            className="border-2 rounded-full p-1"
            href="https://www.google.com"
          >
            <TiSocialGooglePlus size={34} className="hover:text-blue-500" />
          </Link>
          <Link
            href="https://www.instagram.com/cliniquedebailargues"
            className="border-2 rounded-full p-1"
          >
            <TiSocialInstagram size={34} className="hover:text-blue-500" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; 2024 Clinique Vétérinaire de Baillargues. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

{
  /* <p className="text-2xl font-bold">
  &copy; 2024 Clinique Vétérinaire de Baillargues. Tous droits réservés.
</p> */
}
