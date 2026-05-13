import { Icon } from '@/components/atoms/icon';
import styles from './contact-info.module.css';

export function ContactInfo() {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>Get in Touch</h3>
      <p className={styles.description}>
        Have a project in mind? We&apos;d love to hear about it. Fill out the form or reach us through any of these channels.
      </p>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <Icon name="mail" size="md" />
          </div>
          <div>
            <span className={styles.label}>Email</span>
            <a href="mailto:hello@hashscribe.dev" className={styles.value}>hello@hashscribe.dev</a>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <Icon name="location" size="md" />
          </div>
          <div>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>Remote — Worldwide</span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <Icon name="clock" size="md" />
          </div>
          <div>
            <span className={styles.label}>Response Time</span>
            <span className={styles.value}>Within 24 hours</span>
          </div>
        </div>
      </div>

      <div className={styles.socials}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter / X</a>
      </div>
    </div>
  );
}
