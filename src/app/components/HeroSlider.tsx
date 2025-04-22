'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const imagesDesktop = [
  '/services/renewable/field-with-lots-solar-panels.jpg',
  '/services/renewable/pexels-thisisengineering-19895911.jpg',
  '/services/renewable/solar-power-plant-field-aerial-view-solar-panels.jpg',
  '/services/renewable/solar-power-station-surrounded-by-trees.jpg',
  '/services/renewable/sunny-landscape-with-windmills.jpg',
];

const imagesMobile = [
  '/services/renewable/portrate/pexels-adem-albayrak-383796555-19120381.jpg',
  '/services/renewable/portrate/pexels-carolin-wenske-762365559-28286652.jpg',
  '/services/renewable/portrate/pexels-francesco-senarega-907966031-20472840.jpg',
  '/services/renewable/portrate/pexels-lebele-27637329.jpg',
  '/services/renewable/portrate/pexels-pixabay-414943.jpg',
  '/services/renewable/portrate/wind-power-plant-solar-pannels-low-angle.jpg',
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const currentImages = isMobile ? imagesMobile : imagesDesktop;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImages]);

  useEffect(() => {
    setCurrentIndex((prev) => prev % currentImages.length);
  }, [currentImages.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            opacity: { duration: 1.5 },
            x: { duration: 1.2 }
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentImages[currentIndex]}
            alt="Green Dot Energy"
            fill
            priority
            className="object-cover"
          />
          {/* Semi-transparent overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
          {/* Text container with additional contrast */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative max-w-6xl mx-auto px-4 py-24 text-center z-10">
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 blur-3xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center z-10">
        {/* Background overlay for text */}
        <div className="hidden md:block absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl" />
        
        {/* Headline with Gradient Text */}
        <motion.h1 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut",
            opacity: { duration: 1 },
            x: { duration: 0.8 }
          }}
          className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600 leading-tight md:leading-[1.1] tracking-tight text-shadow-lg relative z-10"
        >
          Powering PNG's Future
        </motion.h1>

        {/* Quote */}
        <motion.p 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut",
            opacity: { duration: 1 },
            x: { duration: 0.8 }
          }}
          className="text-2xl md:text-3xl font-semibold mb-6 max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 text-shadow-lg relative z-10"
        >
          "Energy is life, life is energy"
        </motion.p>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut",
            opacity: { duration: 1 },
            x: { duration: 0.8 }
          }}
          className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto font-semibold text-shadow-lg relative z-10"
        >
          <span className="block">Professional electrical contractor</span>
          <span className="block">and renewable energy solutions provider</span>
          <span className="block">in Papua New Guinea</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut",
            opacity: { duration: 1 },
            x: { duration: 0.8 }
          }}
          className="flex flex-col md:flex-row gap-4 justify-center relative z-10"
        >
          <Link
            href="/services"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-green-100 transition duration-300 transform hover:scale-105 shadow hover:shadow-green-500/10"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {currentImages.map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ scale: currentIndex === index ? 1 : 0.8 }}
            className="w-3 h-3 rounded-full bg-white cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
