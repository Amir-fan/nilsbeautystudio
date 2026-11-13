import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { PageTransition } from '@/components/layout/PageTransition';

// Lazy-loaded pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-porcelain flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-2 border-caramel/30 border-t-caramel rounded-full animate-spin" />
      <span className="font-serif text-lg text-brand-text mt-4">Nils Beauty Studio</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const isHeroPage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-porcelain text-brand-text selection:bg-caramel/20 selection:text-brand-text">
      <ScrollToTop />
      <SiteHeader transparent={isHeroPage} />
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                }
              />
              <Route
                path="/hizmetler"
                element={
                  <PageTransition>
                    <ServicesPage />
                  </PageTransition>
                }
              />
              <Route
                path="/hakkimizda"
                element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                }
              />
              <Route
                path="/galeri"
                element={
                  <PageTransition>
                    <GalleryPage />
                  </PageTransition>
                }
              />
              <Route
                path="/iletisim"
                element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFoundPage />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
