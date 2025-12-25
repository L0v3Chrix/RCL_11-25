'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import Mission from '@/components/sections/Mission';
import HouseShowcase from '@/components/sections/HouseShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import CommunityLife from '@/components/sections/CommunityLife';
import Pricing from '@/components/sections/Pricing';
import Partners from '@/components/sections/Partners';
import Testimonials from '@/components/sections/Testimonials';
import Resources from '@/components/sections/Resources';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import Modal from '@/components/ui/Modal';
import HouseModal from '@/components/modals/HouseModal';
import { House } from '@/data/houses';

export default function Home() {
  const [activeHouse, setActiveHouse] = useState<House | null>(null);

  const handleCloseModal = () => {
    setActiveHouse(null);
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <div id="trust-badges"><TrustBadges /></div>
      <Mission />
      <HouseShowcase onSelectHouse={setActiveHouse} />
      <HowItWorks />
      <CommunityLife />
      <Pricing />
      <Partners />
      <Testimonials />
      <Resources />
      <FAQ />
      <div id="contact"><ContactCTA /></div>

      {/* House Detail Modal */}
      <Modal
        isOpen={!!activeHouse}
        onClose={handleCloseModal}
        className="max-w-6xl w-[95vw] h-[90vh] md:h-auto"
      >
        {activeHouse && <HouseModal house={activeHouse} />}
      </Modal>
    </main>
  );
}
