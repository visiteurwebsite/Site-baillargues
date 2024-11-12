'use client';
import { motion } from 'framer-motion';
import { AiTwotoneMail } from 'react-icons/ai';
import { IoIosPhonePortrait } from 'react-icons/io';
import { Map } from '../../../../UI/Map';
import { Reviews } from './Reviews';

export function Contact() {
  return (
    <section id="contact" className="relative mx-6 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <span className="inline-block border-b-2 border-primary bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 text-2xl font-bold text-transparent md:text-6xl lg:pb-4">
          Nos clients parlent de nous
        </span>
        <p className="pb-24 text-center text-xl lg:pb-0">
          Quoi de mieux que les avis de nos clients pour vous donner confiance
          en nous ?
        </p>
      </motion.div>
      <Reviews />
      <div className="relative">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text pb-4 text-center text-4xl font-bold text-transparent md:text-6xl lg:pb-16"
          >
            Contactez-nous
          </motion.h2>
          <div className="flex flex-col lg:h-[30rem] lg:flex-row">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-2 text-center lg:w-1/3 lg:pb-16 lg:text-left"
            >
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
                  className="flex items-center justify-center gap-2 pb-6 lg:justify-start"
                  href="mailto:contact@gmail.com"
                >
                  <AiTwotoneMail />
                  <p className="">contact@gmail.com</p>
                </a>
              </div>
            </motion.div>
            <div className="w-full lg:w-2/3">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
