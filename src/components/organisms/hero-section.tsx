'use client';

import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Button } from '@/components/atoms/button';
import { Badge } from '@/components/atoms/badge';
import { useIntersection } from '@/hooks/use-intersection';
import { cn } from '@/lib/utils';
import styles from './hero-section.module.css';

export function HeroSection() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.bgPattern} />
      <div className={styles.glowOrb} />
      <div className={styles.glowOrb2} />

      <div className={cn('container', styles.content, isVisible && styles.visible)}>
        <Badge variant="primary" className={styles.badge}>
          <span className={styles.pulse} />
          Software Studio
        </Badge>

        <Heading as="h1" size="display" className={styles.heading}>
          We Build Digital{' '}
          <span className="gradient-text">Products</span> That{' '}
          <span className="gradient-text">Matter</span>
        </Heading>

        <Text size="lg" color="secondary" className={styles.subtitle}>
          HashScribe is a software studio that transforms ideas into elegant, scalable
          digital solutions. From concept to deployment — we craft experiences users love.
        </Text>

        <div className={styles.actions}>
          <Button variant="primary" size="lg" href="/projects">
            View Our Work
            <span>→</span>
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Get in Touch
          </Button>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
