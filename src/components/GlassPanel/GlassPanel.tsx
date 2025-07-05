import React, { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassPanelProps extends React.ComponentProps<typeof motion.div> {
  animationDelay?: number;
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, animationDelay = 0, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ delay: animationDelay, duration: 0.8, ease: 'easeOut' }}
        className={clsx(
          'group transition duration-300 ease-out',
          'bg-white/5 backdrop-blur-xl border border-white/10',
          'rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-6 text-center',
          'hover:shadow-[0_0_80px_25px_rgba(0,212,255,0.2)] hover:ring-2 hover:ring-cyan-400/40',
          className
        )}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

export default GlassPanel;
