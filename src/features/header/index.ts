// Header Feature Exports
export { default as Header } from "./components/Header";
export { default as BreadcrumbBar } from "./components/BreadcrumbBar";

// Types
export type { HeaderProps } from "./types/header.types";

// BreadcrumbBar Types
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbBarProps {
  items: BreadcrumbItem[];
}
