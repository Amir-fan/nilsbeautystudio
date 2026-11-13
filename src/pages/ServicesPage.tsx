import { assetUrl } from '@/lib/asset';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CalendarDays, ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Tüm Hizmetler' },
  { id: 'cilt-bakimi', label: 'Cilt Bakımı' },
  { id: 'kirpik-kas', label: 'Kirpik & Kaş' },
  { id: 'kalici-makyaj', label: 'Kalıcı Makyaj' },
  { id: 'guzellik-ritueli', label: 'Güzellik Ritüeli' },
];

const DETAILED_SERVICES = [
  {
    id: 'cilt-bakimi',
    title: 'Medikal & Klasik Cilt Bakımı',
    subtitle: 'Derinlemesine temizlik, nemlendirme ve hücresel yenilenme',
    description:
      'Cilt tipinize özel analiz yapılarak belirlenen profesyonel dermokozmetik ürünlerle gerçekleştirilen bakım protokolü. Gözenek temizliği, peeling, serum uygulamaları, maske ve lenfatik yüz masajı ile cildiniz doğal ışıltısını geri kazanır.',
    duration: '60 – 90 dk',
    image: assetUrl('/images/service-facial.webp'),
    highlights: [
      'Kişiye özel cilt analizi',
      'Derin gözenek ve siyah nokta temizliği',
      'Dermatolojik serum ve vitamin infüzyonu',
      'Rahatlatıcı yüz ve dekolte masajı',
    ],
  },
  {
    id: 'kirpik-kas',
    title: 'Kirpik Lifting & Kaş Laminasyonu',
    subtitle: 'Bakışlarınıza doğal derinlik ve hacim katan tasarım',
    description:
      'Kendi doğal kirpik ve kaşlarınızı besleyen keratin ve vitamin bakımları ile daha kalkık, kıvrık ve dolgun bir görünüm. Yüz hatlarınıza uygun altın oran kaş tasarımı ile uyumlu ve kusursuz sonuçlar.',
    duration: '45 – 75 dk',
    image: assetUrl('/images/service-lashes.webp'),
    highlights: [
      'Altın oran yüz analizi ve kaş haritalama',
      'Keratin ve botoks besleyici kirpik bakımı',
      '6–8 haftaya kadar kalıcı doğal kıvrım',
      'Alerji testli hipoalerjenik ürünler',
    ],
  },
  {
    id: 'kalici-makyaj',
    title: 'Kalıcı Makyaj (Microblading & Dudak)',
    subtitle: 'Her an bakımlı, taze ve doğal bir güzellik',
    description:
      'Doğal pigmentlerle microblading kıl tekniği, pudralama kaş, kalıcı dipliner ve dudak renklendirme uygulamaları. Tek kullanımlık steril iğneler ve Avrupa standartlarında organik pigmentlerle güvenli işlem.',
    duration: '90 – 120 dk',
    image: assetUrl('/images/service-makeup.webp'),
    highlights: [
      'Organik ve biyolojik uyumlu pigmentler',
      'Tek kullanımlık steril başlıklar',
      'Yüz simetrisine özel ön çizim ve onay süreci',
      'Ağrısız konforlu lokal anestezi desteği',
    ],
  },
  {
    id: 'guzellik-ritueli',
    title: 'İmza Güzellik Ritüeli',
    subtitle: 'Bütünsel yenilenme ve dinginlik deneyimi',
    description:
      'Nils Beauty Studio\'nun özel olarak harmanladığı bu kapsamlı ritüel; aromaterapik yüz bakımı, kolajen maskesi, baş masajı ve el bakımını bir arada sunar. Kendinizi şımartmanız için tasarlandı.',
    duration: '100 – 120 dk',
    image: assetUrl('/images/service-ritual.webp'),
    highlights: [
      'Özel aromaterapi yağları ve sakinleştirici ambiyans',
      'Yoğun kolajen ve hyaluronik asit nem terapisi',
      'Akupresür baş ve boyun rahatlatma seansı',
      'Özel bitki çayı ikramı eşliğinde dinlenme',
    ],
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? DETAILED_SERVICES
      : DETAILED_SERVICES.filter((s) => s.id === activeCategory);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-porcelain">
      {/* Page Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 text-caramel text-xs font-sans uppercase tracking-[0.2em] mb-4">
            <Sparkles size={13} />
            <span>Küratörlü Bakım Protokolleri</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.96] text-brand-text mb-4">
            Hizmetlerimiz
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-caramel mb-6">
            Güzelliğinize profesyonel ve özenli dokunuşlar
          </p>

          <p className="font-sans text-brand-text-secondary text-base leading-relaxed">
            Nils Beauty Studio'da her uygulama, cilt yapınız ve kişisel
            tercihleriniz dikkate alınarak titizlikle planlanır. En yüksek hijyen
            standartları ve premium ürünlerle cildinize hak ettiği değeri verin.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mt-10 pb-4 border-b border-beige/60">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-medium tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-walnut text-ivory shadow-brand-sm'
                  : 'bg-ivory-light border border-beige/80 text-brand-text hover:border-caramel/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {filteredServices.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-[32px] bg-ivory-light border border-beige/70 shadow-brand transition-all hover:shadow-brand-xl ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-5 h-[340px] sm:h-[400px] rounded-[24px] overflow-hidden relative shadow-md group ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ivory-porcelain/90 backdrop-blur-md text-xs font-sans text-brand-text font-medium shadow-sm">
                  <Clock size={12} className="text-caramel" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-7 flex flex-col items-start ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-caramel font-semibold mb-2">
                  Özel Protokol
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl text-brand-text mb-2">
                  {service.title}
                </h3>

                <p className="font-serif italic text-lg sm:text-xl text-caramel mb-4">
                  {service.subtitle}
                </p>

                <p className="font-sans text-brand-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-brand-text">
                      <CheckCircle2 size={14} className="text-caramel shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/iletisim"
                    className="inline-flex items-center gap-3 bg-walnut text-ivory px-7 py-3.5 rounded-full font-sans text-sm font-medium hover:bg-walnut-dark shadow-brand transition-all"
                  >
                    <CalendarDays size={15} />
                    <span>Bu Hizmet İçin Randevu Al</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Assurance Strip */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="p-8 sm:p-10 rounded-[28px] bg-ivory-porcelain border border-champagne/40 shadow-brand-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center text-caramel shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-serif text-2xl text-brand-text">
                Kişisel Cilt Danışmanlığı
              </h4>
              <p className="font-sans text-xs sm:text-sm text-brand-text-secondary mt-0.5">
                Hangi bakımın cildinize uygun olduğundan emin değil misiniz? Uzmanlarımızla ücretsiz ön görüşme yapın.
              </p>
            </div>
          </div>

          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 bg-champagne text-chocolate px-6 py-3 rounded-full font-sans text-xs uppercase tracking-wider font-semibold hover:bg-champagne-light transition-all shadow-sm shrink-0"
          >
            <span>Danışmanlık Al</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
