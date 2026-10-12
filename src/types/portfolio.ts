import type { ProjectCategory, ProjectImage } from "./projects";

export interface ProjectCardProps {
  id: string;
  img: ProjectImage;
  title: string;
  tech: string;
  category: ProjectCategory;
  noImage?: boolean;
}
