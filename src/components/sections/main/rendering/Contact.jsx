import { AiTwotoneMail } from 'react-icons/ai';
import { IoIosPhonePortrait } from 'react-icons/io';
import { Map } from '../../../UI/Map';
import { Reviews } from './Reviews';
export function Contact() {
  return (
    <section id="contact" className=" py-16">
      <h2 className="inline-block border-b-2 text-center text-2xl font-bold md:text-4xl">
        Testimonials
      </h2>
      <Reviews />
      <div className="container mx-auto pb-16">
        <h2 className="mb-8 pb-16 text-center text-2xl font-bold md:text-4xl">
          Contactez-nous
        </h2>
        <div className="flex">
          <div className="flex w-1/3 flex-col gap-2 text-left">
            <h2 className="mb-8 text-2xl font-bold md:text-4xl">
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
              <a className="flex items-center gap-2" href="tel:+33666666666">
                <IoIosPhonePortrait />
                <p>06 66 66 66 66</p>
              </a>
              <a
                className="flex items-center gap-2"
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
