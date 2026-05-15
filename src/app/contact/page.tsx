import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';

import { ContactForm } from '@/components/organisms/contact-form';
import { ContactInfo } from '@/components/organisms/contact-info';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with HashScribe. Let\'s discuss your next project.',
};

export default function ContactPage() {
  return (
    <SectionWrapper>
      <div className={styles.header}>
        <span className="eyebrow">Contact</span>
        <Heading as="h1" size="h1">
          Let&apos;s Build Something{' '}
          <span className="gradient-text">Great</span>
        </Heading>
      </div>
      <div className={styles.layout}>
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </SectionWrapper>
  );
}
