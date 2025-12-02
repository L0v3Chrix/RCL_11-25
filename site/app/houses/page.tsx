import HouseShowcase from '@/components/sections/HouseShowcase';
import Link from 'next/link';

// External application URL
const APPLICATION_URL = 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c';

export const metadata = {
  title: 'Our Houses | Recovery Centered Living',
  description: 'Explore our 6 peer-led sober living homes across Austin, Texas. Men\'s houses in South Austin, Women\'s houses in North Austin. TROHN certified.',
};

export default function HousesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Our Sober Living Homes
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              6 peer-led homes across Austin designed for comfort, community, and lasting recovery.
            </p>
            <div className="flex justify-center gap-4">
              <span className="text-5xl">🏠</span>
              <span className="text-5xl">🏡</span>
              <span className="text-5xl">💛</span>
            </div>
          </div>
        </div>
      </section>

      {/* House Showcase Component */}
      <HouseShowcase />

      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Men's Houses Info */}
              <div className="bg-white rounded-2xl p-8 border-2 border-indigo-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">👔</span>
                  <h2 className="font-heading text-2xl font-bold text-slate-800">Men&apos;s Houses</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  Located in <strong>South Austin</strong>, our men&apos;s houses offer structured environments with peer support and easy access to downtown Austin.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Oak House, Cypress House, Pecan House
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Close to major bus lines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Near South Austin meeting centers
                  </li>
                </ul>
              </div>

              {/* Women's Houses Info */}
              <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">👗</span>
                  <h2 className="font-heading text-2xl font-bold text-slate-800">Women&apos;s Houses</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  Located in <strong>North Austin</strong>, our women&apos;s houses provide nurturing environments with trauma-informed support.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Willow House, Magnolia House, Rosewood House
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Quiet residential neighborhoods
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Near women&apos;s recovery groups
                  </li>
                </ul>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8 border-2 border-indigo-200 mb-12">
              <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6 text-center">
                What&apos;s Included in Your Stay
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🛏️</div>
                  <p className="font-medium text-slate-800">Furnished Bedroom</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <p className="font-medium text-slate-800">WiFi & Utilities</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧺</div>
                  <p className="font-medium text-slate-800">Laundry Access</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">👥</div>
                  <p className="font-medium text-slate-800">House Meetings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏋️</div>
                  <p className="font-medium text-slate-800">Common Areas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧑‍🤝‍🧑</div>
                  <p className="font-medium text-slate-800">Peer Support</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚌</div>
                  <p className="font-medium text-slate-800">Transport Help</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <p className="font-medium text-slate-800">Job Support</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-slate-800 mb-4">
                Ready to Find Your New Home?
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Slade and Chloe personally review every application and will help you find the perfect fit for your recovery journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all"
                >
                  Start Your Application
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 px-8 py-4 rounded-full font-bold transition-all"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
