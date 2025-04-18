'use client';

import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import { BoltIcon, SunIcon, CogIcon } from '@heroicons/react/24/solid';

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-green-300/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
      <div className="relative">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 mx-auto">
          <Icon className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center px-4">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <HeroSection />
      
      {/* Service Highlights */}
      <section className="py-24 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our Core Services
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive electrical and renewable energy solutions for businesses and homes in PNG
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard 
              icon={BoltIcon} 
              title="Electrical Contracting" 
              description="From basic wiring to large-scale commercial projects, we deliver safe, reliable electrical solutions tailored to your needs." 
            />
            <ServiceCard 
              icon={SunIcon} 
              title="Solar & Renewables" 
              description="Harness the power of the sun with our solar panel installations, battery storage solutions, and green energy consulting services." 
            />
            <ServiceCard 
              icon={CogIcon} 
              title="Maintenance" 
              description="Ensure your systems run smoothly with our comprehensive maintenance plans and 24/7 emergency response services." 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-20 lg:py-32 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Why Choose Us
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality electrical and renewable energy solutions
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-md bg-gradient-to-r from-green-500 to-green-400 p-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-2xl blur opacity-75" />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">Our team of certified electricians and renewable energy experts bring years of experience to every project.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-md bg-gradient-to-r from-green-500 to-green-400 p-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-2xl blur opacity-75" />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Local Expertise</h3>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">With deep knowledge of PNG's unique electrical infrastructure, we provide solutions that work for your environment.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-md bg-gradient-to-r from-green-500 to-green-400 p-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-2xl blur opacity-75" />
              <h3 className="mt-6 text-xl font-bold text-gray-900">24/7 Support</h3>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">We're always here to help, with emergency services available around the clock for your peace of mind.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden mb-20 sm:mb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8 pb-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Power Your Future?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Contact us today to discuss how we can help you with your electrical and renewable energy needs.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="text-sm font-semibold leading-6 text-green-600 hover:text-green-700"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Clients Section */}
      <section className="py-24 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Trusted Partners
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Apart from many clients, following are our regulars:
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: 'Paradise Foods Limited', description: 'Long-term partner in electrical solutions' },
              { name: 'Digicel PNG', description: 'Trusted provider of electrical services' },
              { name: 'Aku Lodge Ltd', description: 'Partner in renewable energy solutions' }
            ].map((client, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-green-300/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-sm md:text-base text-gray-600">{client.description}</p>
                  <div className="mt-3 md:mt-4 flex items-center justify-center">
                    <div className="w-12 md:w-16 h-1 bg-green-500 rounded-full transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
