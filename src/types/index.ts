export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface LearningResource {
  title: string;
  type: 'pdf' | 'link';
  url: string;
  description: string;
}