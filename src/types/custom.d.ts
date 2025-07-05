// src/types/custom.d.ts
interface Window {
    particlesJS: (tagId: string, params: object, callback?: () => void) => void;
    pJSDom: any[];
}