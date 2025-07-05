import React from 'react';
import AiChat from '../../components/AiChat/AiChat';
import Section from '../../components/Section';

const AiAgentSection = () => {
  return (
    <Section>
    <section id="ai-agent" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Porozmawiaj z naszym AI Agentem</h2>
        <p className="text-gray-600 mb-10">
          Masz pytania? Chcesz wycenę? Nasz asystent Aertero AI chętnie pomoże.
        </p>
        <AiChat />
      </div>
    </section>
    </Section>
  );
};

export default AiAgentSection;