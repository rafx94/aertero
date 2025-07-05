// src/components/ParallaxBackground/ParallaxBackground.tsx
import React, { useEffect } from 'react';
import styles from './ParallaxBackground.module.css';
import 'particles.js';

// Umieść tę konfigurację na górze pliku, aby była globalna dla modułu
const particlesConfig = {
    "particles": {
        "number": { "value": 194, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#24c5f7" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.641, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": false }, // Kluczowe, że jest false
        "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "grab": { "distance": 292 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
};

const ParallaxBackground: React.FC = () => {
    useEffect(() => {
        if (window.particlesJS) {
            // Upewnij się, że przekazujesz poprawną konfigurację
            window.particlesJS('particles-js', particlesConfig);
        }
    }, []);

    return (
        <div className={styles.parallaxBgContainer}>
            <div id="particles-js" className={styles.particlesLayer}></div>
        </div>
    );
};

export default ParallaxBackground;