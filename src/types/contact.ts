import type { ReactNode } from "react";

export interface ContactInfoItemProps {
  icon: string;
  label: string;
  value: string | ReactNode;
}

export interface ContactInputProps {
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
  required?: boolean;
}

export interface PortfolioEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message?: string;
}

export interface PortfolioEmailResponse {
  success?: boolean;
  message?: string;
  data?: Record<string, unknown>;
}

export interface PortfolioEmailErrorResponse {
  message?: string;
  error?: string;
}
