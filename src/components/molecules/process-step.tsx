import styles from './process-step.module.css';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.timeline}>
        <div className={styles.number}>{String(number).padStart(2, '0')}</div>
        {!isLast && <div className={styles.line} />}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
