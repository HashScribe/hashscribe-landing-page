import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { StatItem } from '@/components/molecules/stat-item';
import styles from './stats-section.module.css';

const stats = [
  { value: '4', label: 'Years Experience', suffix: '+' },
  { value: '20', label: 'Projects Delivered', suffix: '+' },
  { value: '15', label: 'Happy Clients', suffix: '+' },
  { value: '8', label: 'Technologies', suffix: '+' },
];

export function StatsSection() {
  return (
    <SectionWrapper>
      <div className={styles.wrapper}>
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
        ))}
      </div>
    </SectionWrapper>
  );
}
