import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full bg-porcelain">
      {/* 1. Hero Section with Signature Organic Mask & Badges */}
      <HeroSection />

      {/* 2. Services Section with Carousel & Chocolate Wave Transition */}
      <ServicesSection />

      {/* 3. About Section with Interior Visualization & Credibility Strip */}
      <AboutSection />

      {/* 4. Team & Philosophy Section with 3-Column Layout */}
      <TeamSection />

      {/* 5. Contact Section with 3-Column Layout: Intro, Form & Map */}
      <ContactSection />
    </div>
  );
}

