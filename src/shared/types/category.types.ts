// Category Types
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
