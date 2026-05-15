'use client';

import { SectionWrapper } from '@/components/atoms/section-wrapper';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';

import { ProjectCard } from '@/components/molecules/project-card';
import { projects } from '@/data/projects';
import { useState } from 'react';
import styles from './project-grid.module.css';

const categories = ['all', 'web', 'mobile', 'fullstack', 'uiux'] as const;

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper>
      <div className={styles.header}>
        <span className="eyebrow">Portfolio</span>
        <Heading as="h1" size="h1">
          Our <span className="gradient-text">Projects</span>
        </Heading>
        <Text size="lg" color="secondary" className={styles.subtitle}>
          Explore our portfolio of digital products built for startups and enterprises alike.
        </Text>
      </div>

      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat === 'uiux' ? 'UI/UX' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <Text size="lg" color="muted">No projects found in this category yet.</Text>
        </div>
      )}
    </SectionWrapper>
  );
}
