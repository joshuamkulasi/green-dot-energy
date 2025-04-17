'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TEAM = [
  { name: 'Dewane Gemba', role: 'Managing Director', image: '/team/dewane-gemba.jpg' },
  { name: 'Jane Doe', role: 'Lead Engineer', image: '/logo.png' },
  { name: 'Paul K.', role: 'Solar Specialist', image: '/logo.png' },
];

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <Image 
        src={image} 
        alt={name} 
        width={80} 
        height={80} 
        className="rounded-full mb-2 object-contain" 
        priority
      />
      <div className="font-semibold text-green-700">{name}</div>
      <div className="text-sm text-gray-600">{role}</div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {TEAM.map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
