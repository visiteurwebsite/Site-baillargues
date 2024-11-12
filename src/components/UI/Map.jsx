import { motion } from 'framer-motion';

export function Map() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-12 size-full h-80 rounded-xl shadow-xl shadow-secondary/50 lg:mb-0 lg:h-[28rem]"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.713332838962!2d3.9968291766690864!3d43.65413225236983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a14535361d77%3A0x6476740819fed197!2sCLINIQUE%20VETERINAIRE%20DE%20BAILLARGUES!5e0!3m2!1sfr!2sfr!4v1730195888985!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="rounded-xl border-b-2 border-primary"
      ></iframe>
    </motion.div>
  );
}
