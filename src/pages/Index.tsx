import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { VideoSection } from '@/components/landing/VideoSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { ProcessSection } from '@/components/landing/ProcessSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <VideoSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
