import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] bg-porcelain flex flex-col items-center justify-center px-6 text-center pt-24 pb-16">
      <h1 className="font-serif text-[100px] sm:text-[140px] font-light text-walnut/15 leading-none select-none">
        404
      </h1>
      <h2 className="font-serif text-3xl sm:text-4xl text-brand-text -mt-4 mb-3">
        Sayfa Bulunamadı
      </h2>
      <p className="font-sans text-brand-text-secondary text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfamıza dönerek
        hizmetlerimizi keşfedebilirsiniz.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2.5 bg-walnut text-ivory px-7 py-3.5 rounded-full font-sans text-sm font-medium hover:bg-walnut-dark transition-all shadow-brand hover:shadow-brand-lg"
      >
        <ArrowLeft size={15} />
        <span>Ana Sayfaya Dön</span>
      </Link>
    </div>
  );
}

