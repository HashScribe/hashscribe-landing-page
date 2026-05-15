import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';

import { Text } from '@/components/atoms/text';
import { Icon } from '@/components/atoms/icon';
import styles from './values-section.module.css';

const values = [
  { icon: 'lightbulb', title: 'Innovation', description: 'We stay ahead of the curve, leveraging cutting-edge technologies to build future-proof solutions.' },
  { icon: 'shield', title: 'Quality', description: 'Every line of code is crafted with care. We believe in clean architecture, thorough testing, and pixel-perfect design.' },
  { icon: 'eye', title: 'Transparency', description: 'Open communication, honest timelines, and clear expectations. No surprises, ever.' },
  { icon: 'handshake', title: 'Partnership', description: 'We\'re not just vendors — we\'re partners invested in your success. Your goals become our mission.' },
];

export function ValuesSection() {
  return (
    <SectionWrapper>
      <div className={styles.header}>
        <span className="eyebrow">Our Values</span>
        <Heading as="h2" size="h2">
          What <span className="gradient-text">Drives</span> Us
        </Heading>
      </div>
      <div className={styles.grid}>
        {values.map((value) => (
          <div key={value.title} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Icon name={value.icon} size="lg" />
            </div>
            <h3 className={styles.title}>{value.title}</h3>
            <Text size="sm" color="secondary">{value.description}</Text>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
