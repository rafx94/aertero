import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Section from '../../components/Section';

interface WhyUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
                 hover:shadow-[0_0_40px_10px_rgba(255,100,0,0.2)] hover:ring-1 hover:ring-cyan-400/30
                 transition-all duration-300 transform hover:-translate-y-1
                 text-white text-center w-full max-w-xs"
    >
      <div className="text-4xl mb-4 text-cyan-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </motion.div>
  );
};

const WhyUsSection: React.FC = () => {
  const cards: WhyUsCardProps[] = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20m10-10H2" /></svg>,
      title: 'Innowacyjność',
      description: 'Wdrażamy najnowsze technologie webowe i AI.',
      index: 0,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M12 8v4l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      title: 'Automatyzacja',
      description: 'Chatboty, formularze i AI – działają za Ciebie.',
      index: 1,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3H12" /></svg>,
      title: 'Globalny design',
      description: 'Styl i UX na poziomie startupów z Doliny Krzemowej.',
      index: 2,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>,
      title: 'Jakość',
      description: 'Dostarczamy projekty, które naprawdę działają.',
      index: 3,
    },
  ];

  return (
    <Section>
    <section className="py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-base font-semibold leading-7 text-cyan-400">Why Aertero</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything You Need to Succeed
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          We're not just another tech company. We are your partners in innovation, dedicated to providing the tools and support for your growth.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
        {cards.map((card) => (
          <WhyUsCard
            key={card.index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            index={card.index}
          />
        ))}
      </div>
    </section>
    </Section>
  );
};

export default WhyUsSection;
