'use client';

import { useIntersection } from '@/hooks/use-intersection';
import { useEffect, useRef, useState } from 'react';
import styles from './stat-item.module.css';

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
}

export function StatItem({ value, label, suffix = '' }: StatItemProps) {
  const { ref, isVisible } = useIntersection({ triggerOnce: true });
  const [displayValue, setDisplayValue] = useState('0');
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || animatedRef.current) return;
    animatedRef.current = true;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numericValue);
      setDisplayValue(current.toString());

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.value}>
        {displayValue}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
