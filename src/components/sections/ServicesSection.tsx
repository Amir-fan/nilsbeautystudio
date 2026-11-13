import { assetUrl } from '@/lib/asset';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Eye,
  PenTool,
  Flower2,
  Award,
  Users,
} from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';

const ICON_MAP = {
  sparkles: Flower2,
  eye: Eye,
  'pen-line': PenTool,
  'flower-2': Sparkles,
};

export function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative bg-[#F8F2EC] pt-24 lg:pt-28 pb-0 overflow-hidden">
      {/* Realistic photographic botanical shadow — top left */}
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none opacity-20 select-none z-0">
        <img
          src={assetUrl('/images/botanical-shadow.png')}
          alt=""
          className="w-full h-full object-contain -ml-16 -mt-16"
        />
      </div>

      {/* ─── Upper Content Grid: Text on Left, Cards on Right ─── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-14 lg:pr-0 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Headings & Copy */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-caramel">
                Nils Beauty Studio
              </span>
              <div className="w-10 h-px bg-caramel/40" />
            </div>

            <h2 className="font-serif text-[44px] sm:text-[56px] lg:text-[62px] leading-[0.94] text-brand-text mb-3">
              Hizmetlerimiz
            </h2>

            <p className="font-serif italic text-2xl sm:text-3xl text-caramel mb-5">
              Güzelliğinize profesyonel dokunuşlar
            </p>

            <p className="font-sans text-brand-text-secondary text-sm sm:text-[15px] leading-relaxed mb-8 max-w-sm">
              Cilt bakımından kalıcı makyaja, kaş ve kirpik uygulamalarından özel
              makyaj hizmetlerine kadar ihtiyaç duyduğunuz her şey, uzman ekibimizle
              Nils Beauty Studio'da.
            </p>

            <Link
              to="/hizmetler"
              className="group inline-flex items-center gap-3 bg-walnut text-ivory px-7 py-3.5 rounded-full font-sans text-sm font-medium hover:bg-walnut-dark transition-all duration-300 shadow-brand hover:shadow-brand-lg"
            >
              <span>Tüm Hizmetleri Gör</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right Column: Embla Carousel with Cards */}
          <div className="lg:col-span-8 relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-5 py-4 pr-16">
                {SITE_CONFIG.services.map((service) => {
                  const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Sparkles;
                  return (
                    <div
                      key={service.id}
                      className="flex-[0_0_270px] sm:flex-[0_0_290px] lg:flex-[0_0_300px] select-none"
                    >
                      <Link
                        to={`/hizmetler#${service.slug}`}
                        className="group block bg-[#FFFDFB] rounded-[24px] border border-beige/60 overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300"
                      >
                        {/* Portrait Image */}
                        <div className="relative h-[340px] sm:h-[370px] overflow-hidden bg-beige/30">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        {/* Card Bottom Area matching reference */}
                        <div className="relative p-5 bg-[#FFFDFB] flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Round Icon Badge */}
                            <div className="w-10 h-10 rounded-full bg-ivory-light border border-beige/80 flex items-center justify-center text-walnut group-hover:text-caramel transition-colors shrink-0">
                              <Icon size={17} strokeWidth={1.5} />
                            </div>

                            <div className="min-w-0">
                              <h3 className="font-sans font-semibold text-base text-brand-text group-hover:text-caramel transition-colors truncate">
                                {service.title}
                              </h3>
                              <p className="font-sans text-xs text-brand-text-secondary line-clamp-1 mt-0.5">
                                {service.shortDescription}
                              </p>
                            </div>
                          </div>

                          {/* Arrow Circle */}
                          <div className="w-8 h-8 rounded-full border border-beige flex items-center justify-center text-brand-text group-hover:text-caramel group-hover:border-caramel shrink-0 transition-colors">
                            <ArrowRight size={13} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Next Arrow Floating on Right Edge */}
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFDFB] border border-beige/80 shadow-brand flex items-center justify-center text-brand-text hover:text-caramel hover:scale-105 transition-all z-20"
              aria-label="Sonraki hizmetler"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Flowing Dark Chocolate Wave Transition ─── */}
      <div className="relative w-full overflow-hidden" style={{ height: 100, marginBottom: -1 }}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top light fill */}
          <path
            d="M0,0 L0,45 C280,85 520,15 760,50 C1000,85 1240,20 1440,55 L1440,0 Z"
            fill="#F8F2EC"
          />
          {/* Dark chocolate fill below */}
          <path
            d="M0,100 L0,45 C280,85 520,15 760,50 C1000,85 1240,20 1440,55 L1440,100 Z"
            fill="#2D1A11"
          />
          {/* Gold metallic wave crest */}
          <path
            d="M0,45 C280,85 520,15 760,50 C1000,85 1240,20 1440,55"
            fill="none"
            stroke="url(#serviceWaveGold)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="serviceWaveGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFBF95" />
              <stop offset="50%" stopColor="#FFF1D6" />
              <stop offset="100%" stopColor="#C69A6A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ─── Cinematic Dark Quality Strip with Studio Atmosphere ─── */}
      <div className="relative w-full py-14 text-ivory overflow-hidden bg-[#2D1A11]">
        {/* Softly glowing studio interior in background matching Screenshot 2 */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/about-studio.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24140E] via-[#382116]/95 to-[#24140E] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Pillar 1 */}
            <div className="flex items-center gap-4 md:border-r md:border-ivory/15 md:pr-8">
              <div className="w-12 h-12 rounded-full bg-champagne/15 border border-champagne/30 flex items-center justify-center text-champagne shrink-0">
                <Award size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-light text-ivory">
                  +5 Yıl Deneyim
                </h4>
                <p className="font-sans text-xs text-ivory/65 mt-1 leading-relaxed">
                  Güzellik ve bakım alanında profesyonel tecrübe.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-4 md:border-r md:border-ivory/15 md:pr-8">
              <div className="w-12 h-12 rounded-full bg-champagne/15 border border-champagne/30 flex items-center justify-center text-champagne shrink-0">
                <Users size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-light text-ivory">
                  Uzman Ekip
                </h4>
                <p className="font-sans text-xs text-ivory/65 mt-1 leading-relaxed">
                  Alanında deneyimli, sertifikalı profesyoneller.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-champagne/15 border border-champagne/30 flex items-center justify-center text-champagne shrink-0">
                <Sparkles size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-light text-ivory">
                  Kaliteli Ürünler
                </h4>
                <p className="font-sans text-xs text-ivory/65 mt-1 leading-relaxed">
                  Cilt dostu, güvenilir ve premium markalar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
