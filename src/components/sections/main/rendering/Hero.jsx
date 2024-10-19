import Image from 'next/image';
import { ArrowDown } from '../../../UI/Icons';
export function Hero() {
  return (
    <section
      id="hero"
      className="bg-equipe bg-cover h-screen lg:bg-top bg-right-top flex justify-center items-center"
    >
      <div className="relative flex justify-center items-center w-3/4 sm:w-1/2 lg:w-full">
        <div className="absolute h-full w-full lg:w-1/2 top-0 bottom-0 bg-zinc-900/40 backdrop-blur-md rounded-xl"></div>
        <div className="relative flex flex-col lg:flex-row items-center  lg:w-2/4 rounded-xl p-4 sm:p-6 border-b-2 border-primary text-center gap-2 sm:gap-4 lg:gap-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/6"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-md sm:text-lg font-bold text-justify  lg:text-2xl lg:text-left">
              Des soins vétérinaires personnalisés pour votre animal de
              compagnie
            </h1>
            <p className="text-lg text-justify">
              Notre équipe expérimentée de vétérinaires et d&apos;assistants est
              dévouée à offrir des soins de qualité supérieure.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 z-10 flex justify-center w-full">
        <ArrowDown size={24} color="white" />
      </div>
    </section>
  );
}
