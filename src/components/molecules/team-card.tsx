import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import type { TeamMember } from '@/types/team';
import styles from './team-card.module.css';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <span className={styles.avatarLetter}>{member.name.charAt(0)}</span>
      </div>
      <div className={styles.info}>
        <Heading as="h3" size="h4">{member.name}</Heading>
        <Text size="sm" color="muted" className={styles.role}>{member.role}</Text>
        <Text size="sm" color="secondary" className={styles.bio}>{member.bio}</Text>
        <div className={styles.socials}>
          {member.socials.github && (
            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              GH
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              LI
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              X
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
