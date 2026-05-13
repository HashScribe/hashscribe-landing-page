import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/api';
import { Badge } from '@/components/atoms/badge';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Button } from '@/components/atoms/button';
import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { CtaBanner } from '@/components/organisms/cta-banner';
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
      {/* Hero */}
      <SectionWrapper>
        <div className={styles.hero}>
          <div className={styles.breadcrumb}>
            <Button variant="ghost" size="sm" href="/projects">
              ← Back to Projects
            </Button>
          </div>
          <div className={styles.heroMeta}>
            <Badge variant="primary">{project.category}</Badge>
            {project.timeline && <Badge variant="default">{project.timeline}</Badge>}
          </div>
          <Heading as="h1" size="h1">{project.title}</Heading>
          <Text size="lg" color="secondary" className={styles.heroDescription}>
            {project.description}
          </Text>
          {project.clientName && (
            <Text size="sm" color="muted">
              Client: {project.clientName}
            </Text>
          )}
        </div>
      </SectionWrapper>

      {/* Banner */}
      <SectionWrapper>
        <div className={styles.banner} style={{ background: `linear-gradient(135deg, #1a1a2e, #16213e)` }}>
          <span className={styles.bannerLetter}>{project.title.charAt(0)}</span>
        </div>
      </SectionWrapper>

      {/* Problem & Solution */}
      <SectionWrapper>
        <div className={styles.twoCol}>
          <div className={styles.block}>
            <Badge variant="outline">The Problem</Badge>
            <Heading as="h2" size="h3">Challenge</Heading>
            <Text color="secondary">{project.problem}</Text>
          </div>
          <div className={styles.block}>
            <Badge variant="primary">Our Solution</Badge>
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
            <Badge variant="primary">Results</Badge>
            <Heading as="h2" size="h3">Impact</Heading>
            <Text size="lg" color="secondary">{project.results}</Text>
          </div>
        </SectionWrapper>
      )}

      <CtaBanner />
    </>
  );
}
