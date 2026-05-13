import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Button } from '@/components/atoms/button';
import styles from './cta-banner.module.css';

export function CtaBanner() {
  return (
    <SectionWrapper>
      <div className={styles.banner}>
        <div className={styles.glow} />
        <Heading as="h2" size="h2" className={styles.heading}>
          Ready to Build Something{' '}
          <span className="gradient-text">Great?</span>
        </Heading>
        <Text size="lg" color="secondary" className={styles.text}>
          Let&apos;s discuss your project and see how HashScribe can bring your vision to life.
        </Text>
        <Button variant="primary" size="lg" href="/contact">
          Start a Conversation →
        </Button>
      </div>
    </SectionWrapper>
  );
}
