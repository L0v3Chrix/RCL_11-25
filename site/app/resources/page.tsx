import Card from '@/components/ui/Card';
import Link from 'next/link';

// External application URL
const APPLICATION_URL = 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c';

export const metadata = {
  title: 'Recovery Resources | Recovery Centered Living',
  description: 'Free recovery resources, crisis support, and helpful links for anyone on their recovery journey. We support all pathways to recovery.',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Recovery Resources
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              Helpful tools, crisis support, and community connections to support your recovery journey.
            </p>
            <div className="flex justify-center gap-4">
              <span className="text-5xl">📚</span>
              <span className="text-5xl">💪</span>
              <span className="text-5xl">🌈</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Crisis Support - Always First */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="text-center mb-6">
                  <h2 className="font-heading text-3xl font-bold text-slate-800 mb-2">
                    🆘 Crisis Support
                  </h2>
                  <p className="text-slate-600">
                    If you or someone you know is in crisis, help is available 24/7
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="text-4xl mb-3">📞</div>
                    <h3 className="font-bold text-slate-800 mb-2">988 Lifeline</h3>
                    <a href="tel:988" className="text-2xl font-bold text-red-600 hover:text-red-700 block mb-2">
                      Call 988
                    </a>
                    <p className="text-sm text-slate-600">
                      Suicide & Crisis Lifeline<br />
                      24/7 • Free • Confidential
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="text-4xl mb-3">💬</div>
                    <h3 className="font-bold text-slate-800 mb-2">Crisis Text Line</h3>
                    <p className="text-2xl font-bold text-indigo-600 mb-2">
                      Text HOME to 741741
                    </p>
                    <p className="text-sm text-slate-600">
                      Text-based support<br />
                      24/7 • Free • Confidential
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="text-4xl mb-3">🚨</div>
                    <h3 className="font-bold text-slate-800 mb-2">SAMHSA Helpline</h3>
                    <a href="tel:1-800-662-4357" className="text-xl font-bold text-teal-600 hover:text-teal-700 block mb-2">
                      1-800-662-HELP
                    </a>
                    <p className="text-sm text-slate-600">
                      Treatment Referral Service<br />
                      24/7 • Free • Confidential
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recovery Pathways */}
            <div className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-slate-800 mb-8 text-center">
                🌈 Recovery Pathways
              </h2>
              <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                We believe there&apos;s no one &quot;right&quot; way to recover. Here are some of the pathways our residents use:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 12-Step */}
                <Card className="border-l-4 border-l-red-500">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🔴</span>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">12-Step Programs</h3>
                      <p className="text-sm text-red-600 font-medium">Courage to Change</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    Traditional fellowship-based recovery with sponsorship, meetings, and spiritual principles.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.aa.org" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Alcoholics Anonymous
                    </a>
                    <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Narcotics Anonymous
                    </a>
                  </div>
                </Card>

                {/* SMART Recovery */}
                <Card className="border-l-4 border-l-orange-500">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🟠</span>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">SMART Recovery</h3>
                      <p className="text-sm text-orange-600 font-medium">Science-Based Tools</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    Self-empowering, science-based approach using cognitive behavioral techniques.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.smartrecovery.org" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → SMART Recovery Website
                    </a>
                    <a href="https://www.smartrecovery.org/community/calendar.php" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Find Online Meetings
                    </a>
                  </div>
                </Card>

                {/* Recovery Dharma */}
                <Card className="border-l-4 border-l-yellow-500">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🟡</span>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">Recovery Dharma</h3>
                      <p className="text-sm text-yellow-600 font-medium">Buddhist-Inspired Practice</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    Mindfulness and meditation-based recovery using Buddhist principles.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="https://recoverydharma.org" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Recovery Dharma Website
                    </a>
                    <a href="https://recoverydharma.org/find-a-meeting" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Find a Meeting
                    </a>
                  </div>
                </Card>

                {/* MAT */}
                <Card className="border-l-4 border-l-green-500">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🟢</span>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">MAT Support</h3>
                      <p className="text-sm text-green-600 font-medium">Medication-Assisted Treatment</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    Evidence-based treatment combining medication with counseling and support.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.samhsa.gov/medication-assisted-treatment" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → SAMHSA MAT Info
                    </a>
                    <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Find Treatment
                    </a>
                  </div>
                </Card>

                {/* Holistic */}
                <Card className="border-l-4 border-l-blue-500">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🔵</span>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">Holistic Recovery</h3>
                      <p className="text-sm text-blue-600 font-medium">Mind, Body & Spirit</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    Whole-person approach including yoga, nutrition, therapy, and spiritual practice.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.yogaofrecovery.com" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Yoga of Recovery
                    </a>
                    <a href="https://www.mindbodygreen.com" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Mind Body Green
                    </a>
                  </div>
                </Card>

                {/* All Paths */}
                <Card className="border-l-4 border-l-purple-500">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🟣</span>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">Your Unique Path</h3>
                      <p className="text-sm text-purple-600 font-medium">Whatever Works for You</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    Many people combine elements from different approaches to create their own path.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.intherooms.com" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → In The Rooms (Online Community)
                    </a>
                    <a href="https://facesandvoicesofrecovery.org" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-700">
                      → Faces & Voices of Recovery
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Austin Local Resources */}
            <div className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-slate-800 mb-8 text-center">
                📍 Austin Local Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏥</span>
                    Treatment Centers
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>
                      <strong>Integral Care</strong>
                      <br /><span className="text-sm">Mental health & substance abuse services</span>
                      <br /><a href="tel:512-472-4357" className="text-indigo-600">512-472-HELP</a>
                    </li>
                    <li>
                      <strong>Austin Recovery</strong>
                      <br /><span className="text-sm">Residential & outpatient treatment</span>
                      <br /><a href="tel:512-697-8500" className="text-indigo-600">512-697-8500</a>
                    </li>
                    <li>
                      <strong>The Right Step</strong>
                      <br /><span className="text-sm">Comprehensive addiction treatment</span>
                      <br /><a href="tel:844-768-1161" className="text-indigo-600">844-768-1161</a>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    Recovery Community
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>
                      <strong>Austin Central Office (AA)</strong>
                      <br /><span className="text-sm">Meeting schedules & resources</span>
                      <br /><a href="https://www.austinaa.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600">austinaa.org</a>
                    </li>
                    <li>
                      <strong>Austin NA</strong>
                      <br /><span className="text-sm">Narcotics Anonymous meetings</span>
                      <br /><a href="https://www.austinna.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600">austinna.org</a>
                    </li>
                    <li>
                      <strong>Texas TROHN</strong>
                      <br /><span className="text-sm">Recovery housing network</span>
                      <br /><a href="https://www.texasrecoverysupport.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600">texasrecoverysupport.org</a>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Apps & Digital Tools */}
            <div className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-slate-800 mb-8 text-center">
                📱 Helpful Apps
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <div className="text-4xl mb-3">📅</div>
                  <h3 className="font-bold text-slate-800 mb-2">I Am Sober</h3>
                  <p className="text-sm text-slate-600">Sobriety tracker with motivation</p>
                </Card>

                <Card className="text-center">
                  <div className="text-4xl mb-3">🧘</div>
                  <h3 className="font-bold text-slate-800 mb-2">Headspace</h3>
                  <p className="text-sm text-slate-600">Meditation & mindfulness</p>
                </Card>

                <Card className="text-center">
                  <div className="text-4xl mb-3">💭</div>
                  <h3 className="font-bold text-slate-800 mb-2">Woebot</h3>
                  <p className="text-sm text-slate-600">AI mental health support</p>
                </Card>

                <Card className="text-center">
                  <div className="text-4xl mb-3">📖</div>
                  <h3 className="font-bold text-slate-800 mb-2">12 Steps AA</h3>
                  <p className="text-sm text-slate-600">Big Book & meeting finder</p>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-indigo-600 to-teal-600 text-white rounded-2xl p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Need a Supportive Place to Live?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Recovery Centered Living offers peer-led sober living homes in Austin that welcome all recovery pathways.
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
