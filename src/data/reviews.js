import { FaStar } from 'react-icons/fa';

export const dataReviews = [
  {
    name: 'Catherine Lapierre',
    googleImage: '/catherine.png',
    reviewDescription:
      "Le docteur fut très à l'écoute, et très bienveillant.Il a été très réactif car mon petit chien a dû être opéré en urgence. Beaucoup de gentillesse, de grandes compétences, pour une chirurgie pas très simple. Merci docteur pour avoir réussi à sauver l'oeil de mon petit chien.",
    scoreReview: (
      <div className="flex items-center gap-1">
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
      </div>
    ),
    timeReview: 'Il y a 2 semaines'
  },
  {
    name: 'Ornella',
    googleImage: '/ornella.png',
    reviewDescription:
      "Rendez-vous rapide à avoir, personne à l'écoute des animaux et vraiment soucieux de leur santé. La vétérinaire prend le temps de conseiller,d'expliquer comment faire prendre les médicaments ou installer d'autres dispositifs de santé.",
    scoreReview: (
      <div className="flex items-center gap-1">
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
      </div>
    ),
    timeReview: 'Il y a 1 mois'
  },
  {
    name: 'Hugh Chan',
    googleImage: '/hugh.png',
    reviewDescription:
      "Les vétérinaires étaient très sympathiques et compétents. L’un d’eux a utilisé l’acupuncture et mon chien s’est rapidement rétabli. Ils ont rempli avec plaisir les formulaires d'assurance. Mes chiens adorent leur rendre visite. Quelle surprise !",
    scoreReview: (
      <div className="flex items-center gap-1">
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
      </div>
    ),
    timeReview: 'Il y a 3 mois'
  },
  {
    name: 'Celine Carnet',
    googleImage: '/celine.png',
    reviewDescription:
      "J'ai été envoyé à Baillargues vers le Dr Cerclet par mon vétérinaire qui était au bout de ses limites pour l'œil exorbité de mon cochon d'Inde avec abcès. Le Dr Cerclet a été très professionnel et compétent. Mon cochon d'Inde a rapidement repris de la santé. Je recommande vivement le Dr Cerclet et son équipe.",
    scoreReview: (
      <div className="flex items-center gap-1">
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
      </div>
    ),
    timeReview: 'Il y a 3 semaines'
  },
  {
    name: 'Floriane',
    googleImage: '/floriane.png',
    reviewDescription:
      'Le Dr Moccelin est incroyable ainsi que toute son équipe toujours là pour de bons conseils et de bons soins. Les tarifs sont largement raisonnables. Mais surtout l’humanité est là ainsi que l’empathie. Merci beaucoup.',
    scoreReview: (
      <div className="flex items-center gap-1">
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
        <FaStar color="#FFD700" />
      </div>
    ),
    timeReview: 'Il y a 1 an'
  }
];
