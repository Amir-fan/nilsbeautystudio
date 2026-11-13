# Nils Beauty Studio — Bespoke Luxury Website

A premium bespoke luxury web experience created for **Nils Beauty Studio** in Mersin, Türkiye. Built with refined editorial typography, organic flowing liquid forms, bespoke componentry, photographic storytelling, and production-ready architecture.

---

## 🎨 Visual Identity & Design System

- **Palette**: Warm ivory (`#F4EAE0`), soft porcelain (`#FFFAF5`), muted beige (`#E6D3C1`), walnut brown (`#694026`), rich caramel (`#92552F`), dark chocolate (`#382116`), and champagne gold (`#C69A6A`).
- **Typography**: 
  - Headings: *Cormorant Garamond* (high-contrast editorial serif with authentic italic character).
  - Body & UI: *DM Sans* (refined modern sans-serif with excellent legibility and Turkish character support).
- **Signature Motif**: Handcrafted organic cream-and-walnut liquid contours with subtle champagne gold metallic boundary tracing.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node 24)
- npm 10+

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

The production preview server runs on `http://localhost:4173/`.

---

## ⚙️ Updating Business Information

All business details, verified phone numbers, working hours, and service catalogs are centralized in a single configuration file:

📁 **`src/content/site.ts`**

```typescript
export const SITE_CONFIG = {
  business: {
    name: 'Nils Beauty Studio',
    tagline: 'Güzelliğiniz Emin Ellerde',
    city: 'Mersin',
    country: 'Türkiye',
    address: 'Mezitli, Mersin / Türkiye', // Update with exact studio street address
    mapsEmbedUrl: null,                  // Optional custom Google Maps embed URL
    mapsSearchQuery: 'Nils Beauty Studio Mersin',
  },
  contact: {
    phone: '+90 530 123 45 67',          // Update with studio phone
    whatsapp: '905301234567',            // Format: 905XXXXXXXXX for WhatsApp deep link
    email: 'info@nilsbeauty.com',         // Official studio contact email
    instagram: 'nilsbeautystudio',        // Official Instagram username
  },
  hours: {
    weekdays: '09:00 – 19:00',
    saturday: '09:00 – 19:00',
    sunday: 'Kapalı',
  },
  services: [ ... ],                     // Add, edit, or reorder services
  gallery: [ ... ],                      // Add or replace portfolio photographs
};
```

---

## 📁 Project Architecture

```
nils-beauty-studio/
├── public/
│   ├── icons/
│   │   └── favicon.svg           # Custom 'N' monogram on walnut ground
│   └── images/                   # High-resolution luxury beauty photography (WebP)
│       ├── hero-beauty.webp      # 1200x1600 editorial beauty portrait
│       ├── service-facial.webp   # Medikal & klasik cilt bakımı
│       ├── service-lashes.webp   # Kirpik lifting & kaş laminasyonu
│       ├── service-makeup.webp   # Profesyonel makyaj uygulaması
│       ├── service-ritual.webp   # İmza güzellik ritüeli hâlâ
│       ├── about-studio.webp     # Stüdyo iç mekan karşılama konsepti
│       ├── about-treatment.webp  # Uzman bakım protokolü sahnesi
│       ├── contact-beauty.webp   # Lüks kozmetik detay vinyeti
│       └── gallery-1..6.webp     # Asimetrik portfolyo kareleri
├── src/
│   ├── components/
│   │   ├── brand/
│   │   │   ├── Icons.tsx           # Instagram & custom SVG brand icons
│   │   │   ├── LuxuryButton.tsx    # Bespoke animated pill buttons
│   │   │   ├── NilsWordmark.tsx    # Editorial serif brand typography
│   │   │   ├── OrganicDivider.tsx  # Flowing liquid SVG section transition
│   │   │   ├── OrganicImageMask.tsx# Signature hero mask with champagne highlight
│   │   │   └── ScrollReveal.tsx    # Viewport-aware scroll motion wrapper
│   │   ├── forms/
│   │   │   └── AppointmentForm.tsx # RHF + Zod appointment request with WhatsApp link
│   │   ├── layout/
│   │   │   ├── PageTransition.tsx  # Route motion transitions
│   │   │   ├── SiteFooter.tsx      # Signature 5-column walnut footer
│   │   │   └── SiteHeader.tsx      # Sticky glass navigation & mobile drawer
│   │   └── sections/
│   │       ├── AboutSection.tsx    # Studio reception concept & credibility strip
│   │       ├── ContactSection.tsx  # 3-column contact, form & interactive map
│   │       ├── HeroSection.tsx     # Hero composition with floating service pills
│   │       ├── LocationMap.tsx     # Google Maps embed with custom Nils pin
│   │       ├── ServicesSection.tsx # Embla horizontal carousel & quality strip
│   │       └── TeamSection.tsx     # 3-column team & philosophy showcase
│   ├── content/
│   │   └── site.ts                 # Centralized business configuration
│   ├── pages/
│   │   ├── AboutPage.tsx           # /hakkimizda
│   │   ├── ContactPage.tsx         # /iletisim
│   │   ├── GalleryPage.tsx         # /galeri with full-screen lightbox
│   │   ├── HomePage.tsx            # /
│   │   ├── NotFoundPage.tsx        # 404 handler
│   │   └── ServicesPage.tsx        # /hizmetler
│   ├── App.tsx                     # Router & layout shell
│   ├── index.css                   # Tailwind tokens, Google Fonts & custom CSS
│   └── main.tsx                    # React 19 mount & BrowserRouter
├── tailwind.config.js              # Brand color tokens & typography scale
└── vite.config.ts                  # Vite config with `@/` path alias
```

---

## 🌟 Key Features

1. **Signature Organic Masking**: Custom SVG clipping boundary between editorial copy and the hero portrait, bordered by an ultra-thin champagne gold highlight.
2. **Interactive Services Carousel**: Embla Carousel with drag, touch, keyboard support, partial reveal, and floating service icons.
3. **Editorial Gallery with Lightbox**: CSS Grid layout with intentional asymmetric column/row spans, category filters, and keyboard-accessible modal lightbox.
4. **Interactive WhatsApp Booking**: Form with Zod validation that constructs a structured Turkish appointment request message and opens WhatsApp directly.
5. **Interactive Google Maps**: Real responsive Google Maps embed with custom Nils pin overlay and external search deep link.
6. **Responsive Craftsmanship**: Meticulously designed for 1920px widescreen, 1440px desktop, 1024px tablet, and 390px mobile viewports.

