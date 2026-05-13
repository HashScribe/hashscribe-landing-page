export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  category: 'web' | 'mobile' | 'fullstack' | 'uiux';
  thumbnailUrl: string;
  bannerUrl: string;
  screenshots: string[];
  techStack: string[];
  clientName?: string;
  timeline?: string;
  results?: string;
  featured: boolean;
  publishedAt: string;
}
