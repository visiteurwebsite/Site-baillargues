'use client';
import { motion } from 'framer-motion';
import { AiTwotoneMail } from 'react-icons/ai';
import { IoIosPhonePortrait } from 'react-icons/io';
import { Map } from '../../../UI/Map';
import { Reviews } from './Reviews';

export function Contact() {
  return (
    <section id="contact" className="lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-4">
          Nos clients parlent de nous
        </span>
        <p className="mb-20 text-center text-xl ">
          Quoi de mieux que les avis de nos clients pour vous donner confiance
          en nous ?
        </p>
      </motion.div>
      <Reviews />
      <div className="container mx-auto lg:pb-16">
        <h2 className="mb-8 pb-4 text-center text-2xl font-bold md:text-4xl lg:pb-16">
          Contactez-nous
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-2 text-center lg:w-1/3 lg:pb-16 lg:text-left">
            <h2 className="mb-8 text-2xl font-bold md:text-4xl">
              Nos horaires d&apos;ouverture
            </h2>
            <h3 className="text-xl font-bold">Lundi - Vendredi</h3>
            <p>09:00 - 19:00</p>
            <h2 className="text-xl font-bold">Samedi</h2>
            <p>09:00 - 17:00</p>
            <h3 className="text-xl font-bold">Dimanche</h3>
            <p>Fermé</p>
            <h3 className="text-xl font-semibold">Sur rendez-vous</h3>
            <p className="py-4 font-bold uppercase">
              Clinique vétérinaire de Baillargues
            </p>
            <div className="flex flex-col">
              <a
                className="flex items-center justify-center gap-2 pb-4 text-center lg:justify-start "
                href="tel:+33666666666"
              >
                <IoIosPhonePortrait />
                <p>06 66 66 66 66</p>
              </a>
              <a
                className="flex items-center justify-center gap-2 lg:justify-start"
                href="mailto:contact@gmail.com"
              >
                <AiTwotoneMail />
                <p>contact@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
