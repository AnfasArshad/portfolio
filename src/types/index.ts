export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
  highlights?: string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bioParagraphs: string[];
  location: string;
  email: string;
  phone: string;
  whatsappUrl?: string;
  image: string;
  availability: string;
  statusText: string;
  openToRelocation: boolean;
  socialLinks: SocialLink[];
  stats: StatItem[];
  education: EducationItem[];
  resumeUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "work" | "education";
  description: string;
  achievements: string[];
  technologies: string[];
  metrics?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full Stack" | "Systems & Cloud" | "AI & Data" | "Frontend & UX";
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  level: "Expert" | "Proficient" | "Familiar";
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
