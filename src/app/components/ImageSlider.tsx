import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SliderItem {
  image: string;
  title: string;
  description: string;
}

const sliderItems: SliderItem[] = [
  {
    image: '/services/IMG_20231103_144556.jpg',
    title: 'Professional Electrical Solutions',
    description: 'Expert installation and maintenance of electrical systems for businesses and homes in PNG'
  },
  {
    image: '/services/IMG_20231108_095022.jpg',
    title: 'Solar Energy Systems',
    description: 'Harnessing solar power to provide sustainable energy solutions for our clients'
  },
  {
    image: '/services/IMG_20231115_150856.jpg',
    title: '24/7 Emergency Services',
    description: 'Available around the clock to ensure your electrical systems are always running smoothly'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={sliderItems[currentIndex].image}
              alt={sliderItems[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold mb-4 text-center"
              >
                {sliderItems[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-center max-w-2xl"
              >
                {sliderItems[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {sliderItems.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}
