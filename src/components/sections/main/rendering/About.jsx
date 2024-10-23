export const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col items-start gap-4 text-left lg:pt-10">
        <div className="w-2/4 ">
          <span className="inline-block gap-4 border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-4">
            À propos de nous
          </span>
          <p className=" text-xl">
            Bienvenue à la Clinique Vétérinaire de Baillargues, où la santé et
            le bien-être de vos animaux sont notre priorité. Notre équipe est
            composée de trois vétérinaires passionnés et expérimentés, chacun
            spécialisé dans des domaines complémentaires, afin d’offrir des
            soins complets et adaptés à chaque animal.
            <br />
            <br />
            Nos vétérinaires travaillent en étroite collaboration avec une
            équipe dédiée d&apos;assistants qualifiés pour garantir un service
            de qualité et pour répondre à toutes vos questions, assurer le
            confort de vos animaux et vous accompagner tout au long de votre
            visite à la clinique. Chez nous, chaque animal est traité comme un
            membre de la famille. Nous mettons tout en œuvre pour qu&apos;il se
            sente en sécurité et bien entouré, avec une prise en charge
            personnalisée, respectueuse et adaptée à ses besoins.
          </p>
        </div>
      </div>
    </section>
  );
};
