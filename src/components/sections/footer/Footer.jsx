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
    <footer className="flex flex-col items-center justify-center border-t-2 border-primary/30 bg-secondary/30 py-4 text-white">
      <div className="container flex justify-between">
        <Image src={'/logo.png'} alt="logo" width={100} height={100} />
        <nav className="">
          <ul className=" flex flex-col justify-center">
            <h2 className="pb-1 text-lg font-bold">Menu</h2>
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className=" flex flex-col">
          <h3 className="pb-1 text-lg font-bold">Contact</h3>
          <div className="flex flex-col">
            <a className="flex items-center gap-2" href="tel:+33666666666">
              <IoIosPhonePortrait />
              <p>06 66 66 66 66</p>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <TiLocation />
            <p>
              impasse charles fournier
              <br />
              34560 Baillargues
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-11/12 flex-col items-center justify-center  border-t-2 border-primary/30 p-4 text-center">
        <div className="flex justify-center gap-1">
          <Link
            className="rounded-full border-2 p-1"
            href="https://www.facebook.com/cliniquedebailargues"
          >
            <TiSocialFacebook size={34} className="hover:text-blue-500" />
          </Link>
          <Link
            className="rounded-full border-2 p-1"
            href="https://www.google.com"
          >
            <TiSocialGooglePlus size={34} className="hover:text-blue-500" />
          </Link>
          <Link
            href="https://www.instagram.com/cliniquedebailargues"
            className="rounded-full border-2 p-1"
          >
            <TiSocialInstagram size={34} className="hover:text-blue-500" />
          </Link>
        </div>
      </div>
      <div className="relative">
        <p className="text-sm">
          &copy; 2024 Clinique Vétérinaire de Baillargues. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
