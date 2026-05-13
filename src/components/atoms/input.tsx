import { cn } from '@/lib/utils';
import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(styles.input, error && styles.errorBorder, className)}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export function TextArea({ label, error, className, id, ...props }: TextAreaProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(styles.input, styles.textarea, error && styles.errorBorder, className)}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
