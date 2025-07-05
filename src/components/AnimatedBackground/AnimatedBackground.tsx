// src/components/AnimatedBackground/AnimatedBackground.tsx
import React, { useRef, useEffect } from 'react';
import styles from './AnimatedBackground.module.css';
import gsap from 'gsap';

// Interfejs dla pojedynczej cząsteczki
interface Particle {
    x: number;
    y: number;
    radius: number;
    baseX: number; // Pozycja bazowa X, do której cząsteczka będzie wracać
    baseY: number; // Pozycja bazowa Y
    density: number; // Jak bardzo reaguje na myszkę
}

const AnimatedBackground: React.FC = () => {
    const bgContainerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Efekt paralaksy na tło (ruch myszy)
    useEffect(() => {
        const bgContainer = bgContainerRef.current;
        if (!bgContainer) return;

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            mousePos.current = { x: mouseX, y: mouseY }; // Zapisujemy pozycję myszy dla animacji cząsteczek

            // Subtelny ruch tła 3D
            const rotateX = -(mouseY / window.innerHeight - 0.5) * 10; // Mniejszy mnożnik = subtelniejszy ruch
            const rotateY = (mouseX / window.innerWidth - 0.5) * 10;

            gsap.to(bgContainer, {
                duration: 1.5,
                rotationX: rotateX,
                rotationY: rotateY,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Efekt "Gwiezdnego Pyłu" na Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        const numParticles = 150;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 0.5,
                    baseX: Math.random() * canvas.width,
                    baseY: Math.random() * canvas.height,
                    density: Math.random() * 30 + 10,
                });
            }
        };

        setCanvasSize();

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                // Interakcja z myszką - "odpychanie" cząsteczek
                const dx = mousePos.current.x - p.x;
                const dy = mousePos.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 100;
                const force = (maxDistance - distance) / maxDistance;

                let directionX = 0;
                let directionY = 0;

                if (distance < maxDistance) {
                    directionX -= forceDirectionX * force * p.density * 0.1;
                    directionY -= forceDirectionY * force * p.density * 0.1;
                }

                // Powrót do pozycji bazowej
                p.x += (p.baseX - p.x) * 0.01 + directionX;
                p.y += (p.baseY - p.y) * 0.01 + directionY;
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener('resize', setCanvasSize);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={bgContainerRef} className={styles.animatedBgContainer}>
            <canvas ref={canvasRef} className={styles.particlesCanvas}></canvas>
        </div>
    );
};

export default AnimatedBackground;