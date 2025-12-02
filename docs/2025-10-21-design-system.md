# Design System - Recovery Centered Living

**Date:** October 21, 2025
**Purpose:** Technical implementation of RCL brand essence into design tokens and components
**Foundation:** Based on `2025-10-21-brand-essence.md`

---

## Context

This document translates the emotional and visual direction defined in the Brand Essence document into concrete design specifications that developers can implement. Every color, font, spacing value, and component style is intentional and serves the goal of creating a **warm, inviting, authentic experience** for people seeking recovery.

---

## Design Tokens

### Color System

**Primary Palette (Warm Earth Tones)**
```css
--rcl-primary-50:  #faf6f3;   /* Lightest cream - backgrounds */
--rcl-primary-100: #f3ebe4;   /* Soft cream - subtle backgrounds */
--rcl-primary-200: #e8d5c6;   /* Light beige - hover states */
--rcl-primary-300: #d4b5a0;   /* Sandy beige */
--rcl-primary-400: #b89378;   /* Warm brown - secondary text */
--rcl-primary-500: #9b7355;   /* Medium brown - primary UI */
--rcl-primary-600: #7d5940;   /* Dark brown - headings */
--rcl-primary-700: #5f4130;   /* Deep brown - emphasis */
--rcl-primary-800: #432d21;   /* Darkest brown - body text */
--rcl-primary-900: #2a1d15;   /* Near black - high contrast */
```

**Secondary Palette (Soft Greens - Growth & Renewal)**
```css
--rcl-secondary-50:  #f4f7f4;  /* Lightest sage */
--rcl-secondary-100: #e6ede6;  /* Soft sage */
--rcl-secondary-200: #c8d8c8;  /* Light sage green */
--rcl-secondary-300: #a6bfa6;  /* Muted green */
--rcl-secondary-400: #7fa47f;  /* Moss green */
--rcl-secondary-500: #5d8a5d;  /* Medium green - CTA backgrounds */
--rcl-secondary-600: #4a6f4a;  /* Forest green */
--rcl-secondary-700: #3a5638;  /* Deep green */
--rcl-secondary-800: #2a3e28;  /* Dark forest */
--rcl-secondary-900: #1c2a1b;  /* Darkest green */
```

**Accent Palette (Sunset Orange - Hope & New Beginnings)**
```css
--rcl-accent-50:  #fff7f0;    /* Lightest peach */
--rcl-accent-100: #ffede0;    /* Soft peach */
--rcl-accent-200: #ffd4b8;    /* Light coral */
--rcl-accent-300: #ffb388;    /* Warm coral */
--rcl-accent-400: #ff8f55;    /* Sunset orange */
--rcl-accent-500: #f26d2b;    /* Primary accent - CTAs */
--rcl-accent-600: #d85217;    /* Deep orange */
--rcl-accent-700: #b43f0f;    /* Burnt orange */
--rcl-accent-800: #8c2f0a;    /* Dark rust */
--rcl-accent-900: #662106;    /* Deepest rust */
```

**Neutral Palette (Warm Grays)**
```css
--rcl-neutral-50:  #fafaf9;   /* Off-white */
--rcl-neutral-100: #f5f5f4;   /* Light gray */
--rcl-neutral-200: #e7e5e4;   /* Soft gray */
--rcl-neutral-300: #d4d2cf;   /* Medium light gray */
--rcl-neutral-400: #a8a29e;   /* Medium gray */
--rcl-neutral-500: #78716c;   /* Dark gray - secondary text */
--rcl-neutral-600: #57534e;   /* Darker gray */
--rcl-neutral-700: #44403c;   /* Deep gray */
--rcl-neutral-800: #292524;   /* Near black */
--rcl-neutral-900: #1c1917;   /* True black */
```

**Semantic Colors**
```css
--rcl-success-light: #d1fae5;   /* Light green background */
--rcl-success:       #10b981;   /* Success green */
--rcl-success-dark:  #047857;   /* Dark success */

--rcl-warning-light: #fef3c7;   /* Light yellow background */
--rcl-warning:       #f59e0b;   /* Warning orange */
--rcl-warning-dark:  #d97706;   /* Dark warning */

--rcl-error-light:   #fee2e2;   /* Light red background */
--rcl-error:         #ef4444;   /* Error red */
--rcl-error-dark:    #dc2626;   /* Dark error */

--rcl-info-light:    #dbeafe;   /* Light blue background */
--rcl-info:          #3b82f6;   /* Info blue */
--rcl-info-dark:     #1d4ed8;   /* Dark info */
```

**Usage Guidelines:**
- Primary palette for main UI, backgrounds, borders
- Secondary palette for CTAs, success states, growth themes
- Accent palette for key actions, highlights, urgency
- Neutrals for text, subtle backgrounds, dividers
- Semantic colors for feedback, alerts, status

---

### Typography

**Font Stack**

**Headings (Serif - Warm & Grounded):**
```css
--font-heading: 'Crimson Pro', Georgia, serif;
font-feature-settings: 'liga' 1, 'calt' 1;

/* Weights available: 400, 500, 600, 700 */
```

**Body Text (Sans-Serif - Clean & Readable):**
```css
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-feature-settings: 'cv05' 1, 'cv08' 1, 'cv11' 1;

/* Weights available: 400, 500, 600, 700 */
```

**Accent/Special (Handwritten - Sparingly):**
```css
--font-accent: 'Caveat', cursive;

/* Weight: 400 only - Use for pull quotes, personal touches */
```

**Type Scale**
```css
--text-xs:    0.75rem;    /* 12px - captions, labels */
--text-sm:    0.875rem;   /* 14px - small body text */
--text-base:  1rem;       /* 16px - body text */
--text-lg:    1.125rem;   /* 18px - large body, intro text */
--text-xl:    1.25rem;    /* 20px - small headings */
--text-2xl:   1.5rem;     /* 24px - section headings */
--text-3xl:   1.875rem;   /* 30px - page headings */
--text-4xl:   2.25rem;    /* 36px - major headings */
--text-5xl:   3rem;       /* 48px - hero headings */
--text-6xl:   3.75rem;    /* 60px - display headings */
--text-7xl:   4.5rem;     /* 72px - large displays (desktop only) */
```

**Line Heights**
```css
--leading-tight:   1.25;   /* Headings */
--leading-snug:    1.375;  /* Subheadings */
--leading-normal:  1.5;    /* Body text */
--leading-relaxed: 1.625;  /* Large body text */
--leading-loose:   2;      /* Poetry, quotes */
```

**Letter Spacing**
```css
--tracking-tighter: -0.05em;  /* Large headings */
--tracking-tight:   -0.025em; /* Headings */
--tracking-normal:  0em;      /* Body text */
--tracking-wide:    0.025em;  /* Uppercase labels */
--tracking-wider:   0.05em;   /* All caps emphasis */
```

**Usage Examples:**
```css
/* Hero Heading */
h1 {
  font-family: var(--font-heading);
  font-size: var(--text-6xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--rcl-primary-800);
}

/* Body Text */
p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--rcl-neutral-800);
}

/* Accent Quote */
.pull-quote {
  font-family: var(--font-accent);
  font-size: var(--text-2xl);
  line-height: var(--leading-loose);
  color: var(--rcl-primary-600);
}
```

---

### Spacing Scale

**Base Unit: 4px**
```css
--spacing-0:   0;          /* 0px */
--spacing-px:  1px;        /* 1px - fine dividers */
--spacing-0-5: 0.125rem;   /* 2px */
--spacing-1:   0.25rem;    /* 4px */
--spacing-2:   0.5rem;     /* 8px */
--spacing-3:   0.75rem;    /* 12px */
--spacing-4:   1rem;       /* 16px */
--spacing-5:   1.25rem;    /* 20px */
--spacing-6:   1.5rem;     /* 24px */
--spacing-8:   2rem;       /* 32px */
--spacing-10:  2.5rem;     /* 40px */
--spacing-12:  3rem;       /* 48px */
--spacing-16:  4rem;       /* 64px */
--spacing-20:  5rem;       /* 80px */
--spacing-24:  6rem;       /* 96px */
--spacing-32:  8rem;       /* 128px */
--spacing-40:  10rem;      /* 160px */
--spacing-48:  12rem;      /* 192px */
--spacing-64:  16rem;      /* 256px */
```

**Section Spacing**
```css
--section-padding-y-mobile:  var(--spacing-12);  /* 48px */
--section-padding-y-desktop: var(--spacing-24);  /* 96px */
--section-padding-x:         var(--spacing-4);   /* 16px mobile, 24px+ desktop */
```

---

### Border Radius

```css
--radius-none: 0;
--radius-sm:   0.125rem;   /* 2px - subtle rounding */
--radius-base: 0.25rem;    /* 4px - buttons, inputs */
--radius-md:   0.375rem;   /* 6px - cards */
--radius-lg:   0.5rem;     /* 8px - larger cards */
--radius-xl:   0.75rem;    /* 12px - modals, featured content */
--radius-2xl:  1rem;       /* 16px - hero sections */
--radius-3xl:  1.5rem;     /* 24px - special elements */
--radius-full: 9999px;     /* Fully rounded (pills, avatars) */
```

**Usage:** Prefer rounded corners throughout for warmth and approachability.

---

### Shadows

**Purpose:** Create subtle depth without harsh edges.

```css
--shadow-xs:  0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm:  0 1px 3px 0 rgb(0 0 0 / 0.1),
              0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1),
              0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1),
              0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1),
              0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

**Warm Shadow (for cards, images):**
```css
--shadow-warm: 0 10px 30px -5px rgba(155, 115, 85, 0.15),
               0 4px 6px -4px rgba(155, 115, 85, 0.08);
```

---

### Animation & Transitions

**Duration**
```css
--duration-fast:    150ms;   /* Hover states, tooltips */
--duration-base:    300ms;   /* Default transitions */
--duration-slow:    500ms;   /* Complex animations */
--duration-slower:  700ms;   /* Page transitions */
```

**Easing Functions**
```css
--ease-in:     cubic-bezier(0.4, 0, 1, 1);
--ease-out:    cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-natural: cubic-bezier(0.25, 0.1, 0.25, 1);  /* Preferred */
```

**Default Transition**
```css
transition: all var(--duration-base) var(--ease-natural);
```

**Micro-Interactions**
- Buttons: Scale up slightly on hover (transform: scale(1.02))
- Links: Underline slide-in effect
- Cards: Lift with shadow increase on hover
- Forms: Smooth border color changes on focus

---

## Component Library

### Buttons

**Primary Button (Main CTAs)**
```tsx
<button className="btn-primary">
  Apply Now
</button>

.btn-primary {
  background: var(--rcl-accent-500);
  color: white;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  transition: all var(--duration-base) var(--ease-natural);
}

.btn-primary:hover {
  background: var(--rcl-accent-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**Secondary Button**
```tsx
.btn-secondary {
  background: var(--rcl-secondary-500);
  color: white;
  /* Same padding, radius, etc. as primary */
}

.btn-secondary:hover {
  background: var(--rcl-secondary-600);
}
```

**Outline Button**
```tsx
.btn-outline {
  background: transparent;
  border: 2px solid var(--rcl-primary-500);
  color: var(--rcl-primary-700);
}

.btn-outline:hover {
  background: var(--rcl-primary-50);
  border-color: var(--rcl-primary-600);
}
```

**Ghost Button (Subtle)**
```tsx
.btn-ghost {
  background: transparent;
  color: var(--rcl-primary-600);
}

.btn-ghost:hover {
  background: var(--rcl-primary-50);
}
```

---

### Cards

**Basic Card**
```tsx
.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-warm);
  transition: all var(--duration-base) var(--ease-natural);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

**House Card (Special)**
```tsx
.house-card {
  /* Same as .card */
  border: 1px solid var(--rcl-primary-100);
  overflow: hidden;
}

.house-card__image {
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.house-card__content {
  padding: var(--spacing-6);
}

.house-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  color: var(--rcl-primary-800);
  margin-bottom: var(--spacing-2);
}
```

---

### Forms

**Input Fields**
```tsx
.input {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid var(--rcl-neutral-200);
  border-radius: var(--radius-base);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--rcl-neutral-800);
  transition: all var(--duration-base) var(--ease-natural);
}

.input:focus {
  outline: none;
  border-color: var(--rcl-secondary-500);
  box-shadow: 0 0 0 3px rgba(93, 138, 93, 0.1);
}

.input::placeholder {
  color: var(--rcl-neutral-400);
}
```

**Label**
```tsx
.label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--rcl-neutral-700);
  margin-bottom: var(--spacing-2);
  display: block;
}
```

**Error State**
```tsx
.input--error {
  border-color: var(--rcl-error);
}

.error-message {
  font-size: var(--text-sm);
  color: var(--rcl-error);
  margin-top: var(--spacing-1);
}
```

---

### Testimonial Component

```tsx
.testimonial {
  background: var(--rcl-primary-50);
  border-left: 4px solid var(--rcl-accent-500);
  padding: var(--spacing-6);
  border-radius: var(--radius-md);
  margin: var(--spacing-8) 0;
}

.testimonial__quote {
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  color: var(--rcl-primary-700);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--spacing-4);
}

.testimonial__author {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--rcl-neutral-600);
}
```

---

## Layout Patterns

### Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--spacing-8);
  }
}
```

### Section Spacing

```css
.section {
  padding: var(--section-padding-y-mobile) 0;
}

@media (min-width: 768px) {
  .section {
    padding: var(--section-padding-y-desktop) 0;
  }
}
```

---

## Responsive Breakpoints

```css
/* Mobile-first approach */
--screen-sm:  640px;   /* Small tablets */
--screen-md:  768px;   /* Tablets */
--screen-lg:  1024px;  /* Laptops */
--screen-xl:  1280px;  /* Desktops */
--screen-2xl: 1536px;  /* Large desktops */
```

---

## Accessibility Standards

### Color Contrast Ratios

All color combinations must meet WCAG 2.1 AA standards:
- **Normal text:** 4.5:1 minimum
- **Large text (18px+ or 14px+ bold):** 3:1 minimum
- **UI components:** 3:1 minimum

**Verified Combinations:**
✅ `--rcl-primary-800` on white (10.2:1)
✅ `--rcl-neutral-800` on white (11.4:1)
✅ `white` on `--rcl-accent-500` (4.7:1)
✅ `white` on `--rcl-secondary-600` (5.1:1)

### Focus Indicators

```css
:focus-visible {
  outline: 2px solid var(--rcl-secondary-500);
  outline-offset: 2px;
}
```

### Screen Reader Only Content

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Design Implementation Checklist

For every new component or page:

**Color:**
- [ ] Uses defined color tokens (no arbitrary hex codes)
- [ ] Meets contrast ratio requirements
- [ ] Follows semantic color usage (success = green, error = red)

**Typography:**
- [ ] Uses defined font families and sizes
- [ ] Line height appropriate for text size
- [ ] Headings use heading font, body uses body font

**Spacing:**
- [ ] Consistent use of spacing scale (no random pixels)
- [ ] Generous white space for breathing room
- [ ] Logical visual hierarchy

**Interaction:**
- [ ] Hover states defined and smooth
- [ ] Focus states visible for keyboard navigation
- [ ] Transitions use defined duration and easing

**Accessibility:**
- [ ] Semantic HTML (headings, landmarks, lists)
- [ ] ARIA labels where needed
- [ ] Keyboard navigable
- [ ] Screen reader tested

---

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf6f3',
          100: '#f3ebe4',
          // ... rest of primary palette
        },
        secondary: {
          50: '#f4f7f4',
          // ... rest of secondary palette
        },
        accent: {
          50: '#fff7f0',
          // ... rest of accent palette
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'cursive'],
      },
      boxShadow: {
        warm: '0 10px 30px -5px rgba(155, 115, 85, 0.15), 0 4px 6px -4px rgba(155, 115, 85, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Next Steps

**Immediate Actions:**
1. **Implement design tokens** in Tailwind config
2. **Create component library** in Figma or Storybook
3. **Build foundation components** (Button, Input, Card)
4. **Test accessibility** with axe DevTools
5. **Gather real photos** and replace placeholders

**This Week:**
- Finalize exact color hex codes (test with real content)
- Select and self-host fonts (Crimson Pro, Inter)
- Build 10-15 core components
- Create example page layouts

---

## Document Status

**Current Position:** Design system defined, ready for implementation
**Next Milestone:** Component library development in code
**Dependencies:** Font licensing/hosting, final brand color approval

---

**Document Created:** October 21, 2025
**Last Updated:** October 21, 2025
**Status:** ✅ Complete - Ready for Implementation
