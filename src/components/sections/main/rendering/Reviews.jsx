'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { dataReviews } from '../../../../data/reviews';

function ReviewCard({ review }) {
  return (
    <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800/50 shadow-md rounded-lg w-[30rem] h-[14rem] select-none hover:bg-gray-200 dark:hover:bg-gray-800/80 hover:shadow-primary/20 transition-colors duration-300">
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
      <div className="flex gap-4 mt-auto">
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
            <div key={index} className="flex-shrink-0 w-[30rem]">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
