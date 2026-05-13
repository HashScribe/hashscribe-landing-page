import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import { ProjectCard } from '@/components/molecules/project-card';
import { projects } from '@/data/projects';
import styles from './featured-projects.module.css';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <SectionWrapper id="projects">
      <div className={styles.header}>
        <Badge variant="primary">Our Work</Badge>
        <Heading as="h2" size="h2">
          Featured <span className="gradient-text">Projects</span>
        </Heading>
        <Text size="lg" color="secondary" className={styles.subtitle}>
          A selection of projects we&apos;re proud of. Each one represents a unique challenge solved with thoughtful engineering.
        </Text>
      </div>
      <div className={styles.grid}>
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.viewAll}>
        <Button variant="outline" size="md" href="/projects">
          View All Projects →
        </Button>
      </div>
    </SectionWrapper>
  );
}
