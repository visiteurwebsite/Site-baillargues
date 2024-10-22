import { Modal, ModalContent, ModalHeader } from '@nextui-org/react';

export const NavbarModalUrgency = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Urgence</ModalHeader>
        {/* Ajoutez ici le contenu de votre modale */}
      </ModalContent>
    </Modal>
  );
};
