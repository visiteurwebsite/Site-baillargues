'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { dataReviews } from '../../../../data/reviews';

function ReviewCard({ review }) {
  return (
    <div className="flex h-56 w-[30rem] select-none flex-col justify-between rounded-lg border-2 border-primary/30 bg-primary/30 p-4 py-6 text-center shadow-md shadow-primary/20 transition-all duration-300 hover:border-secondary/30 hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/40 ">
      <div className="flex items-center gap-2 pb-4">
        <Image
          src={review.googleImage}
          alt={review.name}
          width={35}
          height={35}
        />
        <h3 className="font-bold ">{review.name}</h3>
      </div>
      <p className="text-sm">{review.reviewDescription}</p>
      <div className="mt-auto flex gap-4">
        <div>{review.scoreReview}</div>
        <p className="text-sm text-gray-500">{review.timeReview}</p>
      </div>
    </div>
  );
}

export function Reviews() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 488; // 480px (30rem) + 8px de gap
  const totalWidth = dataReviews.length * cardWidth;

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition >= totalWidth ? 0 : newPosition;
      });
    }, 50);

    return () => clearInterval(scrollInterval);
  });

  const reviews = [...dataReviews, ...dataReviews]; // Doubler le tableau pour un défilement fluide

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto lg:py-28">
        <div
          className="flex gap-6 transition-transform duration-1000 ease-linear"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-[30rem] shrink-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
