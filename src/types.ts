export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI & LLM' | 'Engineering & IoT';
  description: string;
  longDescription?: string;
  tags: string[];
  metrics?: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  iconName: string;
  architecture?: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    badge?: string;
    description: string;
    icon?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  period?: string;
  title: string;
  issuer: string;
  category: 'Award' | 'Certification' | 'Experience' | 'Education';
  description: string;
  credentialUrl?: string;
  skillsGained: string[];
  badgeText?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}
