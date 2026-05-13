import styles from './tech-badge.module.css';

interface TechBadgeProps {
  name: string;
  icon: string;
}

export function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
