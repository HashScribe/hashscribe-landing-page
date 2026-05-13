import { Logo } from '@/components/atoms/logo';
import { Divider } from '@/components/atoms/divider';
import Link from 'next/link';
import styles from './footer.module.css';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Web Development', href: '/contact' },
    { label: 'Mobile Development', href: '/contact' },
    { label: 'UI/UX Design', href: '/contact' },
    { label: 'Cloud & DevOps', href: '/contact' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter / X', href: 'https://twitter.com' },
  ],
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>
              We craft digital products that solve real problems. From concept to deployment, we bring your vision to life.
            </p>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Company</h4>
            <ul className={styles.links}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Services</h4>
            <ul className={styles.links}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Connect</h4>
            <ul className={styles.links}>
              {footerLinks.socials.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} HashScribe. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built with <span className={styles.heart}>❤</span> by HashScribe
          </p>
        </div>
      </div>
    </footer>
  );
}
