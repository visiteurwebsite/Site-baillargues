import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react';
import Image from 'next/image';

export function ServiceModal({ isOpen, onClose, service }) {
  if (!service) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent className="">
        <Image
          src={service.backgroundImage}
          alt={service.title}
          width={1000}
          height={1000}
          className="absolute -z-10 size-full object-cover opacity-20"
        />
        <ModalHeader>{service.title}</ModalHeader>
        <ModalBody>
          <p>{service.modalDescription}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={onClose}>
            Fermer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
