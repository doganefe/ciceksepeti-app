// Header Feature Exports
export { default as Header } from "./components/Header";
export { default as SearchBar } from "./components/SearchBar";
export { default as ShoppingCart } from "./components/ShoppingCart";
export { default as FreeCargoProgressBar } from "./components/FreeCargoProgressBar";
export { default as BreadcrumbBar } from "./components/BreadcrumbBar";

// Types
export type { HeaderProps } from "./types/header.types";
export type { SearchBarProps } from "./types/search-bar.types";
export type { ShoppingCartProps } from "./types/shopping-cart.types";

// BreadcrumbBar Types
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbBarProps {
  items: BreadcrumbItem[];
}
