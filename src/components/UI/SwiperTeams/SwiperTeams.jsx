/* eslint-disable tailwindcss/no-custom-classname */
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import teams from '../../../data/teams';
import './style.css';
export function SwiperTeams() {
  return (
    <section
      className="flex size-full flex-col items-center justify-center overflow-hidden md:h-screen "
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
      <div className="w-full lg:pb-20">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          grabCursor={true}
          initialSlide={3}
          centeredSlides={true}
          speed={1000}
          slidesPerView={'auto'}
          slideToClickedSlide={true}
          breakpoints={{
            320: {
              spaceBetween: 40
            },
            430: {
              spaceBetween: 50
            },
            580: {
              spaceBetween: 70
            },
            640: {
              spaceBetween: 30
            }
          }}
        >
          {teams.map((team, index) => (
            <SwiperSlide key={index} className={`swiper-slide  slide-${index}`}>
              <div className="title">
                <h2>{team.name}</h2>
                <p className="text-xl font-bold">{team.role}</p>
              </div>
              <div className="content">
                <div className="text">
                  <h3>{team.name}</h3>
                  <p>{team.description}</p>
                </div>
                <div className="genre">
                  <span style={{ '--i': 1 }}>speciality</span>
                  <span style={{ '--i': 2 }}>speciality</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
