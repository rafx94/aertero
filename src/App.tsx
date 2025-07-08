// src/App.tsx

import React from 'react';
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Navbar from './components/Navbar/Navbar'


// Importuj wszystkie sekcje
import SplineSceneBasic from './sections/HeroSection/HeroSection';
import PortfolioSection from './sections/PortfolioSection';
import OfferSection from './sections/OfferSection/OfferSection';
import ContactSection from './sections/ContactSection/ContactSection';
import WhyUsCard from './sections/WhyUsCard';
import AiSection from './sections/AiSection/AiSection';

function App() {
    return (
        <div className="App">
             <Navbar />
            <AnimatedBackground />

            <SplineSceneBasic />
            <OfferSection />
            <WhyUsCard />
            <PortfolioSection />
            <AiSection /> 
            <ContactSection />
        </div>
    );
}

export default App;