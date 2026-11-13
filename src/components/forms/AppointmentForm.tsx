import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, User, Phone, Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';

const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Lütfen adınızı ve soyadınızı giriniz.' })
    .max(60, { message: 'Adınız en fazla 60 karakter olabilir.' }),
  phone: z
    .string()
    .min(10, { message: 'Geçerli bir telefon numarası giriniz (örn: 0530 123 45 67).' }),
  serviceId: z
    .string()
    .min(1, { message: 'Lütfen almak istediğiniz hizmeti seçiniz.' }),
  date: z
    .string()
    .min(1, { message: 'Lütfen tercih ettiğiniz bir tarih seçiniz.' }),
  note: z.string().max(300, { message: 'Notunuz en fazla 300 karakter olabilir.' }).optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      serviceId: '',
      date: '',
      note: '',
    },
  });

  const onSubmit = (data: AppointmentFormData) => {
    const selectedService = SITE_CONFIG.services.find((s) => s.id === data.serviceId);
    const serviceName = selectedService ? selectedService.title : data.serviceId;

    const message = encodeURIComponent(
      `Merhaba Nils Beauty Studio,\n\nWeb siteniz üzerinden randevu talebinde bulunmak istiyorum:\n\n• İsim: ${data.fullName}\n• Telefon: ${data.phone}\n• Hizmet: ${serviceName}\n• Tercih Edilen Tarih: ${data.date}${data.note ? `\n• Not: ${data.note}` : ''}\n\nUygunluk durumunu teyit edebilir misiniz? Teşekkürler.`
    );

    const waNumber = SITE_CONFIG.contact.whatsapp ?? '905301234567';
    const link = `https://wa.me/${waNumber}?text=${message}`;

    setWhatsappUrl(link);
    setSubmitted(true);
    reset();

    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-[24px] bg-[#FFFDFB] border border-champagne/40 shadow-brand-lg text-center flex flex-col items-center justify-center min-h-[460px]">
        <div className="w-14 h-14 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center text-caramel mb-4">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="font-serif text-3xl text-brand-text mb-2">
          Randevu Talebiniz Alındı
        </h3>
        <p className="font-sans text-sm text-brand-text-secondary leading-relaxed max-w-sm mb-6">
          Talebiniz hazırlanmıştır. WhatsApp üzerinden uzman ekibimiz en kısa sürede
          sizinle iletişime geçerek randevunuzu kesinleştirecektir.
        </p>

        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-walnut text-ivory px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-walnut-dark transition-all shadow-brand"
          >
            <span>WhatsApp ile Mesajı Gönder</span>
            <ArrowRight size={14} />
          </a>
        )}

        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs font-sans text-brand-text-secondary hover:text-caramel underline underline-offset-4"
        >
          Yeni bir randevu talebi oluştur
        </button>
      </div>
    );
  }

  return (
    <div className="p-7 sm:p-8 rounded-[24px] bg-[#FFFDFB] border border-beige/70 shadow-brand-lg relative overflow-hidden">
      {/* Form Header matching Screenshot 4 */}
      <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-beige/50">
        <div className="w-11 h-11 rounded-xl bg-ivory-light border border-beige/80 flex items-center justify-center text-caramel shadow-brand-sm shrink-0">
          <Calendar size={18} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-brand-text leading-tight">
            Randevu Talebi
          </h3>
          <p className="font-sans text-xs text-brand-text-secondary mt-0.5">
            Size en uygun zaman için randevu oluşturun.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        {/* Full Name */}
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-text-secondary/60">
              <User size={15} />
            </span>
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              {...register('fullName')}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-light/40 border font-sans text-sm text-brand-text placeholder:text-brand-text-secondary/60 focus:outline-none focus:ring-1 focus:ring-caramel focus:border-caramel transition-all ${
                errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-beige/80'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-[11px] font-sans mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Phone & Service (2-column row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Phone */}
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-text-secondary/60">
                <Phone size={15} />
              </span>
              <input
                type="tel"
                placeholder="Telefon Numaranız"
                {...register('phone')}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-light/40 border font-sans text-sm text-brand-text placeholder:text-brand-text-secondary/60 focus:outline-none focus:ring-1 focus:ring-caramel focus:border-caramel transition-all ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-beige/80'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-[11px] font-sans mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Service Selector */}
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-text-secondary/60">
                <Sparkles size={15} />
              </span>
              <select
                {...register('serviceId')}
                className={`w-full pl-10 pr-8 py-3 rounded-xl bg-ivory-light/40 border font-sans text-sm text-brand-text focus:outline-none focus:ring-1 focus:ring-caramel focus:border-caramel transition-all appearance-none cursor-pointer ${
                  errors.serviceId ? 'border-red-400 bg-red-50/20' : 'border-beige/80'
                }`}
              >
                <option value="">Hizmet Seçin</option>
                {SITE_CONFIG.services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            {errors.serviceId && (
              <p className="text-red-500 text-[11px] font-sans mt-1">
                {errors.serviceId.message}
              </p>
            )}
          </div>
        </div>

        {/* Date Picker */}
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-text-secondary/60">
              <Calendar size={15} />
            </span>
            <input
              type="date"
              {...register('date')}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-light/40 border font-sans text-sm text-brand-text focus:outline-none focus:ring-1 focus:ring-caramel focus:border-caramel transition-all cursor-pointer ${
                errors.date ? 'border-red-400 bg-red-50/20' : 'border-beige/80'
              }`}
            />
          </div>
          {errors.date && (
            <p className="text-red-500 text-[11px] font-sans mt-1">
              {errors.date.message}
            </p>
          )}
        </div>

        {/* Optional Note */}
        <div>
          <div className="relative">
            <span className="absolute top-3.5 left-3.5 pointer-events-none text-brand-text-secondary/60">
              <MessageSquare size={15} />
            </span>
            <textarea
              rows={2}
              placeholder="Not (Opsiyonel)"
              {...register('note')}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-light/40 border border-beige/80 font-sans text-sm text-brand-text placeholder:text-brand-text-secondary/60 focus:outline-none focus:ring-1 focus:ring-caramel focus:border-caramel transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button matching Screenshot 4: solid walnut pill button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-3 bg-walnut text-ivory py-3.5 px-6 rounded-full font-sans text-sm font-medium hover:bg-walnut-dark shadow-brand hover:shadow-brand-lg transition-all duration-300 disabled:opacity-60 cursor-pointer"
        >
          <span>Randevu Talebi Gönder</span>
          <ArrowRight size={15} />
        </button>
      </form>
    </div>
  );
}
