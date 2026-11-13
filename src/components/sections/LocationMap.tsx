import { useState } from 'react';
import { MapPin, ExternalLink, Maximize2, Plus, Minus } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';

export function LocationMap() {
  const [zoom, setZoom] = useState(14);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE_CONFIG.business.mapsSearchQuery
  )}`;

  return (
    <div className="h-full rounded-[24px] bg-[#FFFDFB] border border-beige/70 shadow-brand-lg overflow-hidden flex flex-col justify-between">
      {/* Map Display Container */}
      <div className="relative w-full h-[320px] sm:h-[360px] bg-[#E8EFEA] overflow-hidden">
        {/* Real Embedded Interactive Map */}
        <iframe
          title="Nils Beauty Studio Konum Haritası"
          src={`https://maps.google.com/maps?q=Mezitli+Mersin+T%C3%BCrkiye&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full border-0 filter contrast-[0.98] saturate-[0.8]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Custom Stylized Nils Pin Overlay matching Screenshot 4 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center z-10">
          <div className="w-16 h-16 rounded-full bg-[#52331E] border-2 border-champagne/70 text-ivory shadow-brand-xl flex flex-col items-center justify-center p-1 text-center">
            <span className="font-serif text-sm font-normal leading-none text-[#FFF5EB]">Nils</span>
            <span className="text-[6.5px] uppercase tracking-[0.2em] text-champagne-light mt-0.5">
              BEAUTY STUDIO
            </span>
          </div>
          <div className="w-3 h-3 bg-[#52331E] rotate-45 -mt-1.5 shadow-sm border-r border-b border-champagne/50" />
        </div>

        {/* Map UI Controls matching Screenshot 4 */}
        <div className="absolute top-4 right-4 z-10">
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm border border-black/10 shadow-sm flex items-center justify-center text-brand-text hover:text-caramel transition-colors"
            title="Haritayı Büyüt"
          >
            <Maximize2 size={14} />
          </a>
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1">
          <button
            onClick={() => setZoom((z) => Math.min(z + 1, 18))}
            className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm border border-black/10 shadow-sm flex items-center justify-center text-brand-text hover:text-caramel transition-colors font-bold"
            aria-label="Yakınlaştır"
          >
            <Plus size={14} />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 1, 10))}
            className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm border border-black/10 shadow-sm flex items-center justify-center text-brand-text hover:text-caramel transition-colors font-bold"
            aria-label="Uzaklaştır"
          >
            <Minus size={14} />
          </button>
        </div>
      </div>

      {/* Bottom Bar Info matching Screenshot 4 */}
      <div className="p-5 bg-[#FFFDFB] border-t border-beige/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-beige/40 flex items-center justify-center text-caramel shrink-0">
            <MapPin size={18} strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <h4 className="font-sans text-sm font-semibold text-brand-text truncate">
              {SITE_CONFIG.business.name}
            </h4>
            <p className="font-sans text-xs text-brand-text-secondary mt-0.5 truncate">
              {SITE_CONFIG.business.address ?? 'Mezitli, Mersin / Türkiye'}
            </p>
          </div>
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-ivory-light border border-beige/80 hover:border-caramel hover:text-caramel font-sans text-xs text-brand-text font-medium transition-all shadow-sm shrink-0"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-red-500 text-white flex items-center justify-center text-[9px] font-bold">
            G
          </span>
          <span>Google Haritalar'da Aç</span>
          <ExternalLink size={11} className="ml-0.5 opacity-70" />
        </a>
      </div>
    </div>
  );
}
