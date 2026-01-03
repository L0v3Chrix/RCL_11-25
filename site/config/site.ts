export const siteConfig = {
  // Application URL - Update this with the actual OTRAK URL
  APPLICATION_URL: 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c',

  // Contact Information
  GOOGLE_VOICE_NUMBER: '5127771748',
  GOOGLE_VOICE_DISPLAY: '512-777-1748',
  CONTACT_EMAIL: 'recoverycenteredliving@gmail.com',

  // Social Links
  SOCIAL: {
    instagram: 'https://www.instagram.com/recovery.centered.living',
    facebook: 'https://www.facebook.com/recoverycenteredliving',
  },

  // Site Metadata
  siteName: 'Recovery Centered Living',
  siteTagline: 'You don\'t have to do this alone.',
  siteDescription: 'High Accountability Recovery Living in Austin, TX. Clean, recovery-centered community with a spiritual environment.',

  // Hero Content
  hero: {
    headline: 'High Accountability',
    headlineAccent: 'Recovery Living',
    headlineEnd: 'in Austin',
    subheadline: 'Recovery Centered Living is a clean, recovery-centered community with a spiritual environment—built for people who are ready to show up, take responsibility, and rebuild with support.',
    supportingLine: 'Six homes. Five men’s homes. One women’s home. Peer-led. Accountability-forward.',
    microcopy: 'Family member, caseworker, or referral partner? You’re welcome here—reach out and we’ll help you make a safe, reliable decision.',
  },

  // Navigation
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Houses', href: '#houses' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],

  // Mission
  mission: {
    statement: 'Recovery Centered Living exists to provide high accountability homes where people in recovery can live in a clean, respectful, spiritually grounded environment—supported by community, personal responsibility, and a culture that helps you build your own structure.',
    whatWeAre: [
      'High accountability recovery homes (not chaos, not enabling)',
      'A clean living environment that protects recovery',
      'Peer-led community support with real expectations',
      'A spiritual environment that supports healing and reflection',
      'Harm-reduction-informed and human-first—while still protecting the home',
    ],
    whatWeAreNot: [
      'Not a clinical treatment center',
      'Not a “hands-off” house with no accountability',
      'Not a place where the environment is allowed to drift away from recovery',
    ],
  },
};

/**
 * Generate SMS link with prefilled message
 */
export function getSmsLink(houseName?: string): string {
  const phone = siteConfig.GOOGLE_VOICE_NUMBER;
  const baseMessage = houseName
    ? `Hi, I would like to schedule a tour for ${houseName}.`
    : 'Hi, I would like to schedule a tour of one of your RCL houses.';

  const encodedMessage = encodeURIComponent(baseMessage);
  return `sms:+1${phone}?&body=${encodedMessage}`;
}

/**
 * Generate tel link
 */
export function getTelLink(): string {
  return `tel:+1${siteConfig.GOOGLE_VOICE_NUMBER}`;
}

/**
 * Generate mailto link
 */
export function getMailtoLink(subject?: string): string {
  const base = `mailto:${siteConfig.CONTACT_EMAIL}`;
  if (subject) {
    return `${base}?subject=${encodeURIComponent(subject)}`;
  }
  return base;
}

export type SiteConfig = typeof siteConfig;
