import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import teams from '../../../data/teams';
import './style.css';
export function SwiperTeams() {
  return (
    <section
      className="flex flex-col justify-center items-center h-screen w-full bg-gray-100 dark:bg-gray-900 overflow-hidden gap-12 pt-16"
      id="about"
    >
      <div className="flex flex-col justify-left items-start w-full px-4 md:px-12 gap-4">
        <h2 className="text-2xl font-bold text-center md:text-6xl">
          Notre équipe
        </h2>
        <span className="w-[23.5rem] h-[2px] bg-primary"></span>
        <p className="">
          Découvrez les profils de notre équipe de vétérinaires et assistants
        </p>
      </div>
      <div className="w-full pb-20">
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
            <SwiperSlide key={index} className={`swiper-slide slide-${index}`}>
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
