import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/organisms/project-grid';
import { CtaBanner } from '@/components/organisms/cta-banner';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of digital products — web apps, mobile apps, and full-stack platforms.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectGrid />
      <CtaBanner />
    </>
  );
}
