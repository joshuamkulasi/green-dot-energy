'use client';

import { motion } from 'framer-motion';
import { BoltIcon, SunIcon, CogIcon, CheckIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Electrical Contracting',
    description: 'Full-service electrical solutions for businesses and homes in PNG.',
    icon: BoltIcon,
    details: [
      'All electrical works & wiring',
      'Industrial power quality analysis',
      'Generator sizing & installation'
    ]
  },
  {
    title: 'Solar & Renewables',
    description: 'Solar panel installations, battery storage, and green energy consulting.',
    icon: SunIcon,
    details: [
      'Solar, hydro & wind development',
      'Energy audit for cost savings'
    ]
  },
  {
    title: 'Maintenance',
    description: 'Reliable maintenance and emergency services.',
    icon: CogIcon,
    details: [
      'Circuit thermal imaging',
      'Earth ground test',
      'Generator repair, servicing & maintenance'
    ]
  }
];

const partners = [
  { name: 'Paradise Foods Limited', description: 'Long-term partner in electrical solutions', logo: '/services/partners/paradise-foods-logo-removebg-preview.png' },
  { name: 'Digicel PNG', description: 'Trusted provider of electrical services', logo: '/services/partners/digicel-logo-removebg-preview.png' },
  { name: 'Aku Lodge Ltd', description: 'Partner in renewable energy solutions', logo: '/services/partners/aku-holdings.png' }
];

function ServiceCard({ icon: Icon, title, description, details }: { icon: any, title: string, description: string, details: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full bg-white rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-green-300/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 mx-auto">
          <Icon className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-green-800 mb-4 text-center">{title}</h2>
        <p className="text-gray-600 mb-6 text-center">{description}</p>
        <ul className="space-y-2 text-gray-600 text-sm w-full mb-6">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center w-full">
              <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green-500" />
              {detail}
            </li>
          ))}
        </ul>
        <div className="mt-auto text-left">
          <Link
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="inline-block px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition text-center"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regular Clients Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
          >
            Trusted Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 text-center"
          >
            Apart from many clients, following are our regulars:
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {partners.map((client, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-green-300/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative text-center md:text-left">
                  {client.logo && (
                    <div className="mb-4 flex items-center justify-center">
                      <Image src={client.logo} alt={`${client.name} logo`} width={120} height={120} className="object-contain" />
                    </div>
                  )}
                  <h3 className="text-xl md:text-xl font-semibold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-base md:text-base text-gray-600">{client.description}</p>
                  <div className="mt-3 md:mt-4 flex items-center justify-center">
                    <div className="w-12 md:w-16 h-1 bg-green-500 rounded-full transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
