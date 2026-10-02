import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useBrand } from '../context/BrandContext';
import { ArrowDown, ArrowUpRight, Heart, Home, Camera } from 'lucide-react';

// Refined editorial motion easing and staggered timing
const easeEditorial = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easeEditorial,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 18 },
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

export const Hero: React.FC = () => {
  const { images, setImage, setActiveView } = useBrand();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgErrorCount, setImgErrorCount] = useState(0);

  const heroCandidate = images.heroPortrait || 'image.png';

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

  const handleHeroFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setImage('heroPortrait', dataUrl);
      setImage('aboutPortrait', dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-end pb-16 pt-32 overflow-hidden bg-[#141414] text-[#FAF8F5]">
      {/* Hidden file input for fast 1-click portrait file selection */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleHeroFileUpload}
        className="hidden"
      />

      {/* Background Image Container with Measured Editorial Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: easeEditorial }}
          className="relative w-full h-full"
        >
          <img
            src={
              imgErrorCount === 0
                ? heroCandidate
                : imgErrorCount === 1
                ? 'https://aistudio.google.com/artifacts/image.png'
                : 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85'
            }
            alt="Idle Omar Hussein (Colyahe) - Nairobi Penthouse Portrait"
            className="w-full h-full object-cover object-[78%_20%] sm:object-right-top md:object-[82%_20%] filter brightness-[0.88] contrast-[1.04]"
            onError={() => {
              setImgErrorCount((prev) => prev + 1);
            }}
          />

          {/* Discreet Hero Portrait Control Badge */}
          <div className="absolute top-24 sm:top-28 right-6 sm:right-12 z-20">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="group flex items-center gap-2 px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-neutral-300 hover:text-white hover:border-[#B89358] transition-all text-[11px] tracking-wider uppercase"
              title="Click to select or change Idle Omar's Penthouse portrait"
            >
              <Camera className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Penthouse Portrait Active</span>
              <span className="text-[10px] text-[#B89358] ml-1 opacity-80 group-hover:opacity-100">
                (Click to change)
              </span>
            </button>
          </div>
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
          {/* Item 1: Small Top Location Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B89358]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4B580] font-medium font-sans">
              Nairobi, Kenya
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
                COLYAHE
              </span>
              <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-300 font-light">
                Personal Brand Platform
              </span>
            </div>
          </motion.div>

          {/* Item 3: Tagline Statement */}
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-lg sm:text-2xl text-neutral-200 font-light max-w-xl leading-relaxed"
          >
            "Real Estate • Marketing • Community"
          </motion.p>

          {/* Item 4: Narrative Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-neutral-300 font-sans max-w-lg leading-relaxed pt-1"
          >
            Connecting people with distinguished Nairobi property opportunities, while mobilizing transparent community support and Sadaqa initiatives.
          </motion.p>

          {/* Item 5: Two Primary Action Buttons with Stagger & Micro-interactions */}
          <motion.div
            variants={ctaVariants}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
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
