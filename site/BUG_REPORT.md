# Recovery Centered Living - Bug Report & Audit
**Date:** 2025-01-05
**Auditor:** Claude Code
**Build Status:** Passing (Next.js 15.5.9)

---

## Executive Summary

The mobile hamburger menu has been **fixed** (was blocking user interaction due to z-index conflict). The codebase is well-structured but has several issues requiring attention before production deployment, primarily around **image optimization** (critical performance impact) and **missing API integrations**.

---

## FIXED ISSUES

### [FIXED] Mobile Hamburger Menu Not Working
**Severity:** CRITICAL
**Status:** RESOLVED
**Files Modified:**
- `app/globals.css` - Changed `body::before` z-index from 9999 to 1
- `components/layout/Header.tsx` - Complete rewrite with:
  - Proper z-index hierarchy (menu button: z-60, overlay: z-55)
  - Body scroll lock when menu open
  - Smooth open/close animations with staggered nav items
  - Touch event handling (`onTouchEnd` + `onClick`)
  - Backdrop click to close
  - Proper ARIA attributes for accessibility
  - Focus trap via `tabIndex` management

---

## CRITICAL BUGS (P0)

### 1. Massive Image Files - Performance Killer
**Severity:** CRITICAL
**Impact:** Page load time, mobile performance, bandwidth costs, poor Lighthouse scores
**Location:** `/public/images/community/`

| File | Size | Issue |
|------|------|-------|
| garden.jpg | 12.0 MB | Unusable on mobile |
| service.jpg | 5.6 MB | 10x larger than needed |
| house-meeting.jpg | 5.2 MB | 10x larger than needed |
| backyard-1.jpg | 4.6 MB | 10x larger than needed |
| backyard-3.jpg | 4.1 MB | 10x larger than needed |
| backyard-2.jpg | 3.7 MB | 10x larger than needed |
| winter-fun.jpg | 2.9 MB | Too large |
| family-dinner-2.jpg | 2.9 MB | Too large |
| snow-day.jpg | 2.9 MB | Too large |
| family-meal.jpg | 2.9 MB | Too large |
| meeting-circle.jpg | 2.8 MB | Too large |
| mom-kid.jpg | 2.7 MB | Too large |

**Total community images:** ~60 MB (should be <5 MB)

**Recommended Fix:**
1. Convert all images to WebP format with JPG fallback
2. Resize to max 1920px wide for full-width, 800px for cards
3. Target file size: <200KB for most images
4. Use Next.js Image component with `sizes` prop for responsive loading

### 2. Logo File Too Large
**Severity:** HIGH
**File:** `/public/images/rcl-logo.png` - 565 KB
**Impact:** Delays above-fold render
**Recommended Size:** <100 KB
**Fix:** Optimize PNG or convert to SVG

---

## HIGH PRIORITY BUGS (P1)

### 3. Chat API Fallback Message Has Placeholder Phone
**Severity:** HIGH
**File:** `app/api/chat/route.ts:94`
```typescript
fallback: "I'm having trouble connecting right now. Please call us at (512) XXX-XXXX..."
```
**Impact:** Users see broken phone number when chat fails
**Fix:** Replace with `siteConfig.GOOGLE_VOICE_DISPLAY` (512-777-1748)

### 4. Contact Form Email Not Actually Sending
**Severity:** HIGH
**File:** `app/api/contact/route.ts`
**Issue:** Form submissions only log to console; no email service integration
**Impact:** Contact form appears to work but messages are lost
**Fix:** Integrate with SendGrid, Resend, or GoHighLevel webhook

### 5. Hardcoded Developer Email in Contact API
**Severity:** MEDIUM-HIGH
**File:** `app/api/contact/route.ts:4`
```typescript
const RECIPIENT_EMAIL = 'chrixcolvard@icloud.com';
```
**Issue:** Personal email hardcoded; should be client's email
**Fix:** Move to environment variable and update to `recoverycenteredliving@gmail.com`

### 6. IntakeWizard References Non-Existent API Endpoint
**Severity:** MEDIUM
**File:** `components/forms/IntakeWizard.tsx:108`
**Issue:** Submits to `/api/intake` which doesn't exist
**Note:** The main intake page uses external OathTrack, so this component may be unused
**Fix:** Either create the API endpoint or remove the component

---

## MEDIUM PRIORITY BUGS (P2)

### 7. Chat API Using Deprecated Model
**Severity:** MEDIUM
**File:** `app/api/chat/route.ts:54`
```typescript
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
```
**Issue:** `gemini-pro` may be deprecated
**Fix:** Update to `gemini-1.5-flash` or `gemini-2.0-flash`

### 8. No Rate Limiting on Chat API
**Severity:** MEDIUM
**File:** `app/api/chat/route.ts`
**Issue:** Chat endpoint vulnerable to abuse/DoS
**Fix:** Add rate limiting middleware

### 9. Alert() Used for Error Messages
**Severity:** LOW-MEDIUM
**File:** `components/forms/IntakeWizard.tsx:123`
**Issue:** Native `alert()` provides poor UX
**Fix:** Replace with toast notification component

---

## LOW PRIORITY (P3)

### 10. Console Statements in Production Code
**Severity:** LOW
**Files:**
- `app/api/contact/route.ts:49-53` - Multiple console.log
- `app/api/chat/route.ts:90` - console.error
- `components/chat/GeminiChat.tsx:83` - console.error
- `components/forms/IntakeWizard.tsx:54,122` - console.error
- `app/contact/page.tsx:63` - console.error

**Fix:** Use conditional logging or proper logging service

### 11. Hero Video Large File Size
**Severity:** LOW
**File:** `/public/images/hero-video.mp4` - 4.8 MB
**Impact:** Slow initial load on mobile
**Fix:** Compress video, consider lazy loading, or use video CDN

---

## CODE QUALITY OBSERVATIONS

### Positive Findings
- TypeScript strict mode enabled
- Proper React hooks usage with cleanup
- Good component organization
- Zod validation schemas well-implemented
- Framer Motion animations well-done
- Responsive design with Tailwind CSS
- Modal context properly encapsulated

### Areas for Improvement
- `IntakeWizard.tsx` at 729 lines should be split into smaller components
- Environment variable validation at startup
- Consolidate hardcoded values into `config/site.ts`

---

## ACCESSIBILITY NOTES

The mobile menu fix includes proper accessibility:
- `aria-expanded` on menu button
- `aria-controls` linking button to menu
- `aria-hidden` on overlay when closed
- `tabIndex` management to prevent hidden element focus
- Screen reader text with `sr-only` class

**Remaining items to verify:**
- Color contrast ratios (especially white text on hero overlay)
- Focus trap in modal components
- Keyboard navigation throughout site

---

## Quick Wins (Can Fix Today)

1. [x] Fix mobile menu z-index and functionality
2. [ ] Fix chat API fallback phone number placeholder
3. [ ] Update contact API recipient email to client's email
4. [ ] Optimize hero-bg.jpg (currently 348KB)

## Requires More Work

1. [ ] Compress all community images (several hours of image work)
2. [ ] Integrate email service for contact form
3. [ ] Add rate limiting to APIs
4. [ ] Replace alert() with toast component

---

*Generated by Claude Code audit on 2025-01-05*
