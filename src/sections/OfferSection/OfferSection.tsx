import React, { useState, forwardRef } from 'react';
import styles from './OfferSection.module.css';
import GlassPanel from '../../components/GlassPanel/GlassPanel';
import CtaButton from '../../components/CtaButton/CtaButton';
import Section from '../../components/Section';

interface OfferTab {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  price: string;
  target: string;
  images: string[];
}

const offerData: OfferTab[] = [
  {
    id: "web",
    label: "Web Development",
    icon: "fa-solid fa-code",
    title: "Web Development",
    description: "Strony firmowe, sklepy eCommerce, landing page'e w najnowszych technologiach (Next.js, Headless CMS).",
    price: "Ceny od: 1500 zł",
    target: "🎯 Dla kogo: Firmy, które chcą wyglądać nowocześnie i działać automatycznie.",
    images: [
      "https://images.unsplash.com/photo-1559028006-44a36b17c16c?w=400&q=80",
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&q=80"
    ]
  },
  {
    id: "3d",
    label: "Wizualizacje 3D",
    icon: "fa-solid fa-cubes",
    title: "Wizualizacje 3D",
    description: "Fotorealistyczne wizualizacje produktów, architektury i wnętrz. Tworzymy packshoty i animacje 3D.",
    price: "Ceny od: 300 zł / wizualizacja",
    target: "🎯 Dla kogo: Architekci, deweloperzy, producenci.",
    images: [
      "https://images.unsplash.com/photo-1628552199366-9fee21c7e951?w=400&q=80",
      "https://images.unsplash.com/photo-1634551793399-0a6442654f15?w=400&q=80"
    ]
  },
  // USUNIĘTA SEKCJA DRONA!
  {
    id: "ai",
    label: "Usługi AI",
    icon: "fa-solid fa-microchip",
    title: "Usługi AI i Automatyzacje",
    description: "Inteligentne chatboty, integracje z CRM/Gmail, automatyczne generowanie ofert i raportów. Oszczędzaj czas i pieniądze.",
    price: "Ceny od: 1200 zł / projekt",
    target: "🎯 Dla kogo: Nowoczesne firmy, które chcą optymalizować procesy.",
    images: [
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&q=80",
      "https://images.unsplash.com/photo-1620712943543-2858200f7426?w=400&q=80"
    ]
  }
];

const OfferSection = forwardRef<HTMLElement, {}>((props, ref) => {
  const [activeTab, setActiveTab] = useState<string>(offerData[0].id);

  return (
    <Section>
      <h2 className="section-title text-center text-4xl font-bold text-white mb-10">Nasza Oferta</h2>

      <GlassPanel className={styles.offerContainer}>
        <div className={styles.offerTabs}>
          {offerData.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {offerData.map(tab => (
          <div key={tab.id} id={tab.id} className={`${styles.offerContent} ${activeTab === tab.id ? styles.active : ''}`}>
            <div className={styles.offerCard}>
              <div className={styles.offerDetails}>
                <i className={tab.icon}></i>
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
                <p className={styles.price}>{tab.price}</p>
                <p className={styles.target}>{tab.target}</p>
                <CtaButton as="a" href="#contact">Zamów wycenę</CtaButton>
              </div>
              <div className={styles.offerGallery}>
                {tab.images.map((imgSrc, index) => (
                  <img key={index} src={imgSrc} alt={`${tab.title} ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </GlassPanel>
    </Section>
  );
});

export default OfferSection;