'use client';

import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'framer-motion';
import { metadata } from './metadata';

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-xl mx-auto">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-8 text-green-700">Contact Us</motion.h1>
      <ContactForm />
      <div className="mt-8 text-center text-gray-600">
        <p>Location: Port Moresby, PNG</p>
        <p>Email: <a href="mailto:info@greendotenergy.com.pg" className="text-green-600 hover:underline">info@greendotenergy.com.pg</a></p>
        <p>Follow us on <a href="#" className="text-green-600 hover:underline">LinkedIn</a></p>
      </div>
    </main>
  );
}
