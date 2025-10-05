export interface Category {
  id: string;
  name: string;
  count?: number;
  isActive?: boolean;
}

export interface CategoryNavigationProps {
  categories: Category[];
  onCategorySelect?: (categoryId: string) => void;
}
