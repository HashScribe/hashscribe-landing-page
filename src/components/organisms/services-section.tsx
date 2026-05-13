import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Badge } from '@/components/atoms/badge';
import { ServiceCard } from '@/components/molecules/service-card';
import { services } from '@/data/services';
import styles from './services-section.module.css';

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className={styles.header}>
        <Badge variant="primary">What We Do</Badge>
        <Heading as="h2" size="h2">
          Services That <span className="gradient-text">Drive Results</span>
        </Heading>
        <Text size="lg" color="secondary" className={styles.subtitle}>
          From ideation to launch, we offer end-to-end development services tailored to your business needs.
        </Text>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
