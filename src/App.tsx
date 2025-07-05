// src/App.tsx

import React from 'react';
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Navbar from './components/Navbar/Navbar'


// Importuj wszystkie sekcje
import HeroSection from './sections/HeroSection/HeroSection';
import PortfolioSection from './sections/PortfolioSection/PortfolioSection';
import OfferSection from './sections/OfferSection/OfferSection';
import FaqSection from './sections/FaqSection/FaqSection';
import ContactSection from './sections/ContactSection/ContactSection';
import WhyUsSection from './sections/WhyAertero/WhyUsSection';

import AiAgentSection from './sections/AiAgentSection/AiAgentSection';

function App() {
    return (
        <div className="App">
             <Navbar />
            <AnimatedBackground />

            <HeroSection />
            <WhyUsSection />
            <OfferSection />
            <AiAgentSection /> 
            <FaqSection />
            <ContactSection />
            <PortfolioSection />
        </div>
    );
}

export default App;