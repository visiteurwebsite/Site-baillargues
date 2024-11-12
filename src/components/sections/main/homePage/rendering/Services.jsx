'use client';

import { motion } from 'framer-motion';
import { servicesData } from '../../../../../data/services';
import { ServiceCard } from '../../../../UI/ServiceCard';
import { ServiceModalLogic } from '../logic/ServiceModalLogic';

export function Services() {
  const { isOpen, selectedService, openModal, closeModal, ServiceModal } =
    ServiceModalLogic();

  return (
    <section id="services" className="px-10 lg:px-24">
      <div className="container mx-auto flex flex-col justify-center gap-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <span className="inline-block border-b-2 border-primary bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-6xl lg:pb-4">
            Nos Services
          </span>
          <p className="mb-20 text-center text-xl lg:mb-24">
            Découvrez les services que nous offrons à votre animal de compagnie.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
