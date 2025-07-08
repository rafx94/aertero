import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => (
  <section className={`py-24 px-4 md:px-8 lg:px-16 ${className}`}>
    {children}
  </section>
);

export default Section;