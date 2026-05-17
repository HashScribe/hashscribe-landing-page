import { Icon } from "@/components/atoms/icon";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import type { Service } from "@/types/service";
import styles from "./service-card.module.css";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <Heading as="h3" size="h4" className={styles.title}>
        {service.title}
      </Heading>
      <Text size="sm" color="secondary" className={styles.description}>
        {service.description}
      </Text>
      <ul className={styles.features}>
        {service.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <span className={styles.dot} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
