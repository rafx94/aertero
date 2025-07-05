// src/sections/FaqSection/FaqSection.tsx

import React, { useState, useRef, useEffect, ChangeEvent, FormEvent, forwardRef } from 'react';
import styles from './FaqSection.module.css';
import GlassPanel from '../../components/GlassPanel/GlassPanel';

// ... interfejs ChatMessage ...

const FaqSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
    // ... cała logika komponentu jest bez zmian ...

    return (
        <section id="faq" className="section-full" ref={ref}>
            {/* ... reszta JSX komponentu jest bez zmian ... */}
        </section>
    );
});

export default FaqSection;
