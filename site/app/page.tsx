'use client';

import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import Mission from '@/components/sections/Mission';
import RecoverySpectrum from '@/components/sections/RecoverySpectrum';
import HouseShowcase from '@/components/sections/HouseShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import CommunityLife from '@/components/sections/CommunityLife';
import Pricing from '@/components/sections/Pricing';
import Partners from '@/components/sections/Partners';
import Testimonials from '@/components/sections/Testimonials';
import Resources from '@/components/sections/Resources';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { useModal } from '@/providers/ModalProvider';

export default function Home() {
  const { openHouseModal, openApplicationModal, openTourModal } = useModal();

  return (
    <main className="min-h-screen">
      <Hero
        onOpenApplication={openApplicationModal}
        onOpenTour={openTourModal}
      />
      <div id="trust-badges"><TrustBadges /></div>
      <Mission />
      <div id="spectrum"><RecoverySpectrum /></div>
      <HouseShowcase onSelectHouse={openHouseModal} />
      <HowItWorks />
      <CommunityLife />
      <Pricing
        onOpenApplication={openApplicationModal}
        onOpenTour={openTourModal}
      />
      <Partners
        onOpenApplication={openApplicationModal}
        onOpenTour={openTourModal}
      />
      <Testimonials />
      <Resources />
      <FAQ />
      <div id="contact">
        <ContactCTA
          onOpenApplication={openApplicationModal}
          onOpenTour={openTourModal}
        />
      </div>
    </main>
  );
}
