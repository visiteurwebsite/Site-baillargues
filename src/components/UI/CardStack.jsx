'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
let interval;

export const CardStack = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative size-60 md:h-60 md:w-[30rem]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute right-0 flex size-60 flex-col justify-center rounded-3xl border border-neutral-100 bg-gray-500 p-4 shadow-2xl shadow-black/[0.1] dark:border-white/30 dark:bg-gray-800 dark:shadow-primary/[0.2] md:h-60 md:w-[30rem]"
          style={{
            transformOrigin: 'top center'
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index
          }}
        >
          <div className=" flex items-center justify-center  gap-6 p-6 font-normal text-white dark:text-neutral-200">
            <Image
              src={card.icon}
              alt={card.title}
              width={60}
              height={60}
              className=""
            />
            <h2 className="text-2xl font-bold">{card.title}</h2>
          </div>
          <div className="p-2 text-center">
            <p className="font-medium text-neutral-500 dark:text-white">
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
