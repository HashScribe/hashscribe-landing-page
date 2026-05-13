import type { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'High-performance web applications built with modern frameworks. From landing pages to complex SaaS platforms, we craft experiences that scale.',
    icon: 'globe',
    features: ['Next.js & React', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration'],
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that users love. Beautiful interfaces, smooth animations, and rock-solid performance.',
    icon: 'smartphone',
    features: ['React Native & Flutter', 'iOS & Android', 'Push Notifications', 'Offline Support'],
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that converts. We research, prototype, and test to create interfaces that feel intuitive from the first interaction.',
    icon: 'palette',
    features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
  },
  {
    id: 4,
    title: 'API & Backend',
    description: 'Robust, scalable backend architectures. RESTful APIs, GraphQL services, and microservices that power your applications reliably.',
    icon: 'server',
    features: ['Node.js & NestJS', 'GraphQL & REST', 'Database Design', 'Authentication & Security'],
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure that grows with your business. We handle deployment, monitoring, and scaling so you can focus on your product.',
    icon: 'cloud',
    features: ['AWS & GCP', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Performance Monitoring'],
  },
  {
    id: 6,
    title: 'AI & Automation',
    description: 'Intelligent solutions that automate workflows and unlock insights. From chatbots to predictive analytics, we bring AI to your business.',
    icon: 'brain',
    features: ['Machine Learning', 'Natural Language Processing', 'Data Analytics', 'Process Automation'],
  },
];
