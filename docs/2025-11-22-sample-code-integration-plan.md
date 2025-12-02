# Sample Code Integration Plan - Combining Best of Both

**Date:** November 22, 2025
**Goal:** Merge sample code architecture with current Next.js implementation

---

## What We're Combining

### Sample Code (Vite + React) - Strengths:
✅ **Exceptional Design Patterns:**
- Brand color palette (earth, sage, sunset, sand)
- Sticky header with scroll transitions
- 3-step intake wizard with progress bar
- AI chatbot (GeminiChat)
- Social media feed integration
- Founder story section with photo treatment
- Professional footer with 988 crisis hotline
- TROHN certification badge
- Animated entrances and micro-interactions

### Current Site (Next.js 15) - Strengths:
✅ **Superior Technical Foundation:**
- Next.js 15 + App Router
- TypeScript strict mode
- Tailwind CSS v4
- Real RCL images integrated
- Proper SEO structure
- Image optimization
- Production-ready architecture

---

## Integration Strategy

### Phase 1: Foundation (Color Palette & Types)
1. **Update Tailwind v4 color scheme:**
   ```css
   @theme {
     --color-brand-earth: #9b7355;    /* Primary Brown */
     --color-brand-sage: #5d8a5d;     /* Secondary Green */
     --color-brand-sand: #fdfbf7;     /* Background Cream */
     --color-brand-sunset: #f26d2b;   /* Accent Orange */
     --color-brand-text: #292524;     /* Warm Black */
   }
   ```

2. **Port TypeScript types:**
   - House interface (with type, status, features)
   - Testimonial interface
   - IntakeFormData interface
   - HouseType and AvailabilityStatus enums

### Phase 2: Core Components
1. **Header Component** (`components/layout/Header.tsx`)
   - Sticky navigation with scroll behavior
   - Logo with house icon
   - Desktop + Mobile navigation
   - "Apply Now" CTA button
   - Smooth transitions

2. **Footer Component** (`components/layout/Footer.tsx`)
   - Four-column layout
   - Social media links (Instagram, Facebook)
   - TROHN certification badge
   - 988 Crisis Support callout
   - Navigation links

3. **IntakeWizard Component** (`components/forms/IntakeWizard.tsx`)
   - Step 1: Basic Info (name, phone, house type)
   - Step 2: Details (urgency, sobriety date, insurance)
   - Step 3: Confirmation
   - Progress bar visual
   - Form validation
   - Animated transitions between steps

### Phase 3: Enhanced Homepage
1. **Hero Section Upgrade:**
   - Community group photo background
   - Darker gradient overlay for readability
   - "Accepting New Residents" badge with pulse
   - Dual CTA buttons
   - Scroll indicator animation

2. **Founder Story Section (NEW):**
   - Slade Skaggs photo (rcl-founder.jpg)
   - Personal quote and mission
   - "Built on Experience, Driven by Love" messaging
   - Link to full About page

3. **Social Feed Section (NEW):**
   - 4-grid Instagram-style layout
   - Hover effects with captions
   - TROHN badge featured
   - Link to @recovery.centered.living

4. **Intake Application Section (NEW):**
   - Dark brand-earth background
   - Left: Benefits (No fees, Same-day response, Inclusive pathways)
   - Right: IntakeWizard component
   - Sticky left content on scroll

### Phase 4: Optional Enhancements
1. **GeminiChat AI Assistant:**
   - Floating chat button (bottom-right)
   - Collapsible chat window
   - Context-aware responses about RCL
   - Requires: Gemini API key

2. **HouseCard Redesign:**
   - Availability status badge
   - Manager name + quote
   - Features list
   - Hover effects
   - Link to detailed house page

---

## Color Migration Map

| Old Variable | New Variable | Hex Code | Usage |
|---|---|---|---|
| primary-800 | brand-earth | #9b7355 | Primary CTA, headings |
| secondary-600 | brand-sage | #5d8a5d | Secondary accents |
| accent-500 | brand-sunset | #f26d2b | Action buttons, highlights |
| primary-50 | brand-sand | #fdfbf7 | Backgrounds, cards |
| neutral-800 | brand-text | #292524 | Body text |

---

## Design Patterns to Implement

### Animations:
```css
/* Fade + Slide In */
.animate-in.fade-in.slide-in-from-bottom-4

/* Pulse Animation */
.animate-pulse (for badges)

/* Bounce */
.animate-bounce (for scroll indicator)
```

### Component Patterns:
- **Pills/Badges**: `px-4 py-2 rounded-full border`
- **Cards**: `rounded-2xl shadow-xl p-6 border`
- **Buttons**: `rounded-full px-8 py-4 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1`
- **Gradients**: `bg-gradient-to-br from-black/70 via-black/50 to-brand-earth/90`

### Typography Patterns:
- **Section Headings**: `font-serif text-4xl md:text-5xl font-bold`
- **Eyebrow Labels**: `text-sm font-bold uppercase tracking-widest`
- **Body Text**: `text-stone-600 leading-relaxed`

---

## File Structure (Post-Migration)

```
/site/
├── /app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Enhanced homepage
│   └── globals.css             # Updated with brand colors
├── /components/
│   ├── /layout/
│   │   ├── Header.tsx          # NEW: Sticky header
│   │   └── Footer.tsx          # NEW: Professional footer
│   ├── /forms/
│   │   └── IntakeWizard.tsx    # NEW: 3-step intake
│   ├── /sections/
│   │   ├── Hero.tsx            # ENHANCED: Community photo
│   │   ├── FounderStory.tsx    # NEW: Slade section
│   │   ├── SocialFeed.tsx      # NEW: Instagram grid
│   │   ├── IntakeSection.tsx   # NEW: Application CTA
│   │   └── HouseShowcase.tsx   # ENHANCED: New design
│   ├── /ui/
│   │   ├── Button.tsx          # UPDATE: New variants
│   │   └── Card.tsx            # UPDATE: New styles
│   └── /chat/
│       └── GeminiChat.tsx      # OPTIONAL: AI assistant
├── /types/
│   └── index.ts                # NEW: TypeScript types
└── /public/images/
    ├── /brand/                 # Logo, hero images
    ├── /houses/                # House photos
    ├── /team/                  # Founder, managers
    └── /social/                # Community photos
```

---

## Implementation Order

### Session 1 (Today): Foundation
1. ✅ Update color palette in globals.css
2. ✅ Create TypeScript types file
3. ✅ Build Header component
4. ✅ Build Footer component

### Session 2: Forms & Sections
1. Build IntakeWizard component
2. Create FounderStory section
3. Create SocialFeed section
4. Create IntakeSection wrapper

### Session 3: Homepage Enhancement
1. Enhance Hero with community photo
2. Update HouseShowcase with new design
3. Compose enhanced homepage
4. Add animations and transitions

### Session 4 (Optional): Advanced Features
1. GeminiChat AI assistant
2. Individual house detail pages
3. About page expansion
4. Resources section

---

## Success Criteria

**Design Quality:**
- Moves from 8.5/10 → 9.5/10
- Awwwards-worthy aesthetic
- Professional, warm, inviting
- Screenshot-worthy moments throughout

**Functionality:**
- 3-step intake form with validation
- Sticky navigation that adapts on scroll
- Social proof integration
- Crisis support prominently featured
- Mobile-responsive across all sections

**Brand Coherence:**
- Consistent color usage
- Typography hierarchy clear
- Warm, recovery-focused messaging
- Professional yet approachable

---

**Status:** 📝 Planning Complete
**Next Action:** Begin Phase 1 - Foundation setup
**Estimated Total Time:** 4-6 hours across multiple sessions
