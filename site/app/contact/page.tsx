'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { siteConfig, getSmsLink, getTelLink, getMailtoLink } from '@/config/site';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional().or(z.literal('')),
  subject: z.enum([
    'general',
    'application',
    'availability',
    'family',
    'partnership',
    'other'
  ] as const, {
    message: 'Please select a subject'
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone', 'either'] as const)
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: 'either'
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to send');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF6E9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D8A6E] to-[#247058] text-white py-20 pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We&apos;re here to answer your questions and support you on your recovery journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options & Form */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Direct Contact Options */}
              <div className="lg:col-span-1 space-y-6">
                <div className="card p-6">
                  <h3 className="font-heading text-2xl font-bold text-[#2C2C2C] mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#E8F5F1] flex items-center justify-center text-[#2D8A6E]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#2C2C2C]">Call or Text</h4>
                      </div>
                      <a
                        href={getTelLink()}
                        className="text-[#2D8A6E] hover:text-[#247058] font-medium text-lg block ml-13"
                      >
                        {siteConfig.GOOGLE_VOICE_DISPLAY}
                      </a>
                      <p className="text-sm text-[#6B6B6B] ml-13 mt-1">
                        Available 9am - 8pm Daily
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#FEF3EE] flex items-center justify-center text-[#E67B4A]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#2C2C2C]">Email</h4>
                      </div>
                      <a
                        href={getMailtoLink()}
                        className="text-[#2D8A6E] hover:text-[#247058] font-medium block ml-13 break-words"
                      >
                        {siteConfig.CONTACT_EMAIL}
                      </a>
                      <p className="text-sm text-[#6B6B6B] ml-13 mt-1">
                        Response within 24 hours
                      </p>
                    </div>

                    {/* Schedule Tour */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#E8F5F1] flex items-center justify-center text-[#2D8A6E]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#2C2C2C]">Schedule a Tour</h4>
                      </div>
                      <a
                        href={getSmsLink()}
                        className="btn btn-secondary w-full mt-2"
                      >
                        Text Us to Schedule
                      </a>
                    </div>
                  </div>
                </div>

                {/* Crisis Support */}
                <div className="card p-6 bg-[#FEF3EE] border-2 border-[#E67B4A]/30">
                  <div className="text-center">
                    <h3 className="font-bold text-[#2C2C2C] mb-2">
                      In Crisis?
                    </h3>
                    <p className="text-sm text-[#6B6B6B] mb-4">
                      If you&apos;re experiencing a crisis, help is available right now.
                    </p>
                    <a
                      href="tel:988"
                      className="block w-full bg-[#E67B4A] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#D4612E] transition-colors mb-2"
                    >
                      Call 988
                    </a>
                    <p className="text-xs text-[#E67B4A]">
                      988 Suicide & Crisis Lifeline<br />
                      Available 24/7 - Free & Confidential
                    </p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="card p-6">
                  <h3 className="font-bold text-[#2C2C2C] mb-3">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={siteConfig.APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#2D8A6E] hover:text-[#247058] font-medium"
                    >
                      → Start Your Application
                    </a>
                    <Link
                      href="/houses"
                      className="block text-[#2D8A6E] hover:text-[#247058] font-medium"
                    >
                      → View Our Houses
                    </Link>
                    <Link
                      href="/faq"
                      className="block text-[#2D8A6E] hover:text-[#247058] font-medium"
                    >
                      → Frequently Asked Questions
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="card p-6 md:p-8">
                  <h2 className="font-heading text-3xl font-bold text-[#2C2C2C] mb-6">
                    Send Us a Message
                  </h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-[#E8F5F1] border-2 border-[#2D8A6E]/30 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-[#2D8A6E] text-2xl">✓</span>
                        <div>
                          <h3 className="font-bold text-[#2D8A6E] mb-1">
                            Message Sent Successfully!
                          </h3>
                          <p className="text-sm text-[#6B6B6B]">
                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 text-2xl">!</span>
                        <div>
                          <h3 className="font-bold text-red-800 mb-1">
                            Oops! Something went wrong.
                          </h3>
                          <p className="text-sm text-red-700">
                            Please try calling us at {siteConfig.GOOGLE_VOICE_DISPLAY} or email {siteConfig.CONTACT_EMAIL}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-medium text-[#2C2C2C] mb-2">
                        Your Name <span className="text-[#E67B4A]">*</span>
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-[#2D8A6E] focus:outline-none transition-colors text-[#2C2C2C] bg-white"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block font-medium text-[#2C2C2C] mb-2">
                          Email Address <span className="text-[#E67B4A]">*</span>
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-[#2D8A6E] focus:outline-none transition-colors text-[#2C2C2C] bg-white"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block font-medium text-[#2C2C2C] mb-2">
                          Phone Number <span className="text-[#6B6B6B]">(Optional)</span>
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-[#2D8A6E] focus:outline-none transition-colors text-[#2C2C2C] bg-white"
                          placeholder="(512) 555-1234"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block font-medium text-[#2C2C2C] mb-2">
                        What can we help you with? <span className="text-[#E67B4A]">*</span>
                      </label>
                      <select
                        {...register('subject')}
                        id="subject"
                        className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-[#2D8A6E] focus:outline-none transition-colors text-[#2C2C2C] bg-white"
                      >
                        <option value="">Select a subject...</option>
                        <option value="general">General Question</option>
                        <option value="application">Application Process</option>
                        <option value="availability">House Availability</option>
                        <option value="family">Family/Support Person Inquiry</option>
                        <option value="partnership">Professional Partnership</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block font-medium text-[#2C2C2C] mb-2">
                        Your Message <span className="text-[#E67B4A]">*</span>
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-[#2D8A6E] focus:outline-none transition-colors resize-none text-[#2C2C2C] bg-white"
                        placeholder="Tell us how we can help..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block font-medium text-[#2C2C2C] mb-3">
                        How would you prefer we contact you back?
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { value: 'email', label: 'Email' },
                          { value: 'phone', label: 'Phone' },
                          { value: 'either', label: 'Either works' },
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                              {...register('preferredContact')}
                              type="radio"
                              value={option.value}
                              className="w-4 h-4 text-[#2D8A6E] focus:ring-[#2D8A6E]"
                            />
                            <span className="text-[#6B6B6B]">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-sm text-center text-[#6B6B6B] mt-3">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-[#2D8A6E] to-[#247058] text-white rounded-2xl p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Recovery Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our application process is simple. We personally review every submission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white text-lg"
                >
                  Submit Application
                </a>
                <Link
                  href="/houses"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-[#2D8A6E] text-lg"
                >
                  View Our Houses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
