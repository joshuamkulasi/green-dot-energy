// @ts-nocheck
export const dynamic = 'force-dynamic';

import { ContactForm } from '../components/ContactForm';

export default function ContactPage({ searchParams }) {
  const service = Array.isArray(searchParams.service) ? searchParams.service[0] : searchParams.service || '';

  return (
    <main className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-green-700 text-center">Contact Us</h1>
        <ContactForm service={service} />
      </div>
    </main>
  );
}
