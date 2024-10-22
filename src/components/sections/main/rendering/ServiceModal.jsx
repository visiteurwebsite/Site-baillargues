import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@nextui-org/react';

export function ServiceModal({ isOpen, onClose, service }) {
  if (!service) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{service.title}</ModalHeader>
        <ModalBody>
          <p>{service.description}</p>
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
