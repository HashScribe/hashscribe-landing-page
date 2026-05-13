export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
