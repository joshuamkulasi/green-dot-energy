'use client'

import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';

export default function AboutContent() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 py-16 max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 text-green-700">About Us</h1>

      <motion.section
        id="our-story"
        aria-labelledby="our-story-header"
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="our-story-header" className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-700">
          Dewane Gemba founded Green Dot Energy in 2022 to bring reliable, sustainable energy solutions to Papua New Guinea. Our team combines decades of experience in electrical contracting and renewable energy to empower businesses and individuals across the region.
        </p>
      </motion.section>

      <div className="h-1 w-24 bg-green-200 rounded mx-auto my-8" />

      <motion.section
        id="our-mission"
        aria-labelledby="our-mission-header"
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 id="our-mission-header" className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          At Green Dot Energy, our mission is to deliver innovative and sustainable energy solutions tailored to the unique needs of Papua New Guinea’s communities and businesses. We strive to harness cutting-edge renewable technologies, from solar photovoltaic systems to energy-efficient electrical infrastructure, ensuring reliable power access in both urban centers and remote regions. By fostering strong partnerships with local stakeholders, investing in workforce training, and upholding the highest standards of safety and environmental stewardship, we empower our customers to achieve economic growth while preserving our nation’s natural beauty for generations to come.
        </p>
      </motion.section>

      <div className="h-1 w-24 bg-green-200 rounded mx-auto my-8" />

      <motion.section
        id="our-vision"
        aria-labelledby="our-vision-header"
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 id="our-vision-header" className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700">
          Our vision is to be Papua New Guinea’s most trusted and respected clean energy provider, setting the benchmark for innovation, reliability, and sustainability. We envision a future where every home, school, and enterprise benefits from accessible, cost-effective, and environmentally responsible power. Through continuous innovation, strategic collaboration, and a deep commitment to social impact, we aim to drive the nation toward energy independence, carbon neutrality, and long-term prosperity, leaving a lasting legacy of positive change.
        </p>
      </motion.section>

      <div className="h-1 w-24 bg-green-200 rounded mx-auto my-8" />

      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <TeamSection />
      </motion.div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </motion.main>
  );
}
