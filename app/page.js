import { Contact } from '../src/components/sections/main/rendering/Contact';
import { Hero } from '../src/components/sections/main/rendering/Hero';
import { Services } from '../src/components/sections/main/rendering/Services';
import { Teams } from '../src/components/sections/main/rendering/Teams';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Teams />
      <Contact />
    </>
  );
}
