# Performance Recommendations - Recovery Centered Living
**Date:** 2025-01-05
**Current Build Size:** 102 KB shared JS + page-specific bundles
**Framework:** Next.js 15.5.9

---

## Priority Matrix

| Priority | Task | Estimated Impact | Effort |
|----------|------|------------------|--------|
| P0 | Image Optimization | -70% page weight | 3-4 hours |
| P0 | Logo Optimization | -400KB | 15 minutes |
| P1 | Enable WebP Conversion | +20% faster load | Config change |
| P1 | Add Image Sizes Prop | Better LCP | 1 hour |
| P2 | Video Lazy Load | Faster mobile | 30 minutes |
| P2 | Compress Hero Video | -3MB | 30 minutes |
| P3 | Remove Console Logs | Minor cleanup | 20 minutes |

---

## P0: CRITICAL - Image Optimization

### Problem
The `/public/images/community/` folder contains **~60 MB of unoptimized images**. This is approximately **10-20x larger** than necessary and will cause:
- Extremely slow page loads on mobile
- Poor Core Web Vitals (LCP, FCP)
- High bandwidth costs
- Failed Lighthouse audits

### Specific Files Requiring Immediate Action

**Priority 1 - Remove or drastically compress:**
| File | Current | Target | Action |
|------|---------|--------|--------|
| garden.jpg | 12.0 MB | 200 KB | Delete or resize to 1920x1080 + compress |
| service.jpg | 5.6 MB | 150 KB | Resize + compress |
| house-meeting.jpg | 5.2 MB | 150 KB | Resize + compress |
| backyard-1.jpg | 4.6 MB | 150 KB | Resize + compress |
| backyard-3.jpg | 4.1 MB | 150 KB | Resize + compress |
| backyard-2.jpg | 3.7 MB | 150 KB | Resize + compress |

**Priority 2 - Compress moderately:**
| File | Current | Target |
|------|---------|--------|
| winter-fun.jpg | 2.9 MB | 150 KB |
| family-dinner-2.jpg | 2.9 MB | 150 KB |
| snow-day.jpg | 2.9 MB | 150 KB |
| family-meal.jpg | 2.9 MB | 150 KB |
| meeting-circle.jpg | 2.8 MB | 150 KB |
| mom-kid.jpg | 2.7 MB | 150 KB |
| love-sign.jpg | 2.0 MB | 100 KB |

### Recommended Process

```bash
# Using ImageMagick (install: brew install imagemagick)
# Resize to max 1920px wide and compress quality 80%

cd /public/images/community

# For each large file:
magick input.jpg -resize 1920x1920\> -quality 80 output.jpg

# Or use squoosh.app for web-based compression with WebP output
```

### Next.js Image Configuration

Add to `next.config.ts`:
```typescript
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

---

## P0: Logo Optimization

### Problem
`rcl-logo.png` at 565 KB is too large for a logo that appears on every page.

### Solution Options

**Option 1: Convert to SVG (Best)**
- Infinite scalability
- ~5-10 KB file size
- Crisp at all resolutions

**Option 2: Optimize PNG**
```bash
# Using pngquant (brew install pngquant)
pngquant --quality=65-80 rcl-logo.png --output rcl-logo-optimized.png

# Target: <100 KB
```

**Option 3: Use WebP with PNG fallback**
- Keep PNG for browsers without WebP support
- Use WebP as primary

---

## P1: Add Image Sizes Prop

### Problem
Many `<Image>` components use `fill` without explicit size hints, causing layout shift.

### Current (Bad):
```tsx
<Image
  src={house.heroImage}
  alt={house.name}
  fill
  className="object-cover"
/>
```

### Recommended (Good):
```tsx
<Image
  src={house.heroImage}
  alt={house.name}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

### Files to Update
- `components/sections/HouseShowcase.tsx`
- `components/sections/Hero.tsx`
- `components/sections/CommunityLife.tsx`
- `components/ui/Polaroid.tsx`
- `app/houses/[slug]/page.tsx`

---

## P1: Enable Modern Image Formats

### Add to next.config.ts:
```typescript
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

Next.js will automatically serve AVIF/WebP to supporting browsers, reducing file sizes by 30-50%.

---

## P2: Video Optimization

### Problem
`hero-video.mp4` at 4.8 MB loads immediately, blocking the critical render path.

### Solution 1: Compress Video
```bash
# Using ffmpeg (brew install ffmpeg)
ffmpeg -i hero-video.mp4 -vcodec h264 -acodec aac -b:v 1M hero-video-compressed.mp4

# Target: <1.5 MB
```

### Solution 2: Lazy Load Video
Only load video after page content is visible:

```tsx
// Use intersection observer to load video
const [shouldLoad, setShouldLoad] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
      }
    },
    { threshold: 0.1 }
  );

  if (videoRef.current) {
    observer.observe(videoRef.current);
  }

  return () => observer.disconnect();
}, []);

return (
  <video ref={videoRef} autoPlay muted loop playsInline>
    {shouldLoad && <source src="/images/hero-video.mp4" type="video/mp4" />}
  </video>
);
```

### Solution 3: Use Video CDN
Consider Cloudinary or Mux for adaptive bitrate streaming.

---

## P3: Code Cleanup

### Remove Console Statements
Create a logging utility:

```typescript
// lib/logger.ts
const isDev = process.env.NODE_ENV === 'development';

export const logger = {
  log: (...args: unknown[]) => isDev && console.log(...args),
  error: (...args: unknown[]) => console.error(...args), // Keep errors
  warn: (...args: unknown[]) => isDev && console.warn(...args),
};
```

Replace `console.log` with `logger.log` throughout codebase.

---

## Bundle Analysis

### Current State
```
First Load JS shared by all: 102 kB
├ chunks/255-*.js          45.9 kB (framer-motion, etc.)
├ chunks/4bd1b696-*.js     54.2 kB (react-dom, etc.)
└ other shared chunks       1.93 kB
```

### Recommendations
- Bundle size is reasonable for a Next.js app with animations
- Consider dynamic importing for Framer Motion on pages that don't need it
- The GeminiChat component could be lazy-loaded

```tsx
// Lazy load chat widget
const GeminiChat = dynamic(() => import('@/components/chat/GeminiChat'), {
  ssr: false,
  loading: () => null,
});
```

---

## Performance Checklist

### Before Launch
- [ ] Compress all images in `/public/images/community/` to <200 KB each
- [ ] Optimize `rcl-logo.png` to <100 KB
- [ ] Add `sizes` prop to all Image components
- [ ] Enable WebP/AVIF in next.config.ts
- [ ] Compress hero-video.mp4 to <1.5 MB

### Post-Launch
- [ ] Run Lighthouse audit and document scores
- [ ] Set up Core Web Vitals monitoring
- [ ] Consider CDN for images/video
- [ ] Add error tracking (Sentry)

---

## Expected Improvements

After implementing these recommendations:

| Metric | Current (Est.) | Target |
|--------|---------------|--------|
| Total Page Weight | ~70 MB | ~5 MB |
| Time to Interactive | 8-12s | <3s |
| Largest Contentful Paint | >5s | <2.5s |
| Lighthouse Performance | 40-60 | 85+ |

---

*Generated by Claude Code audit on 2025-01-05*
