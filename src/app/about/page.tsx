import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Badge } from '@/components/atoms/badge';
import { ValuesSection } from '@/components/organisms/values-section';
import { TeamSection } from '@/components/organisms/team-section';
import { StatsSection } from '@/components/organisms/stats-section';
import { CtaBanner } from '@/components/organisms/cta-banner';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about HashScribe — our mission, values, and the team behind the studio.',
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper>
        <div className={styles.hero}>
          <Badge variant="primary">About Us</Badge>
          <Heading as="h1" size="h1">
            We Are <span className="gradient-text">HashScribe</span>
          </Heading>
          <Text size="lg" color="secondary" className={styles.heroText}>
            A software studio born from the belief that great technology should be accessible to every ambitious business. We combine deep engineering expertise with a designer&apos;s eye to build products that don&apos;t just work — they inspire.
          </Text>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className={styles.story}>
          <div className={styles.storyContent}>
            <Badge variant="primary">Our Story</Badge>
            <Heading as="h2" size="h2">
              From Engineer to <span className="gradient-text">Studio</span>
            </Heading>
            <Text color="secondary" className={styles.storyText}>
              HashScribe started with a simple observation: too many great ideas die because of poor execution. After 4+ years of building software across fintech, healthcare, and SaaS, our founder decided to create a studio that prioritizes craft above all else.
            </Text>
            <Text color="secondary" className={styles.storyText}>
              We&apos;re not a factory. We&apos;re a studio. That means every project gets our full attention, every codebase is built to last, and every interface is designed to delight. We work with a select number of clients at a time to ensure quality never takes a backseat.
            </Text>
            <Text color="secondary" className={styles.storyText}>
              Our name — <strong style={{ color: 'var(--color-text-primary)' }}>HashScribe</strong> — represents the intersection of code (<em>#</em>) and storytelling (<em>Scribe</em>). Because the best software tells a story — your story, through technology.
            </Text>
          </div>
        </div>
      </SectionWrapper>

      <ValuesSection />
      <StatsSection />
      <TeamSection />
      <CtaBanner />
    </>
  );
}
