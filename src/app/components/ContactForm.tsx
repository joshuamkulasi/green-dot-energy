'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm({ service = '' }: { service?: string }) {
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
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl shadow-xl space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="w-full border border-green-200 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      {service && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
          <input
            type="text"
            id="service"
            name="service"
            readOnly
            value={service}
            className="w-full border border-green-200 rounded-lg px-4 py-2 mt-1 bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full border border-green-200 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="How can we help you?"
          rows={4}
          className="w-full border border-green-200 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
      >
        Send Message
      </button>
    </motion.form>
  );
}
