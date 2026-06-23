export interface NavItem {
  id: string;
  label: string;
}

export interface Stat {
  label: string;
  value: string | number;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "researchgate" | "scholar" | "facebook" | "email";
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "conference" | "workshop" | "research" | "event" | "award";
  link?: string;
  featured?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: "journal" | "conference" | "book" | "report";
  citations?: number;
  doi?: string;
  link?: string;
  openAccess?: boolean;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  description: string;
  type: "community" | "policy" | "industry" | "workshop" | "training";
  year: string;
  impact?: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  level: string;
  institution: string;
  description: string;
  semesters?: string[];
}

export interface EditorialRole {
  id: string;
  role: string;
  journal: string;
  period: string;
  type: "editor" | "reviewer" | "board" | "committee";
}

export interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: "leadership" | "membership" | "advisory" | "institutional";
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SortOption = "year-desc" | "year-asc" | "citations-desc" | "title-asc";
export type PublicationCategory = "all" | "journal" | "conference" | "book" | "report";
