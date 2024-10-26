'use client';

import { motion } from 'framer-motion';
import { servicesData } from '../../../../data/services';
import { ServiceCard } from '../../../UI/ServiceCard';
import { ServiceModalLogic } from '../logic/ServiceModalLogic';

export function Services() {
  const { isOpen, selectedService, openModal, closeModal, ServiceModal } =
    ServiceModalLogic();

  return (
    <section id="services" className="px-12 py-10 lg:h-screen lg:px-24">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <span className="inline-block border-b-2 border-primary pb-2 text-2xl font-bold md:text-6xl lg:pb-4">
            Nos Services
          </span>
          <p className="mb-20 text-center text-xl ">
            Découvrez les services que nous offrons à votre animal de compagnie.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Ajout du délai
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                className="h-full"
                onClick={() => openModal(service)}
              />
            </motion.div>
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
