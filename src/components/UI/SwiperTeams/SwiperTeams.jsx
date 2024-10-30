/* eslint-disable tailwindcss/no-custom-classname */
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { SwiperTeamsDesktop } from './SwiperTeamsDesktop';
import { SwiperTeamsMobile } from './SwiperTeamsMobile';

export function SwiperTeams() {
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });
  return (
    <section
      className="flex size-full flex-col items-center justify-center overflow-hidden bg-cover pt-8 md:h-screen lg:pt-16"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto flex flex-col items-center justify-center gap-4 py-8 text-center lg:py-16"
      >
        <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-4">
          Notre équipe
        </span>

        <p className="pb-4 text-xl lg:pb-10">
          Découvrez les profils de notre équipe de vétérinaires et assistants
        </p>
      </motion.div>
      {isMobile ? <SwiperTeamsMobile /> : <SwiperTeamsDesktop />}
    </section>
  );
}
