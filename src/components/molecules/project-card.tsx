import Link from 'next/link';
import { Badge } from '@/components/atoms/badge';
import type { Project } from '@/types/project';
import styles from './project-card.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div
          className={styles.image}
          style={{ backgroundColor: getProjectColor(project.id) }}
        >
          <span className={styles.imagePlaceholder}>{project.title.charAt(0)}</span>
        </div>
        <div className={styles.overlay}>
          <span className={styles.viewProject}>
            View Project <span className={styles.arrow}>→</span>
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <Badge variant="primary">{project.category}</Badge>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techStack}>
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">{tech}</Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline">+{project.techStack.length - 4}</Badge>
          )}
        </div>
      </div>
    </Link>
  );
}

function getProjectColor(id: number): string {
  const colors = [
    'linear-gradient(135deg, #1a1a2e, #16213e)',
    'linear-gradient(135deg, #0f3460, #1a1a2e)',
    'linear-gradient(135deg, #1a1a2e, #2d1b3d)',
    'linear-gradient(135deg, #162447, #1a1a2e)',
    'linear-gradient(135deg, #1b2838, #1a1a2e)',
    'linear-gradient(135deg, #1a1a2e, #1b3a2d)',
  ];
  return colors[(id - 1) % colors.length];
}
