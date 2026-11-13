import { MessageCircle, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/brand/Icons';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { LocationMap } from '@/components/sections/LocationMap';
import { SITE_CONFIG } from '@/content/site';

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp ?? '905301234567'}?text=${encodeURIComponent(
    'Merhaba Nils Beauty Studio, randevu oluşturmak ve hizmetleriniz hakkında detaylı bilgi almak istiyorum.'
  )}`;

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-porcelain">
      {/* Page Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-14">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 text-caramel text-xs font-sans uppercase tracking-[0.2em] mb-4">
            <Sparkles size={13} />
            <span>İletişim & Randevu</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.96] text-brand-text mb-4">
            Bize Ulaşın
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-caramel mb-6">
            Sorularınız ve randevu talepleriniz için buradayız
          </p>

          <p className="font-sans text-brand-text-secondary text-base leading-relaxed">
            Hizmetlerimiz hakkında merak ettikleriniz, kişiselleştirilmiş bakım
            danışmanlığı veya randevu oluşturmak için aşağıdaki formu doldurabilir
            ya da doğrudan WhatsApp üzerinden iletişime geçebilirsiniz.
          </p>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Column 1: Contact Details & Hours */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Channels Card */}
            <div className="p-7 rounded-[26px] bg-ivory-light border border-beige/70 shadow-brand">
              <h3 className="font-serif text-2xl text-brand-text mb-5">
                İletişim Kanalları
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-ivory-porcelain border border-beige hover:border-caramel/50 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-brand-text-secondary block">
                      En Hızlı İletişim
                    </span>
                    <span className="font-sans text-sm font-medium text-brand-text">
                      WhatsApp Hattı
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.contact.phone ?? '+905301234567'}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-ivory-porcelain border border-beige hover:border-caramel/50 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-beige/40 text-walnut flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-brand-text-secondary block">
                      Telefon
                    </span>
                    <span className="font-sans text-sm font-medium text-brand-text">
                      {SITE_CONFIG.contact.phone ?? '+90 530 123 45 67'}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email ?? 'info@nilsbeauty.com'}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-ivory-porcelain border border-beige hover:border-caramel/50 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-beige/40 text-walnut flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-brand-text-secondary block">
                      E-Posta
                    </span>
                    <span className="font-sans text-sm font-medium text-brand-text">
                      {SITE_CONFIG.contact.email ?? 'info@nilsbeauty.com'}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${SITE_CONFIG.contact.instagram ?? 'nilsbeautystudio'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-ivory-porcelain border border-beige hover:border-caramel/50 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-700 flex items-center justify-center shrink-0">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-brand-text-secondary block">
                      Instagram
                    </span>
                    <span className="font-sans text-sm font-medium text-brand-text">
                      @{SITE_CONFIG.contact.instagram ?? 'nilsbeautystudio'}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-7 rounded-[26px] bg-ivory-light border border-beige/70 shadow-brand">
              <h3 className="font-serif text-2xl text-brand-text mb-4 flex items-center gap-2">
                <Clock size={18} className="text-caramel" />
                <span>Çalışma Saatleri</span>
              </h3>
              <div className="space-y-3 font-sans text-sm text-brand-text">
                <div className="flex justify-between pb-2 border-b border-beige/60">
                  <span className="text-brand-text-secondary">Pazartesi – Cumartesi</span>
                  <span className="font-medium">{SITE_CONFIG.hours.weekdays ?? '09:00 – 19:00'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">Pazar</span>
                  <span className="text-caramel font-medium">{SITE_CONFIG.hours.sunday ?? 'Kapalı'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Appointment Form */}
          <div className="lg:col-span-4">
            <AppointmentForm />
          </div>

          {/* Column 3: Interactive Location Map */}
          <div className="lg:col-span-4 h-full min-h-[460px]">
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  );
}
