import Image from 'next/image';
import { cn } from '@/lib/utils';
import styles from './tech-badge.module.css';

interface TechBadgeProps {
  name: string;
  logoSrc: string;
  wide?: boolean;
}

export function TechBadge({ name, logoSrc, wide }: TechBadgeProps) {
  return (
    <div className={cn(styles.badge, wide && styles.wide)}>
      <Image
        src={logoSrc}
        alt={name}
        width={wide ? 156 : 96}
        height={48}
        className={styles.logo}
      />
    </div>
  );
}
