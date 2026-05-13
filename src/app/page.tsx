import { HeroSection } from '@/components/organisms/hero-section';
import { ServicesSection } from '@/components/organisms/services-section';
import { FeaturedProjects } from '@/components/organisms/featured-projects';
import { ProcessSection } from '@/components/organisms/process-section';
import { TechStackSection } from '@/components/organisms/tech-stack-section';
import { TestimonialsSection } from '@/components/organisms/testimonials-section';
import { StatsSection } from '@/components/organisms/stats-section';
import { CtaBanner } from '@/components/organisms/cta-banner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <TechStackSection />
      <TestimonialsSection />
      <StatsSection />
      <CtaBanner />
    </>
  );
}
