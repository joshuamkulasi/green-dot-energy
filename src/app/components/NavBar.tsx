'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-lg fixed w-full z-30 top-0 left-0 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center gap-4 select-none">
          <Image 
            src="/logo.png" 
            alt="Green Dot Energy Logo" 
            width={120} 
            height={120} 
            className="w-20 h-20 md:w-24 md:h-24"
          />
          <span className="font-extrabold text-transparent text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-green-600 to-green-400 tracking-tight drop-shadow">Green Dot Energy</span>
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-green-700 font-semibold hover:text-green-900 transition-colors px-4 py-2 rounded-lg hover:bg-green-100">
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger - Only visible on mobile */}
        <button className="md:hidden flex items-center p-2 rounded-lg hover:bg-green-100" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-700">
            <path d="M4 7h20M4 14h20M4 21h20"/>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: 'auto' }} 
            exit={{ height: 0 }} 
            className="md:hidden bg-white/95 border-t border-green-100 overflow-hidden"
          >
            <div className="flex flex-col py-4 space-y-1">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="px-6 py-3 text-green-700 font-semibold hover:bg-green-50 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
