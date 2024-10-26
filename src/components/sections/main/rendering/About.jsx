import { motion } from 'framer-motion';
import { ValueCard } from '../../../UI/ValueCard';
export const About = () => {
  const cardItems = [
    {
      id: 1,
      title: 'Écoute',
      description:
        "Nous mettons un point d'honneur à écouter et à comprendre les besoins de chaque animal et de leur propriétaire.",
      icon: '/ecoute.svg'
    },
    {
      id: 2,
      title: 'Collaboration',
      description:
        "Notré équipe de vétérinaire et d'assistant travail en étroite collaboration pour vous offrir des soins complets et adaptés. Chaque vétérinaire est spécialisé dans un domaine différent pour vous garantir des soins de qualité.",
      icon: '/collaboration.svg'
    },
    {
      id: 3,
      title: 'Technologie',
      description:
        'Nous utilisons des technologies modernes pour vous offrir des soins personnalisés et adaptés à chaque animal.',
      icon: '/technologie.svg'
    },
    {
      id: 4,
      title: 'Complémentarité',
      description:
        'Chaque vétérinaire de notre équipe possède une spécialité unique, formant ainsi une équipe complémentaire pour assurer un rétablissement efficace de votre animal.',
      icon: '/complementaire.svg'
    }
  ];

  return (
    <section id="about" className="h-full pt-16 md:h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center md:gap-12 lg:h-full lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: -75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full flex-col items-center justify-center gap-8 pb-24"
        >
          <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-6">
            À propos de nous
          </span>
          <p className="mx-auto pt-2 text-center text-xl md:pt-4 lg:pt-6">
            Bienvenue à la Clinique Vétérinaire de Baillargues, où la santé et
            le bien-être de vos animaux sont notre priorité.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-4/6 lg:grid-cols-2"
        >
          {cardItems.map((item, index) => (
            <motion.div
              className="mx-auto flex w-4/5 justify-center md:w-full"
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ValueCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
