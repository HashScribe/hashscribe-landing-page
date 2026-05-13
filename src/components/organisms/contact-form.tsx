'use client';

import { useState } from 'react';
import { Input, TextArea } from '@/components/atoms/input';
import { Button } from '@/components/atoms/button';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import styles from './contact-form.module.css';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', budget: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <Heading as="h3" size="h3">Message Sent!</Heading>
        <Text color="secondary">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</Text>
        <Button variant="secondary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', budget: '', message: '' }); }}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <Input id="contact-name" label="Name" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <Input id="contact-email" label="Email" type="email" placeholder="you@company.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>
      <div className={styles.row}>
        <Input id="contact-company" label="Company" placeholder="Your company (optional)" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
        <div className={styles.selectWrapper}>
          <label htmlFor="contact-budget" className={styles.label}>Budget Range</label>
          <select id="contact-budget" className={styles.select} value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
            <option value="">Select a range</option>
            <option value="5k-10k">$5,000 — $10,000</option>
            <option value="10k-25k">$10,000 — $25,000</option>
            <option value="25k-50k">$25,000 — $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </div>
      </div>
      <TextArea id="contact-message" label="Project Details" placeholder="Tell us about your project, goals, and timeline..." required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
      <Button variant="primary" size="lg" type="submit">
        Send Message →
      </Button>
    </form>
  );
}
