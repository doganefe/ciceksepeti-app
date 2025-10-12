// generated-with-AI (revised)
// Category Types - separated from search types for better organization
export interface CategoryState {
  selectedCategoryId: string | null;
  selectedCategoryName: string;
  isCategoryFilterActive: boolean;
  setSelectedCategory: (
    categoryId: string | null,
    categoryName?: string
  ) => void;
  clearCategory: () => void;
}
