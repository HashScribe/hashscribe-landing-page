import { cn } from '@/lib/utils';
import styles from './badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[variant], className)}>
      {children}
    </span>
  );
}
