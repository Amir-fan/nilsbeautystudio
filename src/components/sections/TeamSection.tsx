import { assetUrl } from '@/lib/asset';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Gem, Heart } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Leaf,
    title: 'Kişiye Özel Bakım',
    description: 'Cilt tipinize ve ihtiyaçlarınıza uygun çözümler.',
  },
  {
    icon: Gem,
    title: 'Kaliteli Ürünler',
    description: 'Güvenilir ve dermatolojik olarak onaylı markalar.',
  },
  {
    icon: Heart,
    title: 'Memnuniyet Odaklı',
    description: 'Sizin mutluluğunuz, bizim en büyük motivasyonumuz.',
  },
];

export function TeamSection() {
  return (
    <section className="relative bg-[#F8F2EC] pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Treatment Photo */}
          <div className="lg:col-span-5 h-[380px] sm:h-[460px] rounded-[26px] overflow-hidden shadow-brand-lg border border-beige/60 relative group">
            <img
              src={assetUrl('/images/about-treatment.webp')}
              alt="Nils Beauty Studio Uzman Uygulama"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Center Column: Text & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start lg:px-2">
            <span className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-caramel mb-3">
              Ekibimiz
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-brand-text mb-4">
              Uzman ve Tutkulu Ekibimiz
            </h3>

            <p className="font-sans text-brand-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              Güzellik ve bakım alanındaki deneyimimizle, her müşterimize özel,
              güvenli ve etkili uygulamalar sunuyoruz.
            </p>

            <Link
              to="/hakkimizda"
              className="group inline-flex items-center gap-3 bg-walnut text-ivory px-7 py-3.5 rounded-full font-sans text-sm font-medium hover:bg-walnut-dark transition-all duration-300 shadow-brand hover:shadow-brand-lg"
            >
              <span>Ekibimizi Tanıyın</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right Column: 3 Principle Cards */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {PRINCIPLES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-[20px] bg-ivory-porcelain border border-beige/70 shadow-brand-sm hover:border-caramel/40 hover:shadow-brand transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-beige/40 flex items-center justify-center text-caramel mb-3">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-sans text-sm sm:text-base font-semibold text-brand-text">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-text-secondary mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
