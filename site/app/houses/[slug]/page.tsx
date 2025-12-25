import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getHouseBySlug, getAllSlugs } from '@/data/houses';
import { siteConfig, getSmsLink, getTelLink } from '@/config/site';

// Generate static paths for all houses
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each house page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const house = getHouseBySlug(slug);

  if (!house) {
    return {
      title: 'House Not Found | Recovery Centered Living',
    };
  }

  return {
    title: `${house.name} | Recovery Centered Living`,
    description: `${house.name} - Sober living in ${house.neighborhoodLabel}. ${house.highlights[0]}.`,
  };
}

export default async function HouseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const house = getHouseBySlug(slug);

  if (!house) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FDF6E9]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={house.heroImage}
            alt={house.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/houses" className="hover:text-white transition-colors">Houses</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{house.name}</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Availability Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium mb-4 ${
              house.available
                ? 'bg-green-500 text-white'
                : 'bg-stone-500 text-white'
            }`}>
              {house.available && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              )}
              {house.available
                ? `${house.bedsAvailable} Bed${house.bedsAvailable !== 1 ? 's' : ''} Available`
                : 'Join Waitlist'
              }
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              {house.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {house.generalAreaText}
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                {house.bedsLabel}
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                {house.parkingLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Highlights */}
                <div className="card p-6">
                  <h2 className="font-heading text-2xl font-bold text-[#2C2C2C] mb-4">Why You&apos;ll Love It Here</h2>
                  <ul className="space-y-3">
                    {house.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#2D8A6E] mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <span className="text-[#6B6B6B]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Amenities */}
                <div className="card p-6">
                  <h2 className="font-heading text-2xl font-bold text-[#2C2C2C] mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {house.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-[#6B6B6B]">
                        <span className="text-[#E67B4A]">•</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About RCL */}
                <div className="bg-[#E8F5F1] rounded-2xl p-6">
                  <h2 className="font-heading text-2xl font-bold text-[#2C2C2C] mb-4">About Recovery Centered Living</h2>
                  <p className="text-[#6B6B6B] mb-4">
                    RCL is a network of peer-led sober living homes in Austin, Texas. Our houses are led by staff with lived recovery experience who understand the journey.
                  </p>
                  <p className="text-[#6B6B6B]">
                    We focus on structure, accountability, and genuine community connection. House meetings, shared responsibilities, and peer support create an environment where recovery can thrive.
                  </p>
                </div>
              </div>

              {/* Right Column - Pricing & CTA */}
              <div className="space-y-6">
                {/* Pricing Card */}
                <div className="card p-6 sticky top-24 border-2 border-[#2D8A6E]/20">
                  <div className="text-center mb-6">
                    <div className="text-sm text-[#6B6B6B] mb-1">Weekly Rate</div>
                    <div className="text-4xl font-bold text-[#2D8A6E]">${house.pricing.weekly}</div>
                    <div className="text-sm text-[#6B6B6B]">per week</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-[#6B6B6B]">
                      <span>Monthly (4 weeks)</span>
                      <span className="font-medium text-[#2C2C2C]">${house.pricing.monthly}</span>
                    </div>
                    <div className="flex justify-between text-[#6B6B6B]">
                      <span>Move-in Deposit</span>
                      <span className="font-medium text-[#2C2C2C]">${house.pricing.deposit}</span>
                    </div>
                    <hr className="border-stone-200" />
                    <div className="flex justify-between font-bold text-[#2C2C2C]">
                      <span>Move-in Total</span>
                      <span>${house.pricing.weekly + house.pricing.deposit}</span>
                    </div>
                  </div>

                  {/* Availability Info */}
                  <div className="bg-[#FDF6E9] rounded-lg p-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B6B6B]">Currently Available</span>
                      <span className={`font-medium ${house.bedsAvailable > 0 ? 'text-[#22c55e]' : 'text-[#6B6B6B]'}`}>
                        {house.bedsAvailable > 0
                          ? `${house.bedsAvailable} bed${house.bedsAvailable !== 1 ? 's' : ''}`
                          : 'Join waitlist'
                        }
                      </span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a
                      href={siteConfig.APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center btn btn-primary text-lg py-4"
                    >
                      Submit Application
                    </a>
                    <a
                      href={getSmsLink(house.name)}
                      className="block w-full text-center btn btn-secondary"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Schedule a Tour (Text Us)
                    </a>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="card p-6">
                  <h3 className="font-bold text-[#2C2C2C] mb-3">Questions?</h3>
                  <p className="text-[#6B6B6B] text-sm mb-4">
                    We&apos;re happy to tell you more about {house.name}.
                  </p>
                  <a
                    href={getTelLink()}
                    className="flex items-center justify-center gap-2 text-[#2D8A6E] font-medium hover:text-[#247058]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>{siteConfig.GOOGLE_VOICE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Back to Houses */}
            <div className="mt-12 text-center">
              <Link
                href="/houses"
                className="inline-flex items-center gap-2 text-[#2D8A6E] hover:text-[#247058] font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Back to All Houses</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
