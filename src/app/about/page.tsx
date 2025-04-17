import React from 'react';
import TeamSection from '../components/TeamSection';

export const metadata = {
  title: 'About Us | Green Dot Energy',
  description: 'Learn about Green Dot Energy\'s history, team, and mission.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-green-700">About Us</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-700">Green Dot Energy was founded to bring reliable, sustainable energy solutions to Papua New Guinea. Our team combines decades of experience in electrical contracting and renewable energy to empower businesses and individuals across the region.</p>
      </section>

      {/* Dewane's Story Section */}
      <section className="mb-10 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">A Son's Sacrifice - The Inspiring Journey of Dewane Gemba</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-green-700">Taking the Leap</h3>
            <p className="text-gray-700 mt-2">Back in February 2021, Dewane made a tough decision to leave his stable job as a Transmission & Distribution Engineer with PNG Power Limited in Port Moresby after seven years. This wasn't another career move. It was a heartfelt choice to care for his aging father in the remote mountains of Simbu. Leaving the city life behind wasn't easy for Dewane and his family, but they felt it was the right thing to do. After all, what do parents really need in their twilight years? Love and support from their children.</p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700">A New Beginning</h3>
            <p className="text-gray-700 mt-2">Once in the village, Dewane didn't stop at caregiving. He rolled up his sleeves and founded GreenDot Energy in 2022, offering electrical services to sustain his family. It was a way for him to provide for needs of his young family. It also contributed to the local community. His expertise and passion for making a difference turned this new venture into a symbol of hope for those around him.</p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700">Community Matters</h3>
            <p className="text-gray-700 mt-2">Dewane has been deeply grateful for the support GreenDot Energy has received from those around him. This kindness helped his family get through tough times. What started as a personal sacrifice transformed into a mission that benefits everyone in his village.</p>
          </div>

          <div className="text-center">
            <p className="text-green-700 font-semibold italic">"The greatest memory you can imprint in the heart of someone is to leave legacy of love and sacrifice that will be honored forever. Let's strive to give our best to those who need help most. Your small act of kindness can make a big difference and leave a lasting impact!"</p>
          </div>
        </div>
      </section>

      <TeamSection />
    </main>
  );
}
