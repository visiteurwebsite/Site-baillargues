'use client';

import { HeroParallax } from '../../../../UI/Hero-parallax';
import { SwiperTeams } from '../../../../UI/SwiperTeams/SwiperTeams';
import { About } from './About';
import { Contact } from './Contact';
import { FAQ } from './FAQ';
import { Hero } from './Hero';
import { Services } from './Services';

export function Main() {
  return (
    <main>
      <Hero />
      <About />
      <SwiperTeams />
      <Services />
      <HeroParallax />
      <Contact />
      <FAQ />
    </main>
  );
}
