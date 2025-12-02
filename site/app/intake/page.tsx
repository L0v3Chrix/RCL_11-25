import Link from 'next/link';
import Card from '@/components/ui/Card';

// External application URL
const APPLICATION_URL = 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c';

export const metadata = {
  title: 'Apply Now | Recovery Centered Living',
  description: 'Start your application for sober living in Austin. Slade and Chloe personally review every application.',
};

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Start Your Application
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            We&apos;re excited you&apos;re considering Recovery Centered Living! Click below to begin your application.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="text-center p-8 bg-gradient-to-br from-indigo-50 to-teal-50 border-2 border-indigo-200">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-slate-600 mb-8">
              Our application takes about 10-15 minutes. Slade or Chloe will personally review your submission within 24 hours.
            </p>
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              Start Application →
            </a>
          </Card>
        </div>

        {/* What to Expect */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card>
            <div className="flex items-start gap-4">
              <span className="text-4xl">💛</span>
              <div>
                <h3 className="font-bold text-xl text-slate-800 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span><strong>Step 1:</strong> Complete the online application (10-15 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span><strong>Step 2:</strong> Slade or Chloe will call you within 24 hours to discuss your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span><strong>Step 3:</strong> Schedule an interview and tour (virtual or in-person)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span><strong>Step 4:</strong> Move in when you&apos;re ready!</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6 text-center">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-bold text-slate-800 mb-2">What recovery pathways do you accept?</h3>
              <p className="text-slate-600 text-sm">
                All of them! 12-Step, SMART, MAT, Recovery Dharma, Holistic - we honor every recovery journey.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-slate-800 mb-2">Do you accept insurance?</h3>
              <p className="text-slate-600 text-sm">
                We work with many insurance providers. We&apos;ll discuss options during your call.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-slate-800 mb-2">How much does it cost?</h3>
              <p className="text-slate-600 text-sm">
                Weekly rates start at $200-250/week depending on the house. Deposits are typically $300-400.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-slate-800 mb-2">Can I tour before applying?</h3>
              <p className="text-slate-600 text-sm">
                Yes! Contact us to schedule a virtual or in-person tour at any time.
              </p>
            </Card>
          </div>
        </div>

        {/* Support Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-teal-50 to-indigo-50 border-2 border-teal-200">
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-800 mb-2">Need Help with Your Application?</h3>
              <p className="text-slate-600 mb-6">
                We&apos;re here to support you through every step. Don&apos;t hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15125551234"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  📞 Call Us: (512) 555-1234
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border-2 border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  ✉️ Send a Message
                </Link>
              </div>
              <p className="text-xs text-teal-700 mt-4">
                <strong>Crisis Support:</strong> If you&apos;re in crisis, call <strong>988</strong> for immediate help.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
