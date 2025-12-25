'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, getSmsLink } from '@/config/site';

interface FAQItem {
  question: string;
  answer: string;
  category: 'application' | 'living' | 'cost' | 'support';
}

const FAQ_DATA: FAQItem[] = [
  // Application & Admission
  {
    category: 'application',
    question: 'How do I apply to live at RCL?',
    answer: 'You can apply online through our application portal. The process takes about 10-15 minutes. We review every application personally and typically respond within 24-48 hours.',
  },
  {
    category: 'application',
    question: 'What are the requirements to live at RCL?',
    answer: 'Residents must be committed to sobriety, willing to participate in house meetings and activities, able to pay rent on time, and respectful of housemates and house rules. We welcome residents at all stages of recovery.',
  },
  {
    category: 'application',
    question: 'Do you accept people on MAT (Medication-Assisted Treatment)?',
    answer: 'Yes, we support residents on MAT. We believe in meeting people where they are in their recovery journey and support all evidence-based approaches to recovery.',
  },
  {
    category: 'application',
    question: 'What if I have a criminal background?',
    answer: 'We evaluate each application individually. A criminal background does not automatically disqualify you. We consider factors like the nature of offenses, time elapsed, and your current commitment to recovery.',
  },
  // Living at RCL
  {
    category: 'living',
    question: 'What amenities are included?',
    answer: 'All houses include furnished bedrooms, WiFi, utilities, laundry access, shared common areas, and parking. Each house has a fully equipped kitchen and outdoor space.',
  },
  {
    category: 'living',
    question: 'How many people live in each house?',
    answer: 'Our houses accommodate 6-8 residents each. This size allows for a supportive community while maintaining comfortable personal space.',
  },
  {
    category: 'living',
    question: 'What are the house rules?',
    answer: 'Our core rules include no alcohol or drugs on premises, attending weekly house meetings, completing weekly chores, maintaining quiet hours, and treating housemates with respect. Full house guidelines are provided upon move-in.',
  },
  {
    category: 'living',
    question: 'Can I have visitors?',
    answer: 'Yes, visitors are allowed during designated hours. Overnight guests require house manager approval. We balance personal freedom with the safety and comfort of all residents.',
  },
  {
    category: 'living',
    question: 'Is there a curfew?',
    answer: 'New residents may have a curfew during their first 30 days as they adjust. After that, residents are trusted to manage their own schedules responsibly while respecting quiet hours.',
  },
  // Cost & Payment
  {
    category: 'cost',
    question: 'How much does it cost to live at RCL?',
    answer: 'Weekly rent ranges from $165-$175 depending on the house. This includes all utilities, WiFi, and access to shared amenities. A security deposit equal to two weeks rent is required at move-in.',
  },
  {
    category: 'cost',
    question: 'Do you accept insurance or financial assistance?',
    answer: 'We do not accept insurance directly, but we can provide documentation for residents seeking reimbursement. We work with residents on payment plans when needed and can connect you with local resources for financial assistance.',
  },
  {
    category: 'cost',
    question: 'When is rent due?',
    answer: 'Rent is due weekly, every Monday. We accept cash, check, or electronic payment. Late payment may result in a fee or impact your ability to continue residency.',
  },
  // Recovery Support
  {
    category: 'support',
    question: 'What recovery support do you provide?',
    answer: 'We offer weekly house meetings, peer support from staff with lived recovery experience, connections to local 12-step and other recovery meetings, and a supportive community environment. We encourage but do not mandate specific recovery programs.',
  },
  {
    category: 'support',
    question: 'Do you require 12-step participation?',
    answer: 'No specific recovery program is mandated. We support all pathways to recovery including 12-step, SMART Recovery, Refuge Recovery, and other evidence-based approaches. We encourage residents to find what works for them.',
  },
  {
    category: 'support',
    question: 'What happens if someone relapses?',
    answer: 'Our response depends on the situation. We prioritize safety first. A single slip does not automatically mean discharge. We work with residents to address what happened, create a plan, and may require additional support or structure. Bringing substances into the house is grounds for immediate discharge.',
  },
  {
    category: 'support',
    question: 'Can I continue working or going to school?',
    answer: 'Absolutely! We encourage residents to work, attend school, or pursue other productive activities. Many of our houses are conveniently located near public transit and major employers.',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Questions' },
  { key: 'application', label: 'Application & Admission' },
  { key: 'living', label: 'Living at RCL' },
  { key: 'cost', label: 'Cost & Payment' },
  { key: 'support', label: 'Recovery Support' },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const filteredFAQ = activeCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-[#FDF6E9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D8A6E] to-[#247058] text-white py-20 pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Everything you need to know about living at Recovery Centered Living.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setOpenItems(new Set([0]));
                  }}
                  className="tab-button"
                  data-active={activeCategory === cat.key}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {filteredFAQ.map((item, index) => (
                <div
                  key={index}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="accordion-trigger w-full text-left p-6 flex justify-between items-center gap-4"
                    aria-expanded={openItems.has(index)}
                  >
                    <span className="font-heading text-lg font-bold text-[#2C2C2C]">
                      {item.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`w-5 h-5 text-[#2D8A6E] flex-shrink-0 transition-transform duration-300 ${
                        openItems.has(index) ? 'rotate-180' : ''
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.has(index) ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-[#6B6B6B] leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
                Still Have Questions?
              </h2>
              <p className="text-[#6B6B6B] mb-8 max-w-xl mx-auto">
                We&apos;re happy to help. Reach out and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <a href={getSmsLink()} className="btn btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Text Us
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gradient-to-br from-[#2D8A6E] to-[#247058] text-white rounded-2xl p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                Start your application today. We personally review every submission.
              </p>
              <a
                href={siteConfig.APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white text-lg"
              >
                Submit Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
