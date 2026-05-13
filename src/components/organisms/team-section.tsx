import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Badge } from '@/components/atoms/badge';
import { TeamCard } from '@/components/molecules/team-card';
import { teamMembers } from '@/data/team';
import styles from './team-section.module.css';

export function TeamSection() {
  return (
    <SectionWrapper>
      <div className={styles.header}>
        <Badge variant="primary">The Team</Badge>
        <Heading as="h2" size="h2">
          Meet the <span className="gradient-text">Builder</span>
        </Heading>
      </div>
      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </SectionWrapper>
  );
}
