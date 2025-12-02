import Card from '@/components/ui/Card';
import Link from 'next/link';

// External application URL
const APPLICATION_URL = 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c';

export const metadata = {
  title: 'About Slade & Chloe | Recovery Centered Living',
  description: 'Meet the founders of Recovery Centered Living. Slade and Chloe bring 25+ years of lived recovery experience to creating Austin\'s most inclusive sober living community.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Meet Slade & Chloe
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              Peer-led recovery. Real lived experience. A community built from love, not fear.
            </p>
            <div className="flex justify-center gap-4">
              <span className="text-5xl">💛</span>
              <span className="text-5xl">🏠</span>
              <span className="text-5xl">🌈</span>
            </div>
          </div>
        </div>
      </section>

      {/* Their Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Slade */}
              <Card className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-200 bg-gradient-to-br from-indigo-100 to-teal-100 flex items-center justify-center">
                  <span className="text-7xl">👨</span>
                </div>
                <h3 className="font-heading text-3xl font-bold text-slate-800 mb-2">
                  Slade Skaggs
                </h3>
                <p className="text-teal-600 font-medium mb-4">Co-Founder</p>
                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-indigo-700 font-bold mb-2">In Recovery Since:</p>
                  <p className="text-2xl font-bold text-slate-800">2010</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Slade knows firsthand the struggle of early recovery and the life-changing power of supportive community. His journey led him to create spaces where people are seen, supported, and empowered to rebuild.
                </p>
              </Card>

              {/* Chloe */}
              <Card className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-teal-200 bg-gradient-to-br from-teal-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-7xl">👩</span>
                </div>
                <h3 className="font-heading text-3xl font-bold text-slate-800 mb-2">
                  Chloe Skaggs
                </h3>
                <p className="text-teal-600 font-medium mb-4">Co-Founder</p>
                <div className="bg-teal-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-teal-700 font-bold mb-2">In Recovery Since:</p>
                  <p className="text-2xl font-bold text-slate-800">2012</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Chloe brings compassion, structure, and a deep understanding of what women need in early recovery. She creates environments where authenticity and healing can flourish.
                </p>
              </Card>
            </div>

            {/* Their Philosophy */}
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-12 border-2 border-indigo-200 mb-16">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold text-slate-800 mb-4">
                  Act From Love, Not Fear
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  This isn&apos;t just our tagline - it&apos;s how we live and how we run our houses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-bold text-slate-800 mb-2">Love Means Support</h3>
                  <p className="text-sm text-slate-600">
                    We meet people where they are and believe in their capacity to heal.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-3">🌱</div>
                  <h3 className="font-bold text-slate-800 mb-2">Growth Not Perfection</h3>
                  <p className="text-sm text-slate-600">
                    Progress matters more than perfection. We celebrate every step forward.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-3">🌈</div>
                  <h3 className="font-bold text-slate-800 mb-2">All Paths Welcome</h3>
                  <p className="text-sm text-slate-600">
                    12-Step, SMART, MAT, Dharma, Holistic - we honor every recovery journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Why They Started RCL */}
            <div className="mb-16">
              <h2 className="font-heading text-4xl font-bold text-slate-800 mb-8 text-center">
                Why We Started Recovery Centered Living
              </h2>

              <div className="prose prose-lg max-w-none">
                <Card className="mb-6">
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    After our own experiences in early recovery, we saw a gap: many sober living homes operated from fear and control rather than trust and empowerment.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We wanted to create something different - homes where people could rebuild their lives with dignity, support, and genuine community.
                  </p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💡</span>
                      What We Believe
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Recovery is personal - there&apos;s no one &quot;right&quot; way</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Peer support is powerful medicine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Structure helps, but rigidity hurts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Community connection saves lives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Everyone deserves a chance to heal</span>
                      </li>
                    </ul>
                  </Card>

                  <Card>
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      What We Do Differently
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">★</span>
                        <span>Peer-led by people with lived experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">★</span>
                        <span>Welcome ALL recovery pathways</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">★</span>
                        <span>TROHN certified for quality standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">★</span>
                        <span>Affordable pricing with insurance options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">★</span>
                        <span>Active house managers who truly care</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>

            {/* TROHN Certification */}
            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-200 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-48 h-48 bg-gradient-to-br from-indigo-100 to-teal-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🏅</div>
                    <p className="font-bold text-indigo-700">TROHN</p>
                    <p className="text-xs text-slate-600">Certified</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3">
                    TROHN Certified
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Recovery Centered Living is certified by the <strong>Texas Recovery Oriented Housing Network (TROHN)</strong>, which means our houses meet rigorous standards for safety, support, and ethical operation.
                  </p>
                  <p className="text-sm text-indigo-700 italic">
                    TROHN certification ensures quality, accountability, and resident-centered practices in all our homes.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-indigo-600 to-teal-600 text-white rounded-2xl p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re ready to apply or just want to learn more, we&apos;re here to support you.
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
                  href="/contact"
                  className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold shadow-xl transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
