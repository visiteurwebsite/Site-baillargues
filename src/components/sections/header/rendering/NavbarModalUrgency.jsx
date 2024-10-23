import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader
} from '@nextui-org/react';
export const NavbarModalUrgency = ({ isOpen, onClose }) => {
  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent className="border-2 border-red-500/70">
        <ModalHeader>Contacter les urgences</ModalHeader>
        <ModalBody className="gap-4">
          <p>📞 Contactez-nous au : [Numéro d&apos;urgence]</p>
          <h2 className="font-bold">⏰ Horaires d&apos;urgence :</h2>
          <p>
            Nos services d&apos;urgence sont disponibles 24h/24 et 7j/7 pour
            répondre aux situations critiques.
          </p>
          <h2 className="font-bold">🚑 Que faire en cas d&apos;urgence :</h2>
          <p>
            Restez calme et rassemblez toutes les informations utiles sur
            l&apos;état de votre animal.
          </p>
          <p>
            Appelez-nous avant de vous déplacer pour que nous puissions préparer
            au mieux sa prise en charge.
          </p>
          <p>
            Si possible, transportez votre animal dans une cage de transport ou
            un contenant sécurisé pour éviter tout risque supplémentaire.
          </p>
          <Button color="danger" variant="flat" onPress={onClose}>
            Close
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
