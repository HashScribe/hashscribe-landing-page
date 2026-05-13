import { cn } from '@/lib/utils';
import styles from './heading.module.css';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'display' | 'h1' | 'h2' | 'h3' | 'h4';
  gradient?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Heading({
  as: Tag = 'h2',
  size = 'h2',
  gradient = false,
  children,
  className,
  id,
}: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn(
        styles.heading,
        styles[size],
        gradient && 'gradient-text',
        className
      )}
    >
      {children}
    </Tag>
  );
}
