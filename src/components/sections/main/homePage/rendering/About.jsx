import { motion } from 'framer-motion';
import { cn } from '../../../../../lib/utils';
import { ValueCard } from '../../../../UI/ValueCard';
import DotPattern from '../../../../UI/shadcn/DotPattern';

export const About = () => {
  const cardItems = [
    {
      id: 1,
      title: 'Écoute',
      description:
        "Nous mettons un point d'honneur à écouter et à comprendre les besoins de chaque animal et de leur propriétaire.",
      icon: '/ecoute.png'
    },
    {
      id: 2,
      title: 'Conseils',
      description:
        "Notre équipe de vétérinaire et d'assistant vous propose des conseils personnalisés pour la santé de votre animal.",
      icon: '/advice.png'
    },
    {
      id: 3,
      title: 'Technologie',
      description:
        'Nous utilisons des technologies modernes pour vous offrir des soins personnalisés et adaptés à chaque animal.',
      icon: '/technologie.png'
    },
    {
      id: 4,
      title: 'Attention',
      description:
        'Ici nous portons une attention particulière à tout nos petits patients.',
      icon: '/attention.png'
    }
  ];

  return (
    <section id="about" className="  ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative "
      >
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            ' z-10 [mask-image:linear-gradient(to_top_right,transparent,transparent,white)] '
          )}
        />

        <div className="container mx-auto flex flex-col items-center text-center  ">
          <motion.div
            initial={{ opacity: 0, y: -75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full flex-col items-center gap-8 py-24"
          >
            <span className="inline-block border-b bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-6xl lg:pb-6">
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
                className="z-20 mx-auto flex w-4/5 justify-center md:w-full"
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
      </motion.div>
      <video
        src="/video-baillargues.mp4"
        controls
        className="mx-auto size-3/4 py-24"
        loading="lazy"
      >
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
    </section>
  );
};
