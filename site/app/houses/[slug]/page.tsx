import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getHouseById, getAllHouseIds, getAvailabilityBadgeColor, getAvailabilityLabel } from '@/lib/data/houses';
import Card from '@/components/ui/Card';

// External application URL
const APPLICATION_URL = 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c';

// Generate static paths for all houses
export async function generateStaticParams() {
  const ids = getAllHouseIds();
  return ids.map((slug) => ({ slug }));
}

// Generate metadata for each house page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const house = getHouseById(slug);

  if (!house) {
    return {
      title: 'House Not Found | Recovery Centered Living',
    };
  }

  return {
    title: `${house.name} | Recovery Centered Living`,
    description: `${house.name} - ${house.type === 'mens' ? "Men's" : "Women's"} sober living in ${house.neighborhood}, ${house.address}. ${house.highlights[0]}.`,
  };
}

export default async function HouseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const house = getHouseById(slug);

  if (!house) {
    notFound();
  }

  const bedsAvailable = house.capacity - house.currentOccupancy;
  const typeLabel = house.type === 'mens' ? "Men's House" : "Women's House";
  const typeIcon = house.type === 'mens' ? '👔' : '👗';
  const locationLabel = house.location === 'south' ? 'South Austin' : 'North Austin';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/20 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-300">
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
            {/* Type Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-4">
              <span className="text-xl">{typeIcon}</span>
              <span className="font-medium">{typeLabel}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-200">{locationLabel}</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {house.name}
            </h1>

            <p className="text-xl text-slate-200 mb-6">
              {house.neighborhood} neighborhood
            </p>

            {/* Availability Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium ${getAvailabilityBadgeColor(house.availability)}`}>
              {house.availability === 'available' && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              )}
              {getAvailabilityLabel(house)}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Photo Placeholder */}
            <Card className="mb-8 overflow-hidden">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-64 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📷</div>
                  <p className="text-slate-500 font-medium">House photos coming soon</p>
                  <p className="text-sm text-slate-400 mt-2">We&apos;re preparing beautiful images of {house.name}</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Features */}
                <Card>
                  <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4">At a Glance</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {house.features.map((feature, index) => (
                      <div key={index} className="text-center p-4 bg-indigo-50 rounded-lg">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <div className="text-sm font-medium text-slate-700">{feature.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Highlights */}
                <Card>
                  <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4">Why You&apos;ll Love It Here</h2>
                  <ul className="space-y-3">
                    {house.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span className="text-slate-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Amenities */}
                <Card>
                  <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {house.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-slate-600">
                        <span className="text-indigo-500">•</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* House Manager */}
                <Card className="bg-gradient-to-br from-teal-50 to-indigo-50 border-2 border-teal-200">
                  <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4">Meet Your House Manager</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {house.houseManager.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800">{house.houseManager.name}</h3>
                      <p className="text-teal-700 font-medium text-sm mb-2">
                        {house.houseManager.yearsInRecovery} Years in Recovery
                      </p>
                      <p className="text-slate-600">{house.houseManager.bio}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column - Pricing & CTA */}
              <div className="space-y-6">
                {/* Pricing Card */}
                <Card className="sticky top-24 border-2 border-indigo-200">
                  <div className="text-center mb-6">
                    <div className="text-sm text-slate-500 mb-1">Weekly Rate</div>
                    <div className="text-4xl font-bold text-indigo-600">${house.pricing.weekly}</div>
                    <div className="text-sm text-slate-500">per week</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-slate-600">
                      <span>Monthly (4 weeks)</span>
                      <span className="font-medium">${house.pricing.monthly}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Move-in Deposit</span>
                      <span className="font-medium">${house.pricing.deposit}</span>
                    </div>
                    <hr className="border-slate-200" />
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>Move-in Total</span>
                      <span>${house.pricing.weekly + house.pricing.deposit}</span>
                    </div>
                  </div>

                  {/* Capacity Info */}
                  <div className="bg-slate-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Capacity</span>
                      <span className="font-medium text-slate-800">{house.capacity} beds</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Currently Available</span>
                      <span className={`font-medium ${bedsAvailable > 0 ? 'text-green-600' : 'text-slate-500'}`}>
                        {bedsAvailable} bed{bedsAvailable !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a
                      href={APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg"
                    >
                      Apply Now
                    </a>
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-white border-2 border-slate-300 hover:border-indigo-400 text-slate-700 px-6 py-3 rounded-lg font-medium transition-all"
                    >
                      Schedule a Tour
                    </Link>
                  </div>
                </Card>

                {/* Quick Contact */}
                <Card className="bg-slate-50">
                  <h3 className="font-bold text-slate-800 mb-3">Questions?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    We&apos;re happy to tell you more about {house.name}.
                  </p>
                  <a
                    href="tel:+15125551234"
                    className="flex items-center justify-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    <span>📞</span>
                    <span>(512) 555-1234</span>
                  </a>
                </Card>
              </div>
            </div>

            {/* Back to Houses */}
            <div className="mt-12 text-center">
              <Link
                href="/houses"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                <span>←</span>
                <span>Back to All Houses</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
