'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { gallery } from '../../data/gallery';
export const HeroParallax = ({ products = gallery }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[168vh] flex-col self-auto overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d] md:h-[150vh] lg:h-[200vh]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((gallery) => (
            <ProductCard
              product={gallery}
              translate={translateX}
              key={gallery.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex  flex-row space-x-20 ">
          {secondRow.map((gallery) => (
            <ProductCard
              product={gallery}
              translate={translateXReverse}
              key={gallery.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((gallery) => (
            <ProductCard
              product={gallery}
              translate={translateX}
              key={gallery.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative left-0 top-0 mx-auto w-full max-w-7xl px-6 py-24 text-center"
    >
      <span className="inline-block border-b-2 border-primary bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 text-2xl font-bold text-transparent md:text-6xl lg:pb-4">
        Galerie de votre <br />
        clinique vétérinaire
      </span>
      <p className="mx-auto mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
        Votre clinique vétérinaire est unique, et vos images doivent refléter
        cette singularité.
      </p>
    </motion.div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate
      }}
      className="group/product relative size-52 shrink-0 md:size-80 lg:size-96"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        layout="fill"
        className="absolute inset-0 size-full object-cover"
      />
    </motion.div>
  );
};
