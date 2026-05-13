'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/atoms/logo';
import { Button } from '@/components/atoms/button';
import { NavLink } from '@/components/molecules/nav-link';
import styles from './navbar.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        <Logo />

        <div className={styles.desktopLinks}>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className={styles.desktopCta}>
          <Button variant="primary" size="sm" href="/contact">
            Let&apos;s Talk
          </Button>
        </div>

        <button
          className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Button variant="primary" size="md" href="/contact">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </header>
  );
}
