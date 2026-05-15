import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';

import { TechBadge } from '@/components/molecules/tech-badge';
import { techStack } from '@/data/tech-stack';
import styles from './tech-stack-section.module.css';

export function TechStackSection() {
  const doubled = [...techStack, ...techStack];

  return (
    <SectionWrapper id="tech-stack">
      <div className={styles.header}>
        <span className="eyebrow">Tech Stack</span>
        <Heading as="h2" size="h2">
          Technologies We <span className="gradient-text">Master</span>
        </Heading>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {doubled.map((tech, i) => (
            <TechBadge key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={`${styles.marquee} ${styles.marqueeReverse}`}>
          {[...doubled].reverse().map((tech, i) => (
            <TechBadge key={`${tech.name}-rev-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
