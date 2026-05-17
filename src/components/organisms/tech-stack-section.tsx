import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';

import { TechBadge } from '@/components/molecules/tech-badge';
import { techStack } from '@/data/tech-stack';
import styles from './tech-stack-section.module.css';

export function TechStackSection() {
  return (
    <SectionWrapper id="tech-stack" className={styles.section}>
      <div className={styles.header}>
        <span className="eyebrow">Platforms</span>
        <Heading as="h2" size="h2">
          Platforms We <span className="gradient-text">Build With</span>
        </Heading>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <div className={styles.marqueeGroup}>
            {techStack.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} logoSrc={tech.logoSrc} wide={tech.wide} />
            ))}
          </div>
          <div className={styles.marqueeGroup} aria-hidden="true">
            {techStack.map((tech) => (
              <TechBadge key={`${tech.name}-copy`} name={tech.name} logoSrc={tech.logoSrc} wide={tech.wide} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={`${styles.marquee} ${styles.marqueeReverse}`}>
          <div className={styles.marqueeGroup}>
            {[...techStack].reverse().map((tech) => (
              <TechBadge key={`${tech.name}-reverse`} name={tech.name} logoSrc={tech.logoSrc} wide={tech.wide} />
            ))}
          </div>
          <div className={styles.marqueeGroup} aria-hidden="true">
            {[...techStack].reverse().map((tech) => (
              <TechBadge key={`${tech.name}-reverse-copy`} name={tech.name} logoSrc={tech.logoSrc} wide={tech.wide} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
