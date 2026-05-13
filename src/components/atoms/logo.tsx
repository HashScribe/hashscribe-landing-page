import styles from './logo.module.css';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`${styles.logo} ${className || ''}`} aria-label="HashScribe Home">
      <span className={styles.hash}>#</span>
      <span className={styles.text}>HashScribe</span>
    </Link>
  );
}
