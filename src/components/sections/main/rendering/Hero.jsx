'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { ArrowDown } from '../../../UI/Icons';

export function Hero() {
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });

  return (
    <section
      id="hero"
      className="relative flex h-[85vh] items-center justify-center pt-16 md:h-screen"
    >
      <Image
        src="/equipe.jpg"
        alt="image de l'équipe vétérinaire"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={65}
        priority
        className="z-0"
      />
      <div className="relative z-10 flex w-3/4 flex-col items-center justify-center sm:w-1/2 lg:w-full lg:flex-row">
        <div className="absolute inset-y-0 size-full rounded-xl backdrop-blur-md lg:w-1/2"></div>
        <div className="relative flex flex-col items-center gap-2 rounded-xl border-b-2 border-primary p-4 text-center sm:gap-4 sm:p-6 lg:w-2/4 lg:flex-row lg:gap-6">
          {!isMobile ? (
            <>
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/6"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-lg font-bold text-white md:text-justify lg:text-left lg:text-2xl">
                  Des soins vétérinaires personnalisés pour votre animal de
                  compagnie
                </h1>
                <p className="text-justify text-lg text-white">
                  Notre équipe est composée de trois vétérinaires passionnés et
                  expérimentés, chacun spécialisé dans des domaines
                  complémentaires, afin d&apos;offrir des soins complets et
                  adaptés à chaque animal. Nos vétérinaires travaillent en
                  étroite collaboration avec une équipe dédiée d&apos;assistants
                  qualifiés pour garantir un service de qualité et pour répondre
                  à toutes vos questions.
                </p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center text-2xl font-bold text-white">
                Clinique vétérinaire de Baillargues
              </h1>
              <p className="text-center text-lg text-white">
                Des soins vétérinaires personnalisés pour votre animal de
                compagnie
              </p>
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-5 z-10 flex w-full justify-center">
        <ArrowDown size={24} color="white" />
      </div>
    </section>
  );
}
