import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, CalendarDays, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NilsWordmark } from '@/components/brand/NilsWordmark';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hizmetler', to: '/hizmetler' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'İletişim', to: '/iletisim' },
];

interface SiteHeaderProps {
  transparent?: boolean;
}

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isScrolled = scrolled || !transparent;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[#FAF5F0]/95 backdrop-blur-md shadow-brand-sm'
            : 'bg-transparent'
        )}
      >
        <div className="w-full px-[7vw] h-20 sm:h-24 flex items-center justify-between">
          {/* Logo with 7% left alignment */}
          <Link to="/" className="shrink-0 hover:opacity-90 transition-opacity">
            <NilsWordmark size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ label, to }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    'relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-1.5',
                    active
                      ? 'text-[#24140E] font-semibold'
                      : 'text-[#6F6056] hover:text-[#92552F]'
                  )}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#92552F] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Sits in dark photo canopy matching reference */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={cn(
              'flex items-center gap-2 text-xs font-sans font-medium transition-colors',
              isScrolled ? 'text-[#6F6056]' : 'text-[#FAF5F0]'
            )}>
              <MapPin size={14} className="text-[#C69A6A]" strokeWidth={2} />
              <span>Mersin</span>
            </div>
            <div className={cn('w-px h-4', isScrolled ? 'bg-[#E0CDB8]' : 'bg-[#FAF5F0]/30')} />
            <Link
              to="/iletisim"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-xs font-medium transition-all duration-300 shadow-brand-sm hover:shadow-brand',
                isScrolled
                  ? 'bg-[#59341C] text-[#FAF5F0] hover:bg-[#3D2418]'
                  : 'bg-[#2D1A11]/90 text-[#FAF5F0] border border-[#C69A6A]/60 hover:bg-[#3D2418] hover:border-[#C69A6A]'
              )}
            >
              <CalendarDays size={14} strokeWidth={1.75} className="text-[#C69A6A]" />
              <span>Randevu Al</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#24140E] hover:text-[#92552F] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FAF5F0] pt-24 px-8 pb-10 flex flex-col justify-between lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={to}
                    className={cn(
                      'font-serif text-3xl transition-colors',
                      location.pathname === to ? 'text-[#92552F] italic' : 'text-[#24140E] hover:text-[#92552F]'
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#E0CDB8]/60 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#6F6056] text-sm">
                <MapPin size={16} className="text-[#92552F]" />
                <span>Mezitli, Mersin / Türkiye</span>
              </div>
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center gap-2 bg-[#59341C] text-[#FAF5F0] py-3.5 rounded-full font-sans text-sm font-medium shadow-brand"
              >
                <CalendarDays size={16} />
                <span>Randevu Al</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
