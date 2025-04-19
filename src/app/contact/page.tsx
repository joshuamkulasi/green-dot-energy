'use client';

import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'framer-motion';
import { metadata } from './metadata';

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-8 text-green-700 text-center">Contact Us</motion.h1>
        <ContactForm />
      </div>
    </main>
  );
}
