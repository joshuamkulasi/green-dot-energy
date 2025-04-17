'use client';

import React, { useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Add backend integration or email service
  }

  return submitted ? (
    <div className="p-6 bg-green-50 text-green-700 rounded-lg text-center font-semibold">Thank you for contacting us! We’ll be in touch soon.</div>
  ) : (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block font-medium">Name</label>
        <input type="text" id="name" name="name" required className="w-full border border-green-200 rounded px-3 py-2 mt-1" value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">Email</label>
        <input type="email" id="email" name="email" required className="w-full border border-green-200 rounded px-3 py-2 mt-1" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea id="message" name="message" required className="w-full border border-green-200 rounded px-3 py-2 mt-1" rows={4} value={form.message} onChange={handleChange} />
      </div>
      <button type="submit" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold">Send Message</button>
    </form>
  );
}
