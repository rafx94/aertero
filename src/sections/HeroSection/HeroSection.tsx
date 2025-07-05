import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassPanel from '../../components/GlassPanel/GlassPanel';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Gradientowe tło z parallaxem */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90"
      />

      {/* Szklany panel centralny */}
      <div className="flex items-center justify-center h-full px-4">
        <GlassPanel className="w-full max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-widest text-white"
          >
            AERTERO
          </motion.div>

          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="text-2xl md:text-3xl font-semibold mt-4 text-white"
>
  Twój biznes w{' '}
  <span className="bg-gradient-to-r from-cyan-400 via-white to-orange-400 bg-clip-text text-transparent">
    nowym wymiarze
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base md:text-lg text-gray-300 mt-4 leading-relaxed"
          >
            Projektujemy nowoczesne strony, wizualizacje 3D i chatboty AI,
            które wynoszą Twoją markę ponad konkurencję.
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.6 }}
  className="flex flex-wrap gap-4 justify-center mt-6"
>
  <a
    href="#portfolio"
    className="px-6 py-3 rounded-full text-white font-semibold text-sm
               bg-gradient-to-r from-cyan-500 to-blue-600
               shadow-lg border border-transparent
               hover:border-orange-400 hover:ring-1 hover:ring-orange-400
               transition-all duration-300"
  >
    Zobacz nasze projekty
  </a>
  <a
    href="#contact"
    className="px-6 py-3 rounded-full text-white font-semibold text-sm
               bg-gradient-to-r from-[#b34700] via-[#803000] to-[#4d1a00]
               shadow-lg border border-transparent
               hover:border-cyan-400 hover:ring-1 hover:ring-cyan-400
               transition-all duration-300"
  >
    Zamów darmową wycenę
  </a>
</motion.div>
        </GlassPanel>
      </div>
    </section>
  );
};

export default HeroSection;
