import { assetUrl } from '@/lib/asset';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '@/components/brand/Icons';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { LocationMap } from '@/components/sections/LocationMap';
import { SITE_CONFIG } from '@/content/site';

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp ?? '905301234567'}?text=${encodeURIComponent(
    'Merhaba Nils Beauty Studio, randevu ve hizmetleriniz hakkında bilgi almak istiyorum.'
  )}`;

  return (
    <section className="relative bg-[#F8F2EC] pt-24 lg:pt-28 pb-16 overflow-hidden">
      {/* Decorative leaf shadow — top left */}
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none opacity-20 select-none z-0">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-20,0 C60,60 120,120 160,200 C200,280 230,340 270,400" stroke="#7A5A43" strokeWidth="2" fill="none"/>
          <path d="M100,90 C130,50 160,30 200,20" stroke="#7A5A43" strokeWidth="1.5" fill="none"/>
          <path d="M140,150 C180,120 210,100 250,90" stroke="#7A5A43" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">

          {/* Left Column: Heading, Contact Links & Arched Decorative Mirror */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-caramel">
                  İletişim
                </span>
                <div className="w-10 h-px bg-caramel/40" />
              </div>

              <h2 className="font-serif text-[42px] sm:text-[52px] lg:text-[58px] leading-[0.92] text-brand-text mb-2">
                Bizimle İletişime
              </h2>

              <p className="font-serif italic text-3xl sm:text-4xl text-caramel mb-5">
                Geçin
              </p>

              <p className="font-sans text-brand-text-secondary text-sm sm:text-[15px] leading-relaxed mb-7 max-w-sm">
                Randevu almak, hizmetlerimiz hakkında bilgi edinmek veya sorularınız
                için bize kolayca ulaşabilirsiniz.
              </p>

              {/* 3 Contact Rows matching Screenshot 4 */}
              <div className="space-y-3.5 mb-8">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-[18px] bg-[#FFFDFB] border border-beige/80 hover:border-caramel/60 hover:shadow-brand transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-beige/40 flex items-center justify-center text-caramel group-hover:scale-105 transition-transform shrink-0">
                      <MessageCircle size={18} strokeWidth={1.75} />
                    </div>
                    <span className="font-sans text-sm font-medium text-brand-text group-hover:text-caramel transition-colors">
                      WhatsApp ile Hızlı İletişim
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-brand-text-secondary group-hover:text-caramel group-hover:translate-x-1 transition-all mr-2"
                  />
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${SITE_CONFIG.contact.phone ?? '+905301234567'}`}
                  className="group flex items-center p-3.5 rounded-[18px] bg-[#FFFDFB] border border-beige/80 hover:border-caramel/60 hover:shadow-brand transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-beige/40 flex items-center justify-center text-caramel group-hover:scale-105 transition-transform shrink-0">
                      <Phone size={18} strokeWidth={1.75} />
                    </div>
                    <span className="font-sans text-sm font-medium text-brand-text group-hover:text-caramel transition-colors">
                      {SITE_CONFIG.contact.phone ?? '+90 530 123 45 67'}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${SITE_CONFIG.contact.instagram ?? 'nilsbeautystudio'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-3.5 rounded-[18px] bg-[#FFFDFB] border border-beige/80 hover:border-caramel/60 hover:shadow-brand transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-beige/40 flex items-center justify-center text-caramel group-hover:scale-105 transition-transform shrink-0">
                      <InstagramIcon size={18} />
                    </div>
                    <span className="font-sans text-sm font-medium text-brand-text group-hover:text-caramel transition-colors">
                      @{SITE_CONFIG.contact.instagram ?? 'nilsbeautystudio'}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Decorative Arched Vanity Mirror matching Screenshot 4 */}
            <div className="rounded-[22px] overflow-hidden shadow-brand-md border border-beige/70 h-48 relative hidden sm:block">
              <img
                src={assetUrl('/images/contact-beauty.webp')}
                alt="Nils Beauty Studio Lüks Cilt Bakım Detayı"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-sans text-ivory/95 font-medium">
                  Her detayda lüks ve huzur
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Appointment Form */}
          <div className="lg:col-span-4">
            <AppointmentForm />
          </div>

          {/* Right Column: Stylized Coastal Map */}
          <div className="lg:col-span-4 h-full">
            <LocationMap />
          </div>

        </div>
      </div>
    </section>
  );
}
