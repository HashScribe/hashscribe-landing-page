'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import styles from './nav-link.module.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(styles.link, isActive && styles.active)}
      onClick={onClick}
    >
      {children}
      <span className={styles.indicator} />
    </Link>
  );
}
