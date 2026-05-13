import styles from './divider.module.css';
import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return <hr className={cn(styles.divider, className)} />;
}
