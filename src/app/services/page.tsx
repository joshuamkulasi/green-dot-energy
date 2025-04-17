import React from 'react';
import ServicesSection from '../components/ServicesSection';

export const metadata = {
  title: 'Services | Green Dot Energy',
  description: 'Explore our electrical and renewable energy services and pricing in PNG.'
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-green-50">
      <ServicesSection />
    </main>
  );
}
