'use client';

import { motion } from 'framer-motion';
import { BoltIcon, SunIcon, CogIcon, CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Electrical Contracting',
    description: 'Comprehensive electrical services including wiring, lighting design, power systems, and maintenance for homes and businesses in PNG.',
    icon: BoltIcon,
    details: [
      'All electrical works & wiring',
      'Industrial power quality analysis',
      'Generator sizing & installation',
      'Lighting design & installation',
      'Electrical panel upgrades & circuit breaker replacement',
      'Surge protection & power quality mitigation',
      'Preventative maintenance scheduling',
      'Feasibility studies & site assessment'
    ]
  },
  {
    title: 'Solar & Renewables',
    description: 'Solar panel installations, battery storage, and green energy consulting.',
    icon: SunIcon,
    details: [
      'Solar design & installation',
      'Wind design & installation',
      'Hydro design & installation',
      'Battery storage system design & installation',
      'Hybrid renewable system integration',
      'Off-grid & microgrid solutions',
      'Grid-tied system installation & commissioning',
      'Solar panel cleaning & maintenance',
      'Performance monitoring & remote diagnostics',
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
      'Generator repair, servicing & maintenance',
      'Scheduled preventative maintenance contracts',
      'Emergency 24/7 repair response',
      'Load bank & backup generator testing',
      'Electrical safety compliance inspections',
      'Infrared thermography inspections',
      'Power quality diagnostics & reporting'
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
      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Why Choose Green Dot Energy?</h2>
          <p className="text-lg text-gray-600 text-center mb-8">Our commitment to excellence ensures every project is delivered on time, on budget, and to the highest safety and quality standards:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-2"/> Certified & Experienced Team</li>
            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-2"/> Tailored Solutions for Every Project</li>
            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-2"/> Sustainable & Environmentally Friendly Practices</li>
            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-2"/> Competitive Pricing & Transparent Quotes</li>
            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-2"/> 24/7 Emergency Support & Maintenance</li>
            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-2"/> Local Insights & Community Focus</li>
          </ul>
        </div>
      </section>

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

      {/* FAQ Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white p-4 rounded-lg border border-green-200 shadow transition hover:shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-green-800">
                <span>What does Green Dot Energy guarantee?</span>
                <ChevronDownIcon className="w-6 h-6 text-green-500 transform transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-gray-600">We guarantee safety, timely delivery, and compliance with all industry standards in every project.</p>
            </details>
            <details className="group bg-white p-4 rounded-lg border border-green-200 shadow transition hover:shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-green-800">
                <span>Can you customize systems for remote locations?</span>
                <ChevronDownIcon className="w-6 h-6 text-green-500 transform transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-gray-600">Yes, we specialize in designing off-grid and hybrid systems tailored for remote or rural areas.</p>
            </details>
            <details className="group bg-white p-4 rounded-lg border border-green-200 shadow transition hover:shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-green-800">
                <span>How do I request a quote?</span>
                <ChevronDownIcon className="w-6 h-6 text-green-500 transform transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-gray-600">Use the “Enquire Now” button on each service or contact us directly via email or phone.</p>
            </details>
          </div>
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
