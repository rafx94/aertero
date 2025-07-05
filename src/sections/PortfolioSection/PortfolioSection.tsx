import React, { useEffect, useRef, useState } from 'react';
import styles from './PortfolioSection.module.css';

const portfolioItems = [
  {
    id: 1,
    img: "/assets/portfolio/web-dev.png",
    title: "Nowoczesny eCommerce",
    category: "Web",
    description: "Nowoczesny sklep internetowy z intuicyjnym interfejsem i zaawansowanymi funkcjami."
  },
  {
    id: 2,
    img: "/assets/portfolio/3d.png",
    title: "Wizualizacja architektoniczna",
    category: "3D",
    description: "Realistyczna wizualizacja architektoniczna budynków i wnętrz."
  },
  {
    id: 3,
    img: "/assets/portfolio/reservation.jpg",
    title: "System rezerwacji z AI",
    category: "AI & Automatyzacje",
    description: "Inteligentny system rezerwacji wykorzystujący sztuczną inteligencję."
  },
  {
    id: 4,
    img: "/assets/portfolio/drone.jpg",
    title: "Film promocyjny z drona",
    category: "Wideo",
    description: "Profesjonalny film promocyjny nagrany z drona."
  },
];

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`${styles.portfolioSection} ${styles.sectionEnter} ${show ? styles.show : ''}`}
    >
      <div className="pt-24 pb-12 text-center">
        <div className="section-label text-sm text-blue-400 tracking-widest">PORTFOLIO</div>
        <h2 className="section-title text-4xl md:text-5xl font-bold text-white mt-2">
          Nasze Realizacje
        </h2>
      </div>

      <div className={styles.cardsWrapper}>
        {portfolioItems.map((item, index) => (
          <div
  key={item.id}
  className={styles.stickyCardContainer}
  style={{ zIndex: index + 1 }}
>
  <div className={styles.portfolioCard}>
    <div className={styles.cardImageWrapper}>
      <img src={item.img} alt={item.title} className={styles.cardImage} />
    </div>
    <div className={styles.cardContent}>
      <h3>{item.title}</h3>
      <p>{item.description || "Krótki opis projektu i jego efektów końcowych."}</p>
      <button className={styles.ctaButton}>Zobacz projekt</button>
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
