import HouseShowcase from '@/components/sections/HouseShowcase';
import { siteConfig, getSmsLink } from '@/config/site';
import { getMensHouses, getWomensHouses, getTotalAvailableBeds } from '@/data/houses';

export const metadata = {
  title: 'Our Houses | Recovery Centered Living',
  description: 'Explore our 6 peer-led sober living homes across Austin, Texas. Men\'s and women\'s houses with peer support and community living.',
};

export default function HousesPage() {
  const mensHouses = getMensHouses();
  const womensHouses = getWomensHouses();
  const totalBeds = getTotalAvailableBeds();

  return (
    <div className="min-h-screen bg-[#FDF6E9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D8A6E] to-[#247058] text-white py-20 pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Sober Living Homes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              6 peer-led homes across Austin designed for comfort, community, and lasting recovery.
            </p>
            {totalBeds > 0 && (
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                <span className="font-medium">{totalBeds} bed{totalBeds !== 1 ? 's' : ''} currently available</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* House Showcase Component */}
      <HouseShowcase />

      {/* Additional Info Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Men's Houses Info */}
              <div className="card p-8 border-2 border-[#2D8A6E]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8F5F1] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2D8A6E]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#2C2C2C]">Men&apos;s Houses</h2>
                </div>
                <p className="text-[#6B6B6B] mb-4">
                  Our {mensHouses.length} men&apos;s houses offer structured environments with peer support across Austin.
                </p>
                <ul className="space-y-2 text-[#6B6B6B]">
                  {mensHouses.map((house) => (
                    <li key={house.slug} className="flex items-center gap-2">
                      <span className="text-[#2D8A6E]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {house.name} - {house.neighborhoodLabel}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Women's Houses Info */}
              <div className="card p-8 border-2 border-[#E67B4A]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FEF3EE] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#E67B4A]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#2C2C2C]">Women&apos;s Houses</h2>
                </div>
                <p className="text-[#6B6B6B] mb-4">
                  Our women&apos;s house provides nurturing environments with trauma-informed support.
                </p>
                <ul className="space-y-2 text-[#6B6B6B]">
                  {womensHouses.map((house) => (
                    <li key={house.slug} className="flex items-center gap-2">
                      <span className="text-[#E67B4A]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {house.name} - {house.neighborhoodLabel}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-[#FDF6E9] rounded-2xl p-8 mb-12">
              <h2 className="font-heading text-2xl font-bold text-[#2C2C2C] mb-6 text-center">
                What&apos;s Included in Your Stay
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: '🛏️', label: 'Furnished Bedroom' },
                  { icon: '🌐', label: 'WiFi & Utilities' },
                  { icon: '🧺', label: 'Laundry Access' },
                  { icon: '👥', label: 'House Meetings' },
                  { icon: '🏋️', label: 'Common Areas' },
                  { icon: '🧑‍🤝‍🧑', label: 'Peer Support' },
                  { icon: '🚌', label: 'Transport Help' },
                  { icon: '💼', label: 'Job Support' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className="font-medium text-[#2C2C2C]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-[#2C2C2C] mb-4">
                Ready to Find Your New Home?
              </h2>
              <p className="text-[#6B6B6B] mb-8 max-w-2xl mx-auto">
                Our team personally reviews every application and will help you find the perfect fit for your recovery journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg"
                >
                  Submit Application
                </a>
                <a
                  href={getSmsLink()}
                  className="btn btn-secondary text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
