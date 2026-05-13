import { Text } from '@/components/atoms/text';
import type { Testimonial } from '@/types/testimonial';
import styles from './testimonial-card.module.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.quote}>&ldquo;</div>
      <Text size="md" color="primary" className={styles.content}>
        {testimonial.content}
      </Text>
      <div className={styles.stars}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className={styles.star}>★</span>
        ))}
      </div>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {testimonial.name.charAt(0)}
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.name}>{testimonial.name}</span>
          <span className={styles.role}>
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
}
