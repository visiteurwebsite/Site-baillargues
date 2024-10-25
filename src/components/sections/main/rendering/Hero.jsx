import Image from 'next/image';
import { ArrowDown } from '../../../UI/Icons';
export function Hero() {
  return (
    <section
      id="hero"
      className="bg-equipe flex h-screen items-center justify-center bg-cover bg-right-top lg:bg-top"
    >
      <div className="relative flex w-3/4 items-center justify-center sm:w-1/2 lg:w-full">
        <div className="absolute inset-y-0 size-full rounded-xl bg-zinc-900/40 backdrop-blur-md lg:w-1/2"></div>
        <div className="relative flex flex-col items-center gap-2  rounded-xl border-b-2 border-primary p-4 text-center sm:gap-4 sm:p-6 lg:w-2/4 lg:flex-row lg:gap-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/6"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-justify text-lg font-bold sm:text-lg  lg:text-left lg:text-2xl">
              Des soins vétérinaires personnalisés pour votre animal de
              compagnie
            </h1>
            <p className="text-justify text-lg">
              Notre équipe est composée de trois vétérinaires passionnés et
              expérimentés, chacun spécialisé dans des domaines complémentaires,
              afin d&apos;offrir des soins complets et adaptés à chaque animal.
              Nos vétérinaires travaillent en étroite collaboration avec une
              équipe dédiée d&apos;assistants qualifiés pour garantir un service
              de qualité et pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 z-10 flex w-full justify-center">
        <ArrowDown size={24} color="white" />
      </div>
    </section>
  );
}
