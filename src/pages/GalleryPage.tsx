import { assetUrl } from '@/lib/asset';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  aspect: 'tall' | 'wide' | 'square';
  span: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    image: assetUrl('/images/service-facial.webp'),
    title: 'Medikal Nemlendirici Cilt Bakımı',
    category: 'Cilt Bakımı',
    aspect: 'tall',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'g2',
    image: assetUrl('/images/service-lashes.webp'),
    title: 'Altın Oran Kaş & Doğal Kirpik Lifting',
    category: 'Kirpik & Kaş',
    aspect: 'square',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g3',
    image: assetUrl('/images/about-treatment.webp'),
    title: 'Profesyonel Dermokozmetik Enstrümanlar',
    category: 'Stüdyo',
    aspect: 'wide',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'g4',
    image: assetUrl('/images/contact-beauty.webp'),
    title: 'Dermatolojik Serum & Bitkisel Özler',
    category: 'Ürünler',
    aspect: 'tall',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'g5',
    image: assetUrl('/images/about-studio.webp'),
    title: 'Dingin & Sıcak Stüdyo Atmosferi',
    category: 'Stüdyo',
    aspect: 'tall',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'g6',
    image: assetUrl('/images/service-makeup.webp'),
    title: 'Zarif Akşam Makyajı & Gölgelendirme',
    category: 'Makyaj',
    aspect: 'square',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g7',
    image: assetUrl('/images/contact-beauty.webp'),
    title: 'Özel Maske & Masaj Seansı',
    category: 'Cilt Bakımı',
    aspect: 'square',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g8',
    image: assetUrl('/images/hero-beauty.webp'),
    title: 'Ceviz ve Fildişi Karşılama Alanı',
    category: 'Stüdyo',
    aspect: 'wide',
    span: 'md:col-span-2 md:row-span-1',
  },
];

const FILTER_TAGS = ['Tümü', 'Cilt Bakımı', 'Kirpik & Kaş', 'Makyaj', 'Stüdyo', 'Ürünler'];

export default function GalleryPage() {
  const [selectedTag, setSelectedTag] = useState('Tümü');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedTag === 'Tümü'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedTag);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  }, [lightboxIndex, filteredItems.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-porcelain">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 text-caramel text-xs font-sans uppercase tracking-[0.2em] mb-4">
            <Sparkles size={13} />
            <span>Görsel Portfolyo</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.96] text-brand-text mb-4">
            Güzelliğin Her Detayı
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-caramel mb-6">
            Özenle tasarlanan uygulamalar ve stüdyomuzdan anlar
          </p>

          <p className="font-sans text-brand-text-secondary text-base leading-relaxed">
            Stüdyomuzdaki her an, estetik ve dinginliğin bir araya geldiği bir deneyimdir.
            Fotoğraf galerimizde sunduğumuz atmosferi ve bakım ritüellerimizi keşfedin.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mt-8 pb-4 border-b border-beige/60">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-all ${
                selectedTag === tag
                  ? 'bg-walnut text-ivory shadow-brand-sm'
                  : 'bg-ivory-light border border-beige/80 text-brand-text hover:border-caramel/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Gallery Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[260px]">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-[24px] overflow-hidden bg-beige/30 border border-beige/60 shadow-brand hover:shadow-brand-xl transition-all duration-300 cursor-pointer ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-deep/80 via-chocolate-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-champagne font-sans font-medium mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl text-ivory leading-tight">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-sans text-ivory/80">
                  <ZoomIn size={13} />
                  <span>Büyütmek için tıklayın</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-chocolate-deep/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory flex items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory flex items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Önceki görsel"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory flex items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Sonraki görsel"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl border border-ivory/10"
            />
            <div className="mt-4 text-center">
              <span className="text-[11px] uppercase tracking-[0.2em] text-champagne block">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-2xl text-ivory mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs font-sans text-ivory/40 mt-1">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
