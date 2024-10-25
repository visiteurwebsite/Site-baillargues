'use client';

import { servicesData } from '../../../../data/services';
import { ServiceCard } from '../../../UI/ServiceCard';
import { ServiceModalLogic } from '../logic/ServiceModalLogic';

export function Services() {
  const { isOpen, selectedService, openModal, closeModal, ServiceModal } =
    ServiceModalLogic();

  return (
    <section id="services" className=" px-12 py-10 lg:h-screen lg:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-12">
        <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-4">
          Nos Services
        </span>

        <p className="mb-10 text-center text-xl md:mb-20">
          Découvrez les services que nous offrons à votre animal de compagnie
          <br /> pour lui assurer une vie saine et heureuse.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              onClick={() => openModal(service)}
            />
          ))}
        </div>
      </div>
      <ServiceModal
        isOpen={isOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </section>
  );
}
