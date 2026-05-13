import { cn } from '@/lib/utils';
import styles from './text.module.css';

interface TextProps {
  as?: 'p' | 'span' | 'div';
  size?: 'lg' | 'md' | 'sm' | 'caption';
  color?: 'primary' | 'secondary' | 'muted';
  children: React.ReactNode;
  className?: string;
}

export function Text({
  as: Tag = 'p',
  size = 'md',
  color = 'secondary',
  children,
  className,
}: TextProps) {
  return (
    <Tag className={cn(styles.text, styles[size], styles[color], className)}>
      {children}
    </Tag>
  );
}
