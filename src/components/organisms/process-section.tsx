import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';

import { ProcessStep } from '@/components/molecules/process-step';
import styles from './process-section.module.css';

const steps = [
  { title: 'Discovery', description: 'We start by understanding your business, goals, and users. Through research and workshops, we define the problem space and align on a clear vision.' },
  { title: 'Design', description: 'Wireframes, prototypes, and user flows take shape. We iterate rapidly, validating assumptions before writing a single line of code.' },
  { title: 'Develop', description: 'Clean, modular code meets agile delivery. We build in sprints with continuous feedback, ensuring quality at every step.' },
  { title: 'Deliver', description: 'Launch is just the beginning. We deploy, monitor, and optimize — ensuring your product performs flawlessly in the real world.' },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <div className={styles.layout}>
        <div className={styles.header}>
          <span className="eyebrow">Our Process</span>
          <Heading as="h2" size="h2">
            How We <span className="gradient-text">Work</span>
          </Heading>
          <Text size="lg" color="secondary" className={styles.subtitle}>
            A proven methodology that turns complexity into clarity.
          </Text>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
