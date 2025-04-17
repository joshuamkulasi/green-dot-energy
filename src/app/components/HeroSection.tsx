import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pt-28 pb-12 text-center bg-gradient-to-br from-white via-green-50 to-green-100 relative overflow-hidden">
      <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Empowering PNG with <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Clean Energy</span>
      </motion.h1>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
        <p className="text-lg md:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Electrical contracting & renewable energy solutions for businesses and individuals in Papua New Guinea.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform">Our Services</Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors shadow-lg">Contact Us</Link>
        </div>
      </motion.div>
      <motion.div initial={{ scale: 0.8, opacity: 0.4 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-24 bg-green-100 rounded-full blur-2xl opacity-40 pointer-events-none" />
    </section>
  );
}
