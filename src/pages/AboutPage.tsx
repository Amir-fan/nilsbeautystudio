import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight, ShieldCheck, Heart, Sparkles, Gem, Clock } from 'lucide-react';
import { AboutSection } from '@/components/sections/AboutSection';
import { TeamSection } from '@/components/sections/TeamSection';

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-porcelain">
      {/* Page Hero */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 text-caramel text-xs font-sans uppercase tracking-[0.2em] mb-4">
            <Sparkles size={13} />
            <span>Hikayemiz ve Felsefemiz</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.96] text-brand-text mb-4">
            Hakkımızda
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-caramel mb-6">
            Güzelliğinize değer katan, dingin ve rafine bir sığınak
          </p>

          <p className="font-sans text-brand-text-secondary text-base sm:text-lg leading-relaxed">
            Nils Beauty Studio, Mersin'de kadınların kendilerine ayırdıkları özel
            zamanı en konforlu ve kaliteli deneyime dönüştürmek amacıyla kuruldu.
            Ceviz ağacının sıcaklığı, fildişinin zarafeti ve organik formların
            akıcılığında şekillenen stüdyomuzda, her detayı misafirlerimizin huzuru
            için tasarladık.
          </p>
        </div>
      </div>

      {/* Embedded Studio & Concept Section */}
      <AboutSection />

      {/* Deep Studio Story & Values */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-caramel font-semibold mb-2 block">
              Yaklaşımımız
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-text mb-6">
              Doğallığı Ön Plana Çıkaran Bakım Anlayışı
            </h3>
            <div className="space-y-4 font-sans text-brand-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                Güzelliğin kalıplara sığdırılamayacağına, her kadının kendine has
                bir ışıltısı olduğuna inanıyoruz. Bu nedenle standart paketler
                yerine, yüz hatlarınızı, cilt yapınızı ve günlük yaşam ritminizi
                dinleyerek kişiselleştirilmiş protokoller sunuyoruz.
              </p>
              <p>
                Kullandığımız her serum, maske ve pigment, dermatolojik olarak
                test edilmiş, uluslararası güvenlik standartlarına sahip seçkin
                markalardan oluşmaktadır. Cildinize temas eden hiçbir bileşenden ödün
                vermiyoruz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-ivory-light border border-beige/60 shadow-brand-sm">
              <ShieldCheck className="text-caramel mb-3" size={24} />
              <h4 className="font-sans text-base font-semibold text-brand-text mb-1">
                Kusursuz Hijyen
              </h4>
              <p className="font-sans text-xs text-brand-text-secondary leading-relaxed">
                Tüm aletlerimiz hastane tipi otoklav sterilizasyonundan geçer, tek
                kullanımlık materyaller tercih edilir.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-light border border-beige/60 shadow-brand-sm">
              <Gem className="text-caramel mb-3" size={24} />
              <h4 className="font-sans text-base font-semibold text-brand-text mb-1">
                Premium Ürünler
              </h4>
              <p className="font-sans text-xs text-brand-text-secondary leading-relaxed">
                Avrupa ve Amerika menşeili, klinik etkinliği kanıtlanmış
                dermokozmetik seriler.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-light border border-beige/60 shadow-brand-sm">
              <Clock className="text-caramel mb-3" size={24} />
              <h4 className="font-sans text-base font-semibold text-brand-text mb-1">
                Zamanınıza Saygı
              </h4>
              <p className="font-sans text-xs text-brand-text-secondary leading-relaxed">
                Randevu saatlerinizde gecikme yaşamadan, yalnızca size ayrılmış özel
                odada sakin bir seans.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-light border border-beige/60 shadow-brand-sm">
              <Heart className="text-caramel mb-3" size={24} />
              <h4 className="font-sans text-base font-semibold text-brand-text mb-1">
                Samimi İletişim
              </h4>
              <p className="font-sans text-xs text-brand-text-secondary leading-relaxed">
                İşlem öncesi ve sonrasında sürekli bilgilendirme ve ev devam
                bakımı danışmanlığı.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team & Philosophy Section */}
      <TeamSection />

      {/* CTA Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12">
        <div className="p-10 sm:p-14 rounded-[32px] bg-gradient-to-r from-chocolate to-walnut-dark text-ivory text-center flex flex-col items-center justify-center relative overflow-hidden shadow-brand-xl">
          <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne mb-3">
            Nils Deneyimi
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-xl leading-tight mb-4 text-ivory">
            Kendinize Ayırdığınız Zamanı Güzelleştirin
          </h3>
          <p className="font-sans text-sm sm:text-base text-ivory/70 max-w-md mb-8">
            Mersin'deki stüdyomuzda size özel hazırlanan bakım ritüelini deneyimlemek
            için hemen randevunuzu oluşturun.
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-3 bg-champagne text-chocolate px-8 py-4 rounded-full font-sans text-sm font-semibold hover:bg-champagne-light shadow-brand transition-all"
          >
            <CalendarDays size={16} />
            <span>Randevu Talebi Oluştur</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

