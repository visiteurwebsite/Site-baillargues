'use client';

import { NavbarModalUrgency } from '../rendering/NavbarModalUrgency';
import { useState } from 'react';

export function NavbarModalUrgencyLogic({ children }) {
  const [isUrgencyModalOpen, setIsUrgencyModalOpen] = useState(false);

  const openModal = () => setIsUrgencyModalOpen(true);
  const closeModal = () => setIsUrgencyModalOpen(false);

  return (
    <>
      {children(openModal)}
      <NavbarModalUrgency isOpen={isUrgencyModalOpen} onClose={closeModal} />
    </>
  );
}
