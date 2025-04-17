'use client';

import { motion } from 'framer-motion';
import { BuildingOffice2Icon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { ShareIcon, LinkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-green-800">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+675 7171 2301</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@greendotenergy.com.pg</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">P O Box 148 Gordons</p>
                  <p className="text-gray-600">Port Moresby</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ClockIcon className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-green-800">Quick Links</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <BuildingOffice2Icon className="w-5 h-5 text-green-600" />
                <a href="/services" className="text-gray-600 hover:text-green-600 transition-colors">
                  Our Services
                </a>
              </div>
              <div className="flex items-center gap-4">
                <ClockIcon className="w-5 h-5 text-green-600" />
                <a href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </a>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="w-5 h-5 text-green-600" />
                <a href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact
                </a>
              </div>
              <div className="flex items-center gap-4">
                <LinkIcon className="w-5 h-5 text-green-600" />
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                  Home
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-green-800">Follow Us</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <SocialIcon 
                  url="https://facebook.com/greendotenergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  fgColor="#1877f2"
                  bgColor="transparent"
                  style={{ height: 35, width: 35 }}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-gray-600 text-sm">Facebook</p>
              </div>
              <div className="flex items-center gap-4">
                <SocialIcon 
                  url="https://instagram.com/greendotenergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  fgColor="#e4405f"
                  bgColor="transparent"
                  style={{ height: 35, width: 35 }}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-gray-600 text-sm">Instagram</p>
              </div>
              <div className="flex items-center gap-4">
                <SocialIcon 
                  url="https://linkedin.com/company/greendotenergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  fgColor="#0077b5"
                  bgColor="transparent"
                  style={{ height: 35, width: 35 }}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-gray-600 text-sm">LinkedIn</p>
              </div>
              <div className="flex items-center gap-4">
                <SocialIcon 
                  url="https://twitter.com/greendotenergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  fgColor="#1da1f2"
                  bgColor="transparent"
                  style={{ height: 35, width: 35 }}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-gray-600 text-sm">Twitter</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p className="py-4">
            © {new Date().getFullYear()} Green Dot Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
