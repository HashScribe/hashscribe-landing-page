import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/api';
import { Badge } from '@/components/atoms/badge';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { CtaBanner } from '@/components/organisms/cta-banner';
import { cn } from '@/lib/utils';
import styles from './project-detail.module.css';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      {/* Cinematic Hero Banner — clean, just title + back button */}
      <div className={styles.heroBanner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.bannerUrl} alt={project.title} className={styles.bannerImage} />
        <div className={styles.heroOverlay} />

        <a href="/projects" className={styles.backCircle} aria-label="Back to Projects">
          ←
        </a>

        <div className={cn('container', styles.heroContent)}>
          <Heading as="h1" size="display" className={styles.heroTitle}>{project.title}</Heading>
        </div>
      </div>

      {/* Project Info — metadata strip */}
      <SectionWrapper>
        <div className={styles.projectInfo}>
          <div className={styles.infoMeta}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Category</span>
              <Badge variant="primary">{project.category}</Badge>
            </div>
            {project.timeline && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Timeline</span>
                <Badge variant="default">{project.timeline}</Badge>
              </div>
            )}
            {project.clientName && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Client</span>
                <span className={styles.infoValue}>{project.clientName}</span>
              </div>
            )}
          </div>
          <Text size="lg" color="secondary" className={styles.infoDescription}>
            {project.description}
          </Text>
        </div>
      </SectionWrapper>

      {/* Problem & Solution */}
      <SectionWrapper>
        <div className={styles.twoCol}>
          <div className={styles.block}>
            <span className="eyebrow">The Problem</span>
            <Heading as="h2" size="h3">Challenge</Heading>
            <Text color="secondary">{project.problem}</Text>
          </div>
          <div className={styles.block}>
            <span className="eyebrow">Our Solution</span>
            <Heading as="h2" size="h3">Approach</Heading>
            <Text color="secondary">{project.solution}</Text>
          </div>
        </div>
      </SectionWrapper>

      {/* Tech Stack */}
      <SectionWrapper>
        <div className={styles.techSection}>
          <Heading as="h2" size="h3">Tech Stack</Heading>
          <div className={styles.techGrid}>
            {project.techStack.map((tech) => (
              <div key={tech} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Results */}
      {project.results && (
        <SectionWrapper>
          <div className={styles.results}>
            <span className="eyebrow">Results</span>
            <Heading as="h2" size="h3">Impact</Heading>
            <Text size="lg" color="secondary">{project.results}</Text>
          </div>
        </SectionWrapper>
      )}

      <CtaBanner />
    </>
  );
}
