import { AiTwotoneMail } from 'react-icons/ai';
import { IoIosPhonePortrait } from 'react-icons/io';
import { Map } from '../../../UI/Map';
export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col text-left w-1/3 gap-2">
            <h2 className="text-2xl font-bold mb-8 md:text-4xl">
              Nos horaires d&apos;ouverture
            </h2>
            <h3 className="text-xl font-bold">Lundi - Vendredi</h3>
            <p>09:00 - 19:00</p>
            <h2 className="text-xl font-bold">Samedi</h2>
            <p>09:00 - 17:00</p>
            <h3 className="text-xl font-bold">Dimanche</h3>
            <p>Fermé</p>
            <h3 className="text-xl font-bold">Sur rendez-vous</h3>
            <p className="uppercase">Clinique vétérinaire de Baillargues</p>
            <div className="flex flex-col">
              <a className="flex gap-2 items-center" href="tel:+33666666666">
                <IoIosPhonePortrait />
                <p>06 66 66 66 66</p>
              </a>
              <a
                className="flex gap-2 items-center"
                href="mailto:contact@gmail.com"
              >
                <AiTwotoneMail />
                <p>contact@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="w-2/3">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
