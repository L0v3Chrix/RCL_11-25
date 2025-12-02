# Technical Specifications - Recovery Centered Living Website

**Date:** October 21, 2025
**Project:** RCL Website Redesign + White-Label Platform
**Document Type:** Technical Architecture & Implementation Specifications

---

## Context

This document defines the complete technical architecture for the Recovery Centered Living website, designed to serve as both a flagship client site and a modular platform for white-label deployment to other sober living providers.

**Key Requirements:**
- Modern, fast, mobile-first experience
- Scalable architecture supporting white-label deployment
- HIPAA-compliant data handling (if storing PHI)
- Seamless integrations (SMS, email, payments, calendar)
- Exceptional performance (Lighthouse 90+ scores)
- Accessibility compliance (WCAG 2.1 AA minimum)

---

## Technical Stack

### Core Framework

```yaml
Frontend Framework:
  Primary: Next.js 15
  Router: App Router (not Pages Router)
  Language: TypeScript (strict mode enabled)
  Node Version: 20.x LTS

Styling:
  Framework: Tailwind CSS v3.4+
  Custom Animations: Framer Motion + GSAP (for complex sequences)
  Icons: Lucide React (customizable, consistent)
  Fonts: Self-hosted via next/font (performance optimization)

State Management:
  Server State: React Query (TanStack Query v5)
  Client State: Zustand (lightweight, simple)
  Forms: React Hook Form + Zod validation

UI Components:
  Base Library: Shadcn/ui (Radix primitives + Tailwind)
  Custom Components: Built on top of Shadcn foundation
  Accessibility: Built-in with Radix primitives
```

### Backend & Data Layer

```yaml
CMS:
  Headless CMS: Sanity.io
  Reason: Excellent developer experience, structured content, real-time updates
  Alternative: Contentful (if client prefers)

Database (For White-Label Platform):
  Primary: PostgreSQL (via Supabase or Neon)
  Reason: Multi-tenant support, HIPAA-compliant options
  ORM: Prisma (type-safe database access)

Authentication:
  Library: NextAuth.js (Auth.js v5)
  Providers: Email/password, magic links
  Role-Based Access: Resident, Family, House Manager, Admin, Super Admin

File Storage:
  Service: Vercel Blob or Cloudflare R2
  Use Cases: User uploads, resident documents, photos
  Alternative: AWS S3 (if HIPAA compliance required)
```

### Key Integrations

```yaml
Communication:
  SMS: Twilio
    - Application confirmations
    - Interview reminders
    - Crisis support texting
  Email: Resend
    - Transactional emails (confirmations, notifications)
    - Marketing emails (newsletters, updates)
  Alternative Email: SendGrid (if client prefers)

Payments:
  Processor: Stripe
    - Intake deposits
    - Monthly rent payments
    - Payment plans and subscriptions
  Features: Stripe Checkout, Customer Portal, Payment Links

Calendar/Scheduling:
  Service: Cal.com (self-hosted or cloud)
    - Interview scheduling
    - Tour bookings
    - Event registration
  Alternative: Calendly integration

Analytics:
  Primary: PostHog
    - Event tracking
    - User behavior analytics
    - Feature flags (for A/B testing)
    - Privacy-focused (self-hosted option available)
  Secondary: Google Analytics 4 (if client requires)

Video:
  Hosting: YouTube (unlisted) or Vimeo (private)
  Player: Custom styled video player (video.js or Plyr)
  Reason: CDN performance, no storage costs

Live Chat (Optional):
  Service: Crisp or Tawk.to
  Alternative: Custom AI chatbot with OpenAI
```

---

## Architecture Overview

### Application Structure

```
/site/
├── /app/                           # Next.js App Router
│   ├── /(public)/                  # Public-facing pages
│   │   ├── page.tsx                # Homepage
│   │   ├── /about/                 # About pages (Slade, Chloe, philosophy)
│   │   ├── /houses/                # House showcase
│   │   │   ├── page.tsx            # All houses overview
│   │   │   └── /[slug]/            # Individual house pages
│   │   ├── /apply/                 # Application funnel
│   │   │   ├── /step-1/            # Quick prescreen
│   │   │   ├── /step-2/            # Full application
│   │   │   └── /step-3/            # Schedule interview
│   │   ├── /resources/             # Recovery resources
│   │   ├── /success-stories/       # Alumni testimonials
│   │   ├── /families/              # Family information
│   │   └── /contact/               # Contact page
│   ├── /(portal)/                  # Authenticated portal
│   │   ├── /resident/              # Resident dashboard
│   │   └── /family/                # Family dashboard
│   ├── /(admin)/                   # Admin area (white-label config)
│   │   ├── /dashboard/
│   │   ├── /applications/
│   │   ├── /residents/
│   │   ├── /houses/
│   │   └── /settings/
│   ├── /api/                       # API routes
│   │   ├── /applications/          # Application submission
│   │   ├── /sms/                   # Twilio webhooks
│   │   ├── /payments/              # Stripe webhooks
│   │   ├── /calendar/              # Cal.com integration
│   │   └── /auth/                  # NextAuth routes
│   └── layout.tsx                  # Root layout
├── /components/                    # React components
│   ├── /ui/                        # Shadcn/ui base components
│   ├── /shared/                    # Shared components (Header, Footer, etc.)
│   ├── /house/                     # House-specific components
│   ├── /application/               # Application form components
│   └── /portal/                    # Portal-specific components
├── /lib/                           # Utilities and helpers
│   ├── /sanity/                    # Sanity client and queries
│   ├── /api/                       # API client functions
│   ├── /auth/                      # Auth helpers
│   └── /utils/                     # General utilities
├── /hooks/                         # Custom React hooks
├── /types/                         # TypeScript types
├── /styles/                        # Global styles
├── /public/                        # Static assets
│   ├── /images/
│   ├── /videos/
│   └── /fonts/
└── /sanity/                        # Sanity Studio config
    ├── /schemas/                   # Content schemas
    └── sanity.config.ts
```

---

## Data Models

### Core Content Types (Sanity CMS)

**1. Site Configuration**
```typescript
{
  _type: 'siteConfig',
  name: string,              // "Recovery Centered Living"
  logo: image,
  primaryColor: string,      // Hex color
  secondaryColor: string,
  accentColor: string,
  phone: string,
  email: string,
  address: object,           // Structured address
  socialMedia: object[],     // Links to social profiles
  emergencyContacts: object[],
  navigation: object         // Main menu structure
}
```

**2. House**
```typescript
{
  _type: 'house',
  name: string,              // "Hope House"
  slug: slug,                // URL-friendly identifier
  gender: string,            // "Men" | "Women"
  location: string,          // "North Austin" | "South Austin"
  address: object,
  capacity: number,          // Total beds
  available: number,         // Current availability (manual update or API)
  photos: image[],           // Gallery images
  virtualTour: url,          // YouTube/Vimeo URL
  description: blockContent, // Rich text
  features: string[],        // Amenities list
  houseManager: reference,   // Reference to staff member
  testimonials: reference[], // References to testimonials
  nearbyResources: object[], // Meetings, transit, services
  order: number              // Display order
}
```

**3. Staff Member**
```typescript
{
  _type: 'staff',
  name: string,
  role: string,              // "Founder" | "Housing Director" | "House Manager"
  photo: image,
  bio: blockContent,         // Rich text bio
  email: string (optional),
  phone: string (optional),
  featured: boolean          // Show on About page
}
```

**4. Success Story / Testimonial**
```typescript
{
  _type: 'testimonial',
  name: string,              // First name only or "Anonymous"
  house: reference,          // Which house they stayed in
  sobrietyDate: date,
  stayDuration: string,      // "6 months" | "1 year"
  quote: text,               // Short pull quote
  story: blockContent,       // Full written story
  video: url,                // Optional video URL
  photo: image (optional),   // If they consent
  featured: boolean,         // Homepage feature
  publishedAt: datetime
}
```

**5. Resource**
```typescript
{
  _type: 'resource',
  title: string,
  category: string,          // "Meetings" | "Treatment" | "Legal" | "Employment" | "Crisis"
  description: text,
  url: url,
  phone: string,
  address: object,
  hours: string,
  location: string,          // "Austin" | "Texas" | "National"
  featured: boolean
}
```

**6. Event**
```typescript
{
  _type: 'event',
  title: string,
  description: blockContent,
  startDate: datetime,
  endDate: datetime,
  location: string,          // Which house or "All Houses"
  eventType: string,         // "Meeting" | "Service" | "Social" | "Family"
  recurring: object,         // Recurrence rules (if applicable)
  rsvpRequired: boolean,
  capacity: number (optional)
}
```

**7. Blog Post / Article**
```typescript
{
  _type: 'post',
  title: string,
  slug: slug,
  author: reference,         // Staff member
  publishedAt: datetime,
  excerpt: text,
  body: blockContent,
  featuredImage: image,
  category: string[],        // ["Recovery Tips", "Family Guidance", "News"]
  seo: object                // Meta title, description, keywords
}
```

---

### Application Database Schema (PostgreSQL)

**Users Table**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(50) NOT NULL, -- 'applicant', 'resident', 'family', 'house_manager', 'admin'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Applications Table**
```sql
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'prescreen', -- 'prescreen', 'full_app', 'interview_scheduled', 'approved', 'denied'

  -- Step 1: Prescreen
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  gender VARCHAR(50),
  sobriety_date DATE,
  insurance BOOLEAN,
  immediate_need VARCHAR(50),
  referral_source VARCHAR(255),

  -- Step 2: Full Application
  dob DATE,
  emergency_contact JSONB,
  recovery_history JSONB,
  employment JSONB,
  legal_status JSONB,
  medical JSONB,
  references JSONB,
  house_preference VARCHAR(255),
  goals TEXT,

  -- Step 3: Interview
  interview_scheduled TIMESTAMP,
  interview_type VARCHAR(50), -- 'in_person', 'video'
  interview_notes TEXT,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Residents Table**
```sql
CREATE TABLE residents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  house_id VARCHAR(255), -- Matches Sanity house slug
  move_in_date DATE,
  move_out_date DATE,
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'alumni', 'exited'
  payment_status VARCHAR(50),
  service_hours INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Payments Table**
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resident_id UUID REFERENCES residents(id),
  amount DECIMAL(10, 2),
  stripe_payment_id VARCHAR(255),
  status VARCHAR(50), -- 'pending', 'paid', 'failed'
  payment_date DATE,
  due_date DATE,
  type VARCHAR(50), -- 'deposit', 'rent', 'fee'
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## API Architecture

### Internal API Routes (Next.js)

**Application Submission**
```typescript
// POST /api/applications/prescreen
{
  name: string,
  email: string,
  phone: string,
  gender: "Men" | "Women",
  sobrietyDate: string, // ISO date
  insurance: boolean,
  immediateNeed: "emergency" | "1-2 weeks" | "flexible",
  referralSource: string
}

Response:
{
  success: boolean,
  applicationId: string,
  nextSteps: string,
  message: string
}

Actions:
- Validate data (Zod schema)
- Check for duplicate applications (email/phone)
- Create application record in database
- Send SMS confirmation (Twilio)
- Send email confirmation (Resend)
- Notify admin (PostHog event)
```

**Calendar Integration**
```typescript
// GET /api/calendar/availability?date=2025-10-22
Response:
{
  date: string,
  slots: [
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    ...
  ]
}

// POST /api/calendar/book
{
  applicationId: string,
  date: string,
  time: string,
  interviewType: "in_person" | "video"
}

Response:
{
  success: boolean,
  bookingId: string,
  confirmationUrl: string
}
```

**SMS Webhook (Twilio)**
```typescript
// POST /api/sms/incoming
{
  From: string,        // Phone number
  Body: string,        // Message content
  MessageSid: string
}

Actions:
- Parse message intent (keywords: "HELP", "APPLY", "TOUR")
- Auto-respond with appropriate info
- Log interaction
- Forward to admin if needed
```

---

## Third-Party Integrations

### Twilio (SMS)

**Configuration:**
```typescript
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Send SMS
await twilioClient.messages.create({
  body: message,
  from: process.env.TWILIO_PHONE_NUMBER,
  to: recipientPhone
});
```

**Use Cases:**
- Application confirmations
- Interview reminders (24 hours before)
- Crisis support responses
- Move-in instructions
- Payment reminders

---

### Resend (Email)

**Configuration:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'RCL <hello@recoverycenteredliving.com>',
  to: [recipientEmail],
  subject: 'Application Received',
  react: ApplicationConfirmationEmail({ name, applicationId })
});
```

**Email Templates (React Email):**
- Application confirmation
- Interview scheduled
- Application status update
- Welcome email (approved residents)
- Family portal invitation
- Newsletter and updates

---

### Stripe (Payments)

**Configuration:**
```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-10-28.acacia'
});

// Create Checkout Session
const session = await stripe.checkout.sessions.create({
  mode: 'payment',
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: { name: 'Security Deposit' },
      unit_amount: 50000 // $500.00
    },
    quantity: 1
  }],
  success_url: `${process.env.NEXT_PUBLIC_URL}/application/success`,
  cancel_url: `${process.env.NEXT_PUBLIC_URL}/application/payment`
});
```

**Payment Flows:**
- One-time deposit (Checkout Session)
- Monthly rent (Subscription or Payment Links)
- Custom payment plans (Subscription with phases)
- Family billing portal (Customer Portal)

---

### Cal.com (Scheduling)

**Integration:**
```typescript
// Use Cal.com API to fetch availability
const response = await fetch('https://api.cal.com/v1/availability', {
  headers: {
    'Authorization': `Bearer ${process.env.CAL_API_KEY}`
  },
  params: {
    eventTypeId: process.env.CAL_EVENT_TYPE_ID,
    dateFrom: '2025-10-22',
    dateTo: '2025-10-29'
  }
});

// Book appointment
const booking = await fetch('https://api.cal.com/v1/bookings', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.CAL_API_KEY}`
  },
  body: JSON.stringify({
    eventTypeId: process.env.CAL_EVENT_TYPE_ID,
    start: '2025-10-22T10:00:00Z',
    responses: {
      name: applicantName,
      email: applicantEmail,
      notes: 'New applicant interview'
    }
  })
});
```

**Alternative:** Embed Cal.com widget directly in application Step 3.

---

## Performance Optimization

### Core Web Vitals Targets

```yaml
Largest Contentful Paint (LCP): < 2.5s
First Input Delay (FID): < 100ms
Cumulative Layout Shift (CLS): < 0.1
First Contentful Paint (FCP): < 1.8s
Time to Interactive (TTI): < 3.8s
```

### Optimization Strategies

**Images:**
- Use Next.js `<Image>` component (automatic optimization)
- WebP format with PNG/JPEG fallback
- Lazy loading for below-the-fold images
- Responsive image sizes
- CDN delivery (Vercel automatically provides this)

**Fonts:**
- Self-host fonts via `next/font`
- Preload critical fonts
- Font subsetting (only characters used)
- Variable fonts where possible

**Code Splitting:**
- Route-based code splitting (automatic with App Router)
- Dynamic imports for heavy components
- Lazy load portal and admin sections

**Caching:**
- Static pages: ISR (Incremental Static Regeneration)
- Dynamic pages: Server Components with 60s revalidation
- API routes: Cache with `revalidate` option
- CDN caching for static assets

**Database:**
- Connection pooling (Prisma + PostgreSQL)
- Query optimization (select only needed fields)
- Indexes on frequently queried columns
- Read replicas for white-label platform (future)

---

## Security & Compliance

### HIPAA Compliance (If Storing PHI)

**Requirements:**
- Encrypt data at rest (database encryption)
- Encrypt data in transit (HTTPS, TLS 1.3)
- Access controls (role-based permissions)
- Audit logs (track all PHI access)
- Business Associate Agreements (BAAs) with vendors

**Recommended Approach:**
- **Minimize PHI storage** - Only store what's absolutely necessary
- Use HIPAA-compliant vendors:
  - Database: Supabase (HIPAA tier) or AWS RDS (with BAA)
  - File storage: AWS S3 (with BAA) or Azure (with BAA)
  - Email: SendGrid (HIPAA-compliant tier) or custom solution
  - Avoid: Resend (not HIPAA-compliant as of Oct 2025)

**Alternative Approach:**
- Store sensitive medical info in third-party HIPAA-compliant EHR
- RCL site only stores contact info and basic application data (non-PHI)

---

### General Security

**Authentication:**
- NextAuth.js with secure session management
- HTTP-only cookies for session tokens
- CSRF protection
- Rate limiting on login attempts

**Data Validation:**
- Zod schemas for all user inputs
- Server-side validation (never trust client)
- SQL injection prevention (Prisma ORM)
- XSS protection (React automatic escaping)

**Environment Variables:**
- Never commit to Git (.gitignore .env files)
- Use Vercel environment variables for production
- Separate keys for development, staging, production

**API Security:**
- API routes require authentication where appropriate
- Rate limiting (Vercel or Upstash Redis)
- CORS configuration (restrict to own domain)
- Webhook signature verification (Stripe, Twilio)

---

## Accessibility (WCAG 2.1 AA)

### Key Requirements

**Keyboard Navigation:**
- All interactive elements accessible via keyboard
- Visible focus indicators
- Logical tab order
- Skip navigation links

**Screen Reader Support:**
- Semantic HTML (headings, landmarks, lists)
- ARIA labels where needed
- Alt text for all images
- Form labels properly associated

**Visual Accessibility:**
- Color contrast ratios: 4.5:1 (text), 3:1 (UI components)
- Text resizable up to 200% without loss of functionality
- No information conveyed by color alone
- Focus indicators visible

**Forms:**
- Clear error messages
- Error prevention and suggestions
- Visible required field indicators
- Accessible validation feedback

**Media:**
- Captions for all videos
- Transcripts for audio content
- Audio control (pause, volume)

---

## Deployment & Hosting

### Recommended Platform: Vercel

**Why Vercel:**
- Built for Next.js (optimal performance)
- Zero-config deployment
- Automatic HTTPS and CDN
- Edge functions for API routes
- Preview deployments for every PR
- Environment variable management
- Analytics and Web Vitals monitoring

**Deployment Workflow:**
```
1. Push to main branch (GitHub)
2. Vercel auto-builds and deploys
3. Run build checks and tests
4. Deploy to production
5. Invalidate CDN cache
6. Monitor Core Web Vitals
```

**Environment Setup:**
```
Development: localhost:3000
Staging: rcl-staging.vercel.app
Production: recoverycenteredliving.com
```

---

### Alternative: Self-Hosted (Docker)

**If client prefers self-hosting:**
```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

**Deploy with Docker Compose:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    depends_on:
      - db

  db:
    image: postgres:16
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

---

## Development Workflow

### Local Development Setup

```bash
# Clone repo
git clone https://github.com/raize-the-vibe/rcl-website.git
cd rcl-website/site

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with actual keys

# Start Sanity Studio (in separate terminal)
cd sanity
npx sanity dev

# Start Next.js dev server
npm run dev
```

### Git Workflow

```
main (production) ← PR from staging ← PR from feature branches
```

**Branch Naming:**
- `feature/house-showcase` (new features)
- `fix/application-form-validation` (bug fixes)
- `content/update-slade-bio` (content updates)

**Commit Message Format:**
```
feat: Add house showcase component
fix: Resolve application form validation error
content: Update Slade's bio and photos
chore: Update dependencies
```

---

## Testing Strategy

### Unit Tests (Jest + React Testing Library)

```typescript
// Example: Application form validation
import { render, screen } from '@testing-library/react';
import { PrescreenForm } from '@/components/application/PrescreenForm';

test('validates phone number format', () => {
  render(<PrescreenForm />);
  const phoneInput = screen.getByLabelText(/phone/i);
  // ... test validation
});
```

### End-to-End Tests (Playwright)

```typescript
// Example: Full application flow
test('complete application journey', async ({ page }) => {
  await page.goto('/apply');

  // Step 1: Prescreen
  await page.fill('[name="name"]', 'Test User');
  await page.fill('[name="email"]', 'test@example.com');
  await page.click('button[type="submit"]');

  // Step 2: Full application
  await page.waitForURL('/apply/step-2');
  // ... fill out full form

  // Step 3: Schedule interview
  await page.waitForURL('/apply/step-3');
  await page.click('[data-slot="10:00 AM"]');
  await page.click('button:has-text("Confirm")');

  // Verify confirmation
  await expect(page.locator('.success-message')).toBeVisible();
});
```

### Accessibility Tests (axe-core)

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('homepage has no accessibility violations', async () => {
  const { container } = render(<HomePage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Monitoring & Analytics

### PostHog Configuration

```typescript
// Track key events
posthog.capture('application_started', {
  step: 'prescreen',
  referralSource: source
});

posthog.capture('application_submitted', {
  step: 'full_application',
  applicationId: id
});

posthog.capture('interview_scheduled', {
  date: date,
  type: interviewType
});
```

### Error Monitoring (Sentry - Optional)

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1
});
```

---

## White-Label Platform Architecture

### Multi-Tenant Database Design

**Option 1: Shared Database with Tenant ID**
```sql
CREATE TABLE providers (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  domain VARCHAR(255) UNIQUE,
  config JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- All tables include provider_id
CREATE TABLE applications (
  id UUID PRIMARY KEY,
  provider_id UUID REFERENCES providers(id),
  -- ... rest of fields
);
```

**Option 2: Separate Databases per Tenant**
- Each provider gets own PostgreSQL database
- Better isolation, HIPAA compliance easier
- More complex deployment

### Configuration System

**Provider Config Object:**
```typescript
{
  providerId: string,
  name: string,
  domain: string,
  branding: {
    logo: string,
    primaryColor: string,
    secondaryColor: string,
    accentColor: string,
    fonts: {
      heading: string,
      body: string
    }
  },
  contact: {
    phone: string,
    email: string,
    address: object
  },
  houses: [
    {
      name: string,
      capacity: number,
      gender: string,
      location: string
    }
  ],
  integrations: {
    twilio: { accountSid, authToken, phoneNumber },
    resend: { apiKey, fromEmail },
    stripe: { publishableKey, secretKey },
    calendar: { apiKey, eventTypeId }
  },
  content: {
    homepageHero: string,
    aboutText: blockContent,
    resources: []
  }
}
```

---

## Environment Variables Reference

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://recoverycenteredliving.com
NEXT_PUBLIC_SITE_NAME="Recovery Centered Living"

# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Authentication
NEXTAUTH_URL=https://recoverycenteredliving.com
NEXTAUTH_SECRET=generated-secret-key

# CMS (Sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token

# Twilio (SMS)
TWILIO_ACCOUNT_SID=ACxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+15125551234

# Resend (Email)
RESEND_API_KEY=re_xxxxxxxxx

# Stripe (Payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Cal.com (Scheduling)
CAL_API_KEY=cal_live_xxx
CAL_EVENT_TYPE_ID=123456

# PostHog (Analytics)
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Optional: Sentry (Error Monitoring)
SENTRY_DSN=https://xxx@sentry.io/xxx
```

---

## Next Steps

**Immediate Actions:**
1. **Set up project repository** on GitHub
2. **Initialize Next.js application** with TypeScript and Tailwind
3. **Configure Sanity CMS** and define content schemas
4. **Create design system** (see `2025-10-21-design-system.md`)
5. **Set up development environment** with all integrations

**This Week:**
- Complete Sanity schema definitions
- Build foundational UI components (Button, Card, Form elements)
- Implement homepage layout (static version)
- Configure Vercel deployment
- Set up CI/CD pipeline

---

## Document Status

**Current Position:** Technical specifications complete, ready for development
**Next Milestone:** Repository setup and Next.js initialization
**Dependencies:** Design system creation, content schema finalization

---

**Document Created:** October 21, 2025
**Last Updated:** October 21, 2025
**Status:** ✅ Complete - Ready for Development Setup
