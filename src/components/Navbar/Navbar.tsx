import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero' },
  {
    name: 'Oferta',
    subItems: [
      { name: 'Strony WWW', href: '#web' },
      { name: 'Wizualizacje', href: '#visuals' },
      { name: 'Chatboty AI', href: '#chatbots' }
    ]
  },
  { name: 'Kontakt', href: '#contact' },
  { name: 'Sklep', href: '#shop' }
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {navItems.map((item) => (
        <div key={item.name} className="relative">
          <button
            onClick={() => setOpen(open === item.name ? null : item.name)}
            className="px-6 py-2 rounded-2xl text-sm font-semibold shadow-xl text-white backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            {item.name}
          </button>

          {item.subItems && (
            <AnimatePresence>
              {open === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-3"
                >
                  {item.subItems.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-xl transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </motion.nav>
  );
};

export default Navbar;