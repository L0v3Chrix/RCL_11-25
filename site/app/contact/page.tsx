'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Card from '@/components/ui/Card';
import Link from 'next/link';

// External application URL
const APPLICATION_URL = 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c';

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
      // Send to email API
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              We&apos;re here to answer your questions and support you on your recovery journey.
            </p>
            <div className="flex justify-center gap-4">
              <span className="text-5xl">💬</span>
              <span className="text-5xl">🤝</span>
              <span className="text-5xl">💛</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Direct Contact Options */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {/* Phone */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📞</span>
                        <h4 className="font-bold text-slate-800">Call or Text</h4>
                      </div>
                      <a
                        href="tel:+15125551234"
                        className="text-indigo-600 hover:text-indigo-700 font-medium text-lg block ml-11"
                      >
                        (512) 555-1234
                      </a>
                      <p className="text-sm text-slate-600 ml-11 mt-1">
                        Available 9am - 8pm Daily
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">✉️</span>
                        <h4 className="font-bold text-slate-800">Email</h4>
                      </div>
                      <a
                        href="mailto:info@recoverycenteredliving.com"
                        className="text-indigo-600 hover:text-indigo-700 font-medium block ml-11 break-words"
                      >
                        info@recoverycenteredliving.com
                      </a>
                      <p className="text-sm text-slate-600 ml-11 mt-1">
                        Response within 24 hours
                      </p>
                    </div>

                    {/* Location */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📍</span>
                        <h4 className="font-bold text-slate-800">Location</h4>
                      </div>
                      <p className="text-slate-600 ml-11">
                        Austin, Texas<br />
                        <span className="text-sm">
                          (Men&apos;s houses: South Austin)<br />
                          (Women&apos;s houses: North Austin)
                        </span>
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Crisis Support */}
                <Card className="bg-gradient-to-br from-teal-50 to-indigo-50 border-2 border-teal-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🆘</div>
                    <h3 className="font-bold text-slate-800 mb-2">
                      In Crisis?
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      If you&apos;re experiencing a crisis, help is available right now.
                    </p>
                    <a
                      href="tel:988"
                      className="block w-full bg-teal-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors mb-2"
                    >
                      Call 988
                    </a>
                    <p className="text-xs text-teal-700">
                      988 Suicide & Crisis Lifeline<br />
                      Available 24/7 • Free & Confidential
                    </p>
                  </div>
                </Card>

                {/* Quick Links */}
                <Card>
                  <h3 className="font-bold text-slate-800 mb-3">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      → Start Your Application
                    </a>
                    <Link
                      href="/houses"
                      className="block text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      → View Our Houses
                    </Link>
                    <Link
                      href="/about"
                      className="block text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      → Meet Slade & Chloe
                    </Link>
                    <Link
                      href="/resources"
                      className="block text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      → Recovery Resources
                    </Link>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="font-heading text-3xl font-bold text-slate-800 mb-6">
                    Send Us a Message
                  </h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">✅</span>
                        <div>
                          <h3 className="font-bold text-green-800 mb-1">
                            Message Sent Successfully!
                          </h3>
                          <p className="text-sm text-green-700">
                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                          <h3 className="font-bold text-red-800 mb-1">
                            Oops! Something went wrong.
                          </h3>
                          <p className="text-sm text-red-700">
                            Please try calling us at (512) 555-1234 or email info@recoverycenteredliving.com
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-medium text-slate-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors text-slate-800"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block font-medium text-slate-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors text-slate-800"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block font-medium text-slate-700 mb-2">
                          Phone Number <span className="text-slate-400">(Optional)</span>
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors text-slate-800"
                          placeholder="(512) 555-1234"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block font-medium text-slate-700 mb-2">
                        What can we help you with? <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('subject')}
                        id="subject"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors text-slate-800"
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
                      <label htmlFor="message" className="block font-medium text-slate-700 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none text-slate-800"
                        placeholder="Tell us how we can help..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block font-medium text-slate-700 mb-3">
                        How would you prefer we contact you back?
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            {...register('preferredContact')}
                            type="radio"
                            value="email"
                            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="text-slate-600">Email</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            {...register('preferredContact')}
                            type="radio"
                            value="phone"
                            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="text-slate-600">Phone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            {...register('preferredContact')}
                            type="radio"
                            value="either"
                            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="text-slate-600">Either works</span>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-sm text-center text-slate-500 mt-3">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </form>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="font-heading text-4xl font-bold text-slate-800 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">
                    How quickly will I hear back?
                  </h3>
                  <p className="text-slate-600">
                    We respond to all inquiries within 24 hours, usually much sooner. For urgent questions about availability, call or text us directly at (512) 555-1234.
                  </p>
                </Card>

                <Card>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">
                    Can family members contact you?
                  </h3>
                  <p className="text-slate-600">
                    Absolutely! We welcome inquiries from family members, support persons, and referring professionals. Select &quot;Family/Support Person Inquiry&quot; as your subject.
                  </p>
                </Card>

                <Card>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">
                    What if I&apos;m in crisis right now?
                  </h3>
                  <p className="text-slate-600">
                    If you&apos;re experiencing a mental health or substance use crisis, please call 988 immediately for free, confidential support available 24/7. For medical emergencies, call 911.
                  </p>
                </Card>

                <Card>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">
                    Do you offer tours of the houses?
                  </h3>
                  <p className="text-slate-600">
                    Yes! We offer virtual and in-person tours by appointment. Contact us to schedule a time that works for you, or ask about it in the message form above.
                  </p>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-indigo-600 to-teal-600 text-white rounded-2xl p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Recovery Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our application process is simple, and Slade or Chloe will personally review every submission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-full font-bold shadow-xl transition-all"
                >
                  Start Your Application
                </a>
                <Link
                  href="/houses"
                  className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold shadow-xl transition-all"
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
