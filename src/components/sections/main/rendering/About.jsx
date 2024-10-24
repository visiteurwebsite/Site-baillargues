import { CardStack } from '../../../UI/CardStack';

export const About = () => {
  const cardItems = [
    {
      id: 1,
      title: 'Écoute',
      description:
        "Nous mettons un point d'honneur à écouter et à comprendre les besoins de chaque animal et de leur propriétaire.",
      icon: '/ecoute1.png'
    },
    {
      id: 2,
      title: 'Collaboration',
      description:
        "Notré équipe de vétérinaire et d'assistant travail en étroite collaboration pour vous offrir des soins complets et adaptés. Chaque vétérinaire est spécialisé dans un domaine différent pour vous garantir des soins de qualité.",
      icon: '/veterinaire1.png'
    },
    {
      id: 3,
      title: 'Technologie',
      description:
        'Nous utilisons des technologies modernes pour vous offrir des soins personnalisés et adaptés à chaque animal.',
      icon: '/technologie.png'
    }
  ];

  return (
    <section id="about" className="lg:pt-16">
      <div className="container mx-auto flex flex-col items-start gap-4 text-left lg:pt-10">
        <div className="relative w-full flex-col gap-8 pb-16">
          <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-6">
            À propos de nous
          </span>
          <p className="w-1/3 pt-6  text-justify text-xl">
            Bienvenue à la Clinique Vétérinaire de Baillargues, où la santé et
            le bien-être de vos animaux sont notre priorité.
          </p>
        </div>
        <div className="flex py-32">
          <div className="flex w-full flex-row">
            <div className="flex w-1/2 justify-center">
              <CardStack items={cardItems} />
            </div>
            <p className="w-1/2 pt-9 text-justify text-xl">
              Notre équipe est composée de trois vétérinaires passionnés et
              expérimentés, chacun spécialisé dans des domaines complémentaires,
              afin d&apos;offrir des soins complets et adaptés à chaque animal.
              Nos vétérinaires travaillent en étroite collaboration avec une
              équipe dédiée d&apos;assistants qualifiés pour garantir un service
              de qualité et pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
