export interface Project {
  id: string;
  title: string;
  category: 'Réseau' | 'Télécoms' | 'Programmation' | 'Cybersécurité';
  year: string;
  description: string;
  details: string[];
  technologies: string[];
  images?: {
    url: string;
    caption: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tasks: string[];
  fullDescription?: string;
  companyDetails?: string;
  acquiredSkills?: string[];
  websiteUrl?: string;
  featuredProject?: {
    title: string;
    description: string;
    details: string[];
    technologies: string[];
  };
}

export interface Skill {
  name: string;
  description: string;
  category: 'Systèmes' | 'Réseaux' | 'Cybersécurité' | 'Télécoms' | 'Programmation' | 'Méthodologie';
  iconName?: string;
}
