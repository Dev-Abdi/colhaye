import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand } from '../context/BrandContext';
import { ArrowDown, ArrowUpRight, Heart, Home } from 'lucide-react';

// Refined editorial motion easing and staggered timing
const easeEditorial = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeEditorial,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easeEditorial,
    },
  },
};

const footerBarVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.85,
      ease: easeEditorial,
    },
  },
};

const ROTATING_HIGHLIGHTS = [
  {
    role: 'Real Estate Marketing',
    statement: "Connecting buyers and investors to Nairobi's finest luxury residences & prime lands.",
  },
  {
    role: 'Community & Sadaqa',
    statement: 'Directing transparent, life-changing support to vulnerable families across Nairobi.',
  },
  {
    role: 'Digital Influence',
    statement: 'Inspiring over 100,000+ followers with authentic leadership and community impact.',
  },
  {
    role: 'Strategic Property Partnerships',
    statement: 'Maximizing exposure and sales for prestigious developers throughout East Africa.',
  },
];

export const Hero: React.FC = () => {
  const { images, setActiveView } = useBrand();
  const [highlightIndex, setHighlightIndex] = useState(0);

  // Permanently use base-relative image.png so it works seamlessly on GitHub Pages and local server
  const defaultHeroImage = `${import.meta.env.BASE_URL}image.png`;
  const heroCandidate = images.heroPortrait || defaultHeroImage;

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % ROTATING_HIGHLIGHTS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToRealEstate = () => {
    setActiveView('real-estate');
    const el = document.getElementById('real-estate-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSadaqa = () => {
    setActiveView('sadaqa');
    const el = document.getElementById('sadaqa-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-end pb-16 pt-32 overflow-hidden bg-[#141414] text-[#FAF8F5]">
      {/* Background Image Container with Measured Editorial Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: easeEditorial }}
          className="relative w-full h-full"
        >
          <img
            src={heroCandidate}
            alt="Idle Omar Hussein (Colhaye) - Official Hero Portrait"
            className="w-full h-full object-cover object-[78%_20%] sm:object-right-top md:object-[82%_20%] filter brightness-[0.88] contrast-[1.04]"
          />
        </motion.div>

        {/* Sophisticated Scrim Gradients for 100% WCAG contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/65 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/95 via-[#141414]/60 lg:via-[#141414]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
      </div>

      {/* Hero Content with Staggered Framer Motion Animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-3xl space-y-6"
        >
          {/* Item 1: Location & Official Status */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B89358]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4B580] font-medium font-sans">
              Nairobi, Kenya · Official Brand Platform
            </span>
          </motion.div>

          {/* Item 2: Main Name Heading & Brand */}
          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[-0.02em] font-normal leading-[1.02] text-[#FAF8F5] text-balance">
              IDLE OMAR
              <br />
              <span className="font-light italic text-[#EBE4DC]">HUSSEIN</span>
            </h1>
            <div className="pt-2 flex items-baseline gap-4">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.16em] uppercase text-[#D4B580] font-medium">
                COLHAYE
              </span>
            </div>
          </motion.div>

          {/* Item 3: Decluttered Dynamic Rotating Statement Block */}
          <motion.div variants={itemVariants} className="min-h-[110px] sm:min-h-[120px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={highlightIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.6, ease: easeEditorial }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B89358]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4B580] font-sans font-medium">
                    {ROTATING_HIGHLIGHTS[highlightIndex].role}
                  </span>
                </div>
                <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-neutral-100 font-light max-w-xl leading-snug">
                  "{ROTATING_HIGHLIGHTS[highlightIndex].statement}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Subtle Progress Track Indicator */}
            <div className="flex items-center gap-2 pt-3">
              {ROTATING_HIGHLIGHTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHighlightIndex(i)}
                  className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${
                    i === highlightIndex
                      ? 'w-7 bg-[#B89358]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Item 4: Two Primary Action Buttons */}
          <motion.div
            variants={ctaVariants}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <motion.button
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToRealEstate}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FAF8F5] text-[#141414] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#B89358] hover:text-[#141414] transition-colors duration-200 shadow-lg cursor-pointer"
            >
              <Home className="w-4 h-4 text-[#B89358]" />
              <span>Explore Real Estate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToSadaqa}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-xs text-[#FAF8F5] border border-white/30 text-xs uppercase tracking-[0.18em] font-medium hover:border-[#B89358] hover:text-[#D4B580] transition-colors duration-200 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#B89358]" />
              <span>Support Sadaqa</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Scroll Indicator with Smooth Delayed Fade-in */}
        <motion.div
          variants={footerBarVariants}
          initial="hidden"
          animate="visible"
          className="pt-16 sm:pt-20 flex items-center justify-between border-t border-white/10 mt-12 text-xs text-neutral-400"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B89358] animate-pulse" />
            <span className="tracking-widest uppercase text-[11px] text-neutral-300">
              Active in Nairobi Property & Community
            </span>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('personal-brand-intro');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to introduction"
          >
            <span className="text-[11px] uppercase tracking-widest hidden sm:inline">Scroll Down</span>
            <ArrowDown className="w-4 h-4 text-[#B89358] group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
