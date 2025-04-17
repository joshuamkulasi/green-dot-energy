'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BoltIcon, SunIcon, CogIcon } from '@heroicons/react/24/solid';

const services = [
  { title: 'Electrical Contracting', description: 'Full-service electrical solutions for businesses and homes in PNG.', icon: BoltIcon },
  { title: 'Solar & Renewables', description: 'Solar panel installations, battery storage, and green energy consulting.', icon: SunIcon },
  { title: 'Maintenance', description: 'Reliable maintenance and emergency services.', icon: CogIcon },
];

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-green-300/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
      <div className="relative">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 mx-auto">
          <Icon className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-green-800 mb-2 text-center">{title}</h2>
        <p className="text-gray-600 text-center px-4">{description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8"
          >
            Our Services
          </motion.h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive electrical and renewable energy solutions for businesses and homes in PNG
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={i} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
