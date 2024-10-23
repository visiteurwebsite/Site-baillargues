import { About } from './About';
import { Contact } from './Contact';
import { Hero } from './Hero';
import { Services } from './Services';
import { Teams } from './Teams';

export function Main() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Teams />
      <Contact />
    </main>
  );
}
