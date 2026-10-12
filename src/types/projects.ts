export type ProjectCategory = "backend" | "fullstack" | "ai" | "enterprise";

export type ProjectImage = string | string[];

export interface ProjectData {
  id: string;
  title: string;
  category: ProjectCategory;
  image: ProjectImage;
  liveLink?: string;
  technologies: string;
  description: string;
  features: string[];
  challenges?: string;
  results?: string;
  demoUrl?: string;
  githubUrl?: string;
  noImage?: boolean;
}
