import { assetUrl } from '@/lib/asset';
import { Link } from 'react-router-dom';
import { CalendarDays, Play, ArrowRight, Clock, Users, ShieldCheck, Award } from 'lucide-react';

const METRICS = [
  { icon: Users, value: '5+ Yıl', label: 'Deneyim' },
  { icon: Clock, value: '2000+', label: 'Mutlu Müşteri' },
  { icon: ShieldCheck, value: '%100', label: 'Hijyen Standartları' },
  { icon: Award, value: 'Uzman', label: 'Profesyonel Ekip' },
];

export function AboutSection() {
  return (
    <section className="relative bg-[#F8F2EC] pt-24 lg:pt-32 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        {/* ─── Upper Story Row ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column: Story */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-caramel">
                Stüdyomuz Hakkında
              </span>
              <div className="w-10 h-px bg-caramel/40" />
            </div>

            <h2 className="font-serif text-[44px] sm:text-[56px] lg:text-[62px] leading-[0.94] text-brand-text mb-3">
              Nils Beauty Studio
            </h2>

            <p className="font-serif italic text-2xl sm:text-3xl text-caramel mb-5">
              Güzelliğinize Değer Katan Profesyonel Bakım
            </p>

            <p className="font-sans text-brand-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Mersin'de, modern ekipmanlar ve uzman ekibimizle cilt bakımı, kalıcı
              makyaj, kirpik & kaş ve daha birçok alanda size özel çözümler
              sunuyoruz.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 bg-walnut text-ivory px-7 py-3.5 rounded-full font-sans text-sm font-medium hover:bg-walnut-dark transition-all duration-300 shadow-brand hover:shadow-brand-lg"
              >
                <CalendarDays size={16} />
                <span>Randevu Al</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/hakkimizda"
                className="group inline-flex items-center gap-2.5 text-brand-text hover:text-caramel font-sans text-sm font-medium py-2 px-3 transition-colors"
              >
                <span className="w-9 h-9 rounded-full border border-beige bg-ivory-porcelain flex items-center justify-center text-caramel shadow-brand-sm group-hover:border-caramel transition-colors">
                  <Play size={11} fill="currentColor" className="ml-0.5" />
                </span>
                <span>Stüdyomuzu İzleyin</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Studio Interior in Organic Curved Window matching Screenshot 3 */}
          <div className="lg:col-span-7 h-[360px] sm:h-[440px] lg:h-[480px] relative">
            <svg className="absolute w-0 h-0" aria-hidden>
              <defs>
                <clipPath id="aboutStudioClip" clipPathUnits="objectBoundingBox">
                  <path d="
                    M 0.20,0.00
                    C 0.10,0.08 0.00,0.22 0.05,0.45
                    C 0.10,0.65 0.20,0.80 0.12,0.95
                    C 0.08,0.99 0.04,1.00 0.00,1.00
                    L 1.00,1.00
                    L 1.00,0.00
                    Z
                  " />
                </clipPath>
                <linearGradient id="aboutGoldGrad" x1="0%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#DFBF95" />
                  <stop offset="50%" stopColor="#FFF1D6" />
                  <stop offset="100%" stopColor="#C69A6A" />
                </linearGradient>
              </defs>
            </svg>

            <div
              className="w-full h-full relative overflow-hidden shadow-brand-xl rounded-[28px]"
              style={{
                clipPath: 'url(#aboutStudioClip)',
                WebkitClipPath: 'url(#aboutStudioClip)',
              }}
            >
              <img
                src={assetUrl('/images/about-studio.webp')}
                alt="Nils Beauty Studio İç Mekan Tasarımı"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Gold metallic curving edge line */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <path
                d="
                  M 20,0
                  C 10,8 0,22 5,45
                  C 10,65 20,80 12,95
                  C 8,99 4,100 0,100
                "
                fill="none"
                stroke="url(#aboutGoldGrad)"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>

        {/* ─── Credibility Strip Matching Screenshot 3 ─── */}
        <div className="w-full py-7 px-8 lg:px-12 rounded-[22px] bg-ivory-porcelain border border-beige/70 shadow-brand-sm mb-16 lg:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {METRICS.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className={`flex items-center gap-4 ${
                    index !== METRICS.length - 1
                      ? 'md:border-r md:border-beige/70 md:pr-6'
                      : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-beige/40 flex items-center justify-center text-caramel shrink-0">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-medium text-brand-text block leading-none">
                      {metric.value}
                    </span>
                    <span className="font-sans text-xs text-brand-text-secondary mt-1 block">
                      {metric.label}
                    </span>
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
