export interface Project {
  id: string;
  title: string;
  category: 'Networking' | 'Security' | 'Automation' | 'Cloud';
  description: string;
  fullDetails?: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Networking' | 'Cisco' | 'Security' | 'Operating Systems' | 'Cloud' | 'Programming' | 'Tools';
  icon?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: 'Completed' | 'In Progress' | 'Learning';
  date: string;
  badge: string;
  verificationUrl?: string;
  skillsCovered: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Lab Experience' | 'Networking Simulations' | 'Personal Projects' | 'Volunteer IT Support' | 'University Practical Work';
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  expectedGraduation: string;
  gpa?: string;
  coursework: string[];
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathons' | 'Networking Competitions' | 'Cisco Labs' | 'Technical Workshops';
  date: string;
  description: string;
  badgeText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  updatedAt: string;
}
