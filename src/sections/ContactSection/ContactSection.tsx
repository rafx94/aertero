// src/sections/ContactSection/ContactSection.tsx

import React, { FormEvent } from 'react';
import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Tutaj możesz dodać logikę wysyłania formularza, np. do API
        console.log("Formularz kontaktowy wysłany!");
        alert("Wiadomość wysłana! Dziękujemy za kontakt.");
        // Możesz zresetować formularz po wysłaniu
        const form = event.target as HTMLFormElement;
        form.reset();
    };

    return (
        <section id="contact" className="section-full">
            <h2 className="section-title">Skontaktuj się z nami</h2>
            <div className={styles.contactGrid}>
                <div className={`${styles.contactForm} ${styles.glassPanel}`}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="Imię i nazwisko" required data-interactive />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="email" placeholder="Adres e-mail" required data-interactive />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea rows={5} placeholder="Twoja wiadomość" data-interactive></textarea>
                        </div>
                        <button type="submit" className={styles.ctaButton} data-interactive>
                            Wyślij wiadomość
                        </button>
                    </form>
                </div>
                <div className={styles.contactInfo}>
                    {/* Map placeholder - można zastąpić prawdziwą mapą (np. Google Maps React Component) */}
                    <div className={styles.mapPlaceholder}></div>
                    <div className={styles.socialLinks}>
                        <a href="#" aria-label="LinkedIn" data-interactive><i className="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="GitHub" data-interactive><i className="fab fa-github"></i></a>
                        <a href="#" aria-label="Twitter" data-interactive><i className="fab fa-twitter"></i></a>
                    </div>
                    <p style={{ marginTop: '20px', color: 'var(--text-color-darker)' }}>
                        Aertero Sp. z o.o.<br/>
                        ul. Wirtualna 1, 00-001 Warszawa<br/>
                        hello@aertero.com
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;