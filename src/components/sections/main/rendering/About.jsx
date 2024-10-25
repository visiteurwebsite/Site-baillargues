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
    <section id="about" className="lg:pt-16">
      <div className="container mx-auto flex flex-col gap-4 text-center lg:pt-10">
        <div className="relative w-full flex-col items-center justify-center gap-8 pb-16">
          <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-6">
            À propos de nous
          </span>
          <p className="mx-auto w-1/3 pt-6 text-center text-xl">
            Bienvenue à la Clinique Vétérinaire de Baillargues, où la santé et
            le bien-être de vos animaux sont notre priorité.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {cardItems.map((item) => (
            <ValueCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
