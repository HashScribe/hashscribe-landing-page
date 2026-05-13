/**
 * Stubbed API layer — returns dummy data for Phase 1.
 * In Phase 2, these functions will fetch from Strapi.
 */

import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { teamMembers } from '@/data/team';
import { techStack } from '@/data/tech-stack';
import type { Project } from '@/types/project';
import type { Service } from '@/types/service';
import type { Testimonial } from '@/types/testimonial';
import type { TeamMember } from '@/types/team';

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getProjects(): Promise<Project[]> {
  // Phase 2: return fetch(`${STRAPI_URL}/api/projects?populate=*`)
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getProjectSlugs(): Promise<string[]> {
  return projects.map((p) => p.slug);
}

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers;
}

export async function getTechStack(): Promise<{ name: string; icon: string; category: string }[]> {
  return techStack;
}
