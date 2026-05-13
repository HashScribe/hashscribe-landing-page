import { cn } from '@/lib/utils';
import styles from './icon.module.css';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconMap: Record<string, string> = {
  globe: '🌐',
  smartphone: '📱',
  palette: '🎨',
  server: '⚙️',
  cloud: '☁️',
  brain: '🧠',
  'arrow-right': '→',
  'arrow-left': '←',
  'arrow-up-right': '↗',
  check: '✓',
  star: '★',
  quote: '"',
  mail: '✉',
  phone: '📞',
  location: '📍',
  github: '⌨',
  linkedin: '💼',
  twitter: '🐦',
  menu: '☰',
  close: '✕',
  code: '</>',
  heart: '❤',
  clock: '⏱',
  users: '👥',
  zap: '⚡',
  shield: '🛡',
  target: '🎯',
  rocket: '🚀',
  lightbulb: '💡',
  handshake: '🤝',
  eye: '👁',
};

export function Icon({ name, size = 'md', className }: IconProps) {
  return (
    <span
      className={cn(styles.icon, styles[size], className)}
      role="img"
      aria-label={name}
    >
      {iconMap[name] || '●'}
    </span>
  );
}
