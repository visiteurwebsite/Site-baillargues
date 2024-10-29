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
      className="flex size-full flex-col items-center justify-center overflow-hidden bg-cover md:h-screen"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-4">
          Notre équipe
        </span>

        <p className="text-xl">
          Découvrez les profils de notre équipe de vétérinaires et assistants
        </p>
      </motion.div>
      {isMobile ? <SwiperTeamsMobile /> : <SwiperTeamsDesktop />}
    </section>
  );
}
