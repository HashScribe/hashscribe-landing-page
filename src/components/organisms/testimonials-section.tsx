import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Badge } from '@/components/atoms/badge';
import { TestimonialCard } from '@/components/molecules/testimonial-card';
import { testimonials } from '@/data/testimonials';
import styles from './testimonials-section.module.css';

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <div className={styles.header}>
        <Badge variant="primary">Testimonials</Badge>
        <Heading as="h2" size="h2">
          What Our <span className="gradient-text">Clients Say</span>
        </Heading>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.track}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
