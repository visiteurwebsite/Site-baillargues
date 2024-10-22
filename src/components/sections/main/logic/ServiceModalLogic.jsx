'use client';
import { useState } from 'react';
import { ServiceModal } from '../rendering/ServiceModal';

export function ServiceModalLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedService,
    openModal,
    closeModal,
    ServiceModal
  };
}
