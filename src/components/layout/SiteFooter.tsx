import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { InstagramIcon } from '@/components/brand/Icons';
import { NilsWordmark } from '@/components/brand/NilsWordmark';
import { SITE_CONFIG } from '@/content/site';

const NAV_LINKS = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hizmetler', to: '/hizmetler' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'İletişim', to: '/iletisim' },
];

const FOOTER_SERVICES = [
  { label: 'Cilt Bakımı', to: '/hizmetler#cilt-bakimi' },
  { label: 'Kalıcı Makyaj', to: '/hizmetler#kalici-makyaj' },
  { label: 'Kirpik & Kaş', to: '/hizmetler#kirpik-kas' },
  { label: 'Makyaj', to: '/hizmetler#kalici-makyaj' },
  { label: 'Daha Fazlası', to: '/hizmetler' },
];

export function SiteFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative text-ivory overflow-hidden bg-[#24140E]">
      {/* ─── Signature Flowing Wave Transition from Cream to Dark Chocolate ─── */}
      <div className="relative w-full overflow-hidden" style={{ height: 110, marginTop: -1 }}>
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top cream fill */}
          <path
            d="M0,0 L0,55 C220,105 440,15 680,60 C920,105 1160,20 1440,65 L1440,0 Z"
            fill="#F8F2EC"
          />
          {/* Dark chocolate fill below */}
          <path
            d="M0,110 L0,55 C220,105 440,15 680,60 C920,105 1160,20 1440,65 L1440,110 Z"
            fill="#24140E"
          />
          {/* Champagne gold wave highlight */}
          <path
            d="M0,55 C220,105 440,15 680,60 C920,105 1160,20 1440,65"
            fill="none"
            stroke="url(#footerWaveGold)"
            strokeWidth="2.5"
          />
          <defs>
            <linearGradient id="footerWaveGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFBF95" />
              <stop offset="50%" stopColor="#FFF1D6" />
              <stop offset="100%" stopColor="#C69A6A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ─── Main 5-Column Footer Grid matching Screenshot 4 ─── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Nils Wordmark */}
          <div className="lg:col-span-1">
            <NilsWordmark variant="light" size="lg" />
          </div>

          {/* Column 2: Hızlı Linkler */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#E0CDB8] mb-5">
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm font-sans text-ivory/70 hover:text-champagne transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hizmetlerimiz */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#E0CDB8] mb-5">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm font-sans text-ivory/70 hover:text-champagne transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: İletişim Bilgileri */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#E0CDB8] mb-5">
              İletişim Bilgileri
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm font-sans text-ivory/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-champagne" strokeWidth={1.75} />
                <span>{SITE_CONFIG.business.address ?? 'Mezitli, Mersin / Türkiye'}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone ?? '+905301234567'}`}
                  className="flex items-center gap-2.5 text-sm font-sans text-ivory/70 hover:text-champagne transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-champagne" strokeWidth={1.75} />
                  <span>{SITE_CONFIG.contact.phone ?? '+90 530 123 45 67'}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email ?? 'info@nilsbeauty.com'}`}
                  className="flex items-center gap-2.5 text-sm font-sans text-ivory/70 hover:text-champagne transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-champagne" strokeWidth={1.75} />
                  <span>{SITE_CONFIG.contact.email ?? 'info@nilsbeauty.com'}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${SITE_CONFIG.contact.instagram ?? 'nilsbeautystudio'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-sans text-ivory/70 hover:text-champagne transition-colors"
                >
                  <InstagramIcon size={15} className="shrink-0 text-champagne" />
                  <span>@{SITE_CONFIG.contact.instagram ?? 'nilsbeautystudio'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Çalışma Saatleri */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#E0CDB8] mb-5 flex items-center gap-2">
              <Clock size={14} className="text-champagne" strokeWidth={1.75} />
              <span>Çalışma Saatleri</span>
            </h4>
            <div className="space-y-2 text-sm font-sans text-ivory/70">
              <div className="flex justify-between gap-4 pb-2 border-b border-ivory/10">
                <span>Pazartesi – Cumartesi</span>
                <span className="text-ivory font-medium">{SITE_CONFIG.hours.weekdays ?? '09:00 – 19:00'}</span>
              </div>
              <div className="flex justify-between gap-4 pt-1">
                <span>Pazar</span>
                <span className="text-champagne font-medium">{SITE_CONFIG.hours.sunday ?? 'Kapalı'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ─── Bottom Copyright Row matching Screenshot 4 ─── */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory/50">
          <p>© 2026 Nils Beauty Studio. Tüm hakları saklıdır.</p>

          <div className="flex items-center gap-6">
            <Link to="/gizlilik" className="hover:text-champagne transition-colors">
              Gizlilik Politikası
            </Link>
            <span className="text-ivory/20">|</span>
            <Link to="/kullanim-kosullari" className="hover:text-champagne transition-colors">
              Kullanım Koşulları
            </Link>
            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-champagne hover:border-champagne transition-all"
              aria-label="Sayfanın başına dön"
            >
              <ArrowUp size={13} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
