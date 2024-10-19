import { servicesData } from '../../../../data/services';
import { ServiceCard } from '../../../UI/ServiceCard';

export function Services() {
  return (
    <section
      id="services"
      className=" bg-gray-100 dark:bg-gray-900 lg:h-screen py-10 px-12 lg:px-0"
    >
      <div className="container mx-auto flex flex-col justify-end gap-4 py-12">
        <h2 className="text-2xl font-bold text-right md:text-6xl">
          Nos Services
        </h2>
        <span className="md:w-[23.5rem] border border-primary ml-auto"></span>
        <p className="text-right mb-10 md:mb-20 text-xl">
          Découvrez les services que nous offrons à votre animal de compagnie
          <br /> pour lui assurer une vie saine et heureuse.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 ">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
