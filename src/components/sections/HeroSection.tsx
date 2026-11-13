import { assetUrl } from '@/lib/asset';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Play,
  Star,
  Sparkles,
  Eye,
  PenTool,
  Plus,
  Gem,
  Leaf,
  MapPin,
  Heart,
  ArrowRight,
} from 'lucide-react';

const FLOATING_BADGES = [
  { label: 'Cilt Bakımı', icon: Sparkles, to: '/hizmetler#cilt-bakimi', top: '28%' },
  { label: 'Kirpik & Kaş', icon: Eye, to: '/hizmetler#kirpik-kas', top: '42%' },
  { label: 'Kalıcı Makyaj', icon: PenTool, to: '/hizmetler#kalici-makyaj', top: '56%' },
  { label: 'Daha Fazlası', icon: Plus, to: '/hizmetler', top: '70%' },
];

const FEATURES = [
  {
    icon: Gem,
    title: 'Uzman Ekip',
    subtitle: 'Deneyimli ve profesyonel',
  },
  {
    icon: Leaf,
    title: 'Kaliteli Ürünler',
    subtitle: 'Güvenli ve dermatolojik onaylı',
  },
  {
    icon: MapPin,
    title: "Mersin'de Merkezi Konum",
    subtitle: 'Kolay ulaşım',
  },
  {
    icon: Heart,
    title: 'Kişiye Özel Bakım',
    subtitle: 'İhtiyacınıza uygun çözümler',
  },
];

interface HeroSectionProps {
  onOpenVideo?: () => void;
}

export function HeroSection({ onOpenVideo }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen min-h-[780px] bg-[#FAF5F0] overflow-hidden flex flex-col justify-between">
      {/* ─── LAYER 1: Full-Bleed Photographic Composition on Right ─── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* High-resolution 16:9 cinematic beauty campaign photograph */}
        <img
          src={assetUrl('/images/hero-beauty.webp')}
          alt="Nils Beauty Studio — Güzelliğiniz Emin Ellerde"
          className="w-full h-full object-cover object-[62%_0%] lg:object-[60%_8%] scale-[1.02]"
        />

        {/* Ambient dark walnut blend across top and right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 85% 25%, transparent 45%, rgba(20, 12, 7, 0.45) 100%)',
          }}
        />
      </div>

      {/* ─── Mobile readability overlay: keeps text crystal clear on small screens while keeping full-bleed desktop ─── */}
      <div className="absolute inset-0 bg-[#FAF5F0]/90 lg:hidden pointer-events-none z-10" />

      {/* ─── LAYER 2: Organic Sculptured Cream Overlay with Metallic Gold Rim ─── */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <svg
          viewBox="0 0 1024 576"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Liquid Champagne Gold Metallic Gradient */}
            <linearGradient id="sculptedGoldGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#DFBF95" />
              <stop offset="25%" stopColor="#C69A6A" />
              <stop offset="50%" stopColor="#FFF6E5" />
              <stop offset="75%" stopColor="#A27646" />
              <stop offset="100%" stopColor="#D8B282" />
            </linearGradient>

            {/* Specular Highlight along gold rim */}
            <linearGradient id="goldGlint" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDFB" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C69A6A" stopOpacity="0.25" />
            </linearGradient>

            {/* Dimensional Edge Drop Shadow */}
            <filter id="goldEdgeShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow
                dx="-2"
                dy="3"
                stdDeviation="4"
                floodColor="#24140E"
                floodOpacity="0.38"
              />
            </filter>

            {/* Wave Volume Shading Gradient */}
            <linearGradient id="waveRibbonShade" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFDFB" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#FAF5F0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EADECF" stopOpacity="0.85" />
            </linearGradient>

            {/* Warm Luminous Gradient for the Cream Region */}
            <radialGradient id="creamLuminous" cx="22%" cy="42%" r="68%">
              <stop offset="0%" stopColor="#FFFBF7" />
              <stop offset="45%" stopColor="#FAF5F0" />
              <stop offset="100%" stopColor="#F5ECE2" />
            </radialGradient>
          </defs>

          {/* Continuous sculpted cream shape covering left side and curling across bottom with double crest */}
          <path
            d="
              M 0,0
              L 680,0
              C 660,45 550,85 475,125
              C 450,145 445,180 456,215
              C 470,260 502,305 500,345
              C 495,385 445,420 430,455
              C 425,480 455,495 495,485
              C 535,470 565,415 625,412
              C 685,410 735,455 785,455
              C 845,455 920,385 975,380
              C 995,378 1015,380 1024,382
              L 1024,576
              L 0,576
              Z
            "
            fill="url(#creamLuminous)"
          />

          {/* Dimensional wave ribbon volume underneath the crest */}
          <path
            d="
              M 495,485
              C 535,470 565,415 625,412
              C 685,410 735,455 785,455
              C 845,455 920,385 975,380
              C 995,378 1015,380 1024,382
              L 1024,406
              C 1015,404 995,402 975,404
              C 920,409 845,479 785,479
              C 735,479 685,434 625,436
              C 565,439 535,494 495,509
              Z
            "
            fill="url(#waveRibbonShade)"
            opacity="0.85"
          />

          {/* Metallic Gold Sculptural Highlight Edge with Dimensional Shadow */}
          <path
            d="
              M 680,0
              C 660,45 550,85 475,125
              C 450,145 445,180 456,215
              C 470,260 502,305 500,345
              C 495,385 445,420 430,455
              C 425,480 455,495 495,485
              C 535,470 565,415 625,412
              C 685,410 735,455 785,455
              C 845,455 920,385 975,380
              C 995,378 1015,380 1024,382
            "
            fill="none"
            stroke="url(#sculptedGoldGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            filter="url(#goldEdgeShadow)"
          />

          {/* Specular Glint Highlight along top crest */}
          <path
            d="
              M 680,0
              C 660,45 550,85 475,125
              C 450,145 445,180 456,215
              C 470,260 502,305 500,345
              C 495,385 445,420 430,455
              C 425,480 455,495 495,485
              C 535,470 565,415 625,412
              C 685,410 735,455 785,455
              C 845,455 920,385 975,380
              C 995,378 1015,380 1024,382
            "
            fill="none"
            stroke="url(#goldGlint)"
            strokeWidth="1.0"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ─── LAYER 3: Photographic Botanical Foreground Shadow (Bottom Left) ─── */}
      <div className="absolute bottom-16 left-0 pointer-events-none z-20 opacity-25 select-none">
        <img
          src={assetUrl('/images/botanical-shadow.png')}
          alt=""
          className="w-72 h-72 sm:w-88 sm:h-88 object-contain -ml-10 -mb-10"
        />
      </div>

      {/* ─── LAYER 4: Left-Side Editorial Content (Starts at ~7% of Viewport) ─── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-[620px] pl-[7vw] pr-6 pt-24 sm:pt-28 pb-4">
        {/* Eyebrow Pill Tag matching Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#E0CDB8]/80 shadow-[0_2px_8px_rgba(105,64,38,0.06)] mb-6 w-fit backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#92552F]" />
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#92552F]">
            Nils Beauty Studio
          </span>
        </motion.div>

        {/* Oversized High-Contrast Editorial Headline matching Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <h1 className="font-serif text-[62px] sm:text-[76px] lg:text-[88px] xl:text-[98px] leading-[0.91] tracking-[-0.03em] text-[#24140E]">
            Güzelliğiniz
          </h1>
          <h1 className="font-serif italic font-normal text-[62px] sm:text-[76px] lg:text-[88px] xl:text-[98px] leading-[0.95] tracking-[-0.03em] text-[#92552F] mt-1">
            Emin Ellerde
          </h1>
        </motion.div>

        {/* Supporting Copy matching Image 2 */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-sans text-[15px] sm:text-base text-[#6F6056] leading-[1.65] max-w-[420px] mb-7"
        >
          Cilt bakımı, kalıcı makyaj, kirpik, kaş ve daha fazlası...{' '}
          Kendinize ayırdığınız zamanı, en iyi deneyime dönüştürüyoruz.
        </motion.p>

        {/* Action Buttons Row matching Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 w-full sm:w-auto"
        >
          {/* Primary CTA with refined caramel-to-walnut gradient and shadow */}
          <Link
            to="/iletisim"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#8C532B] to-[#59341C] text-[#FAF5F0] px-8 py-3.5 sm:py-4 rounded-full font-sans text-sm font-medium shadow-[0_8px_20px_rgba(89,52,28,0.25)] hover:shadow-[0_12px_28px_rgba(89,52,28,0.35)] hover:from-[#9B5C30] hover:to-[#4A2B17] transition-all duration-300"
          >
            <CalendarDays size={16} strokeWidth={1.75} className="text-[#DFBF95]" />
            <span>Randevu Al</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* Secondary CTA */}
          <button
            onClick={onOpenVideo ?? (() => window.location.assign('/hakkimizda'))}
            className="group inline-flex items-center justify-center gap-3 text-[#24140E] hover:text-[#92552F] transition-colors font-sans text-sm font-medium py-2 px-3"
          >
            <span className="w-10 h-10 rounded-full border border-[#DFBF95] bg-white flex items-center justify-center text-[#92552F] shadow-[0_2px_8px_rgba(105,64,38,0.08)] group-hover:scale-105 group-hover:border-[#92552F] transition-all duration-300">
              <Play size={11} fill="currentColor" className="ml-0.5" />
            </span>
            <span>Stüdyomuzu Keşfedin</span>
          </button>
        </motion.div>

        {/* Social Proof Row matching Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center gap-4 pt-4 border-t border-[#E0CDB8]/60 max-w-[420px]"
        >
          <div className="flex -space-x-2.5 shrink-0">
            <img
              src={assetUrl('/images/service-facial.webp')}
              alt="Nils misafiri"
              className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-sm"
            />
            <img
              src={assetUrl('/images/about-treatment.webp')}
              alt="Nils uzmanı"
              className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-sm"
            />
            <img
              src={assetUrl('/images/gallery-6.webp')}
              alt="Nils stüdyo"
              className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-sm"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-[#24140E]">
              <Star size={13} className="text-[#C69A6A] fill-[#C69A6A]" />
              <span>4.9</span>
              <span className="font-normal text-[#6F6056]">(200+ yorum)</span>
            </div>
            <p className="text-[11px] font-sans text-[#6F6056] mt-0.5">
              Mersin'de tercih edilen güzellik stüdyosu
            </p>
          </div>
        </motion.div>
      </div>

      {/* ─── LAYER 5: Floating Service Badges Staggered on Right matching Image 2 ─── */}
      <div className="hidden lg:flex absolute right-[5vw] xl:right-[7vw] top-[48%] -translate-y-1/2 flex-col gap-3.5 z-20">
        {FLOATING_BADGES.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={badge.to}
                className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF0E4]/75 hover:bg-[#FAF0E4]/95 backdrop-blur-md border border-[#E0CDB8]/80 shadow-[0_8px_24px_rgba(40,24,16,0.14)] hover:scale-105 transition-all duration-300"
              >
                <Icon size={15} strokeWidth={1.75} className="text-[#382116] group-hover:text-[#92552F] transition-colors shrink-0" />
                <span className="font-sans text-xs font-semibold text-[#24140E] whitespace-nowrap tracking-wide">
                  {badge.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ─── LAYER 6: Bottom Feature Strip (Proper Height & Clean Outline Icons) ─── */}
      <div className="relative z-30 w-full border-t border-[#E8DACB] bg-[#FAF5F0]/95 backdrop-blur-sm">
        <div className="w-full px-[7vw] py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {FEATURES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-3.5 ${
                    index !== FEATURES.length - 1
                      ? 'md:border-r md:border-[#E8DACB] md:pr-6'
                      : ''
                  }`}
                >
                  <div className="text-[#92552F] shrink-0">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-[13px] sm:text-sm font-semibold text-[#24140E] leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#6F6056] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
