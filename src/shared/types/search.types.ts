// Search Types
export interface SearchState {
  searchTerm: string;
  selectedCategoryId: string | null;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  clearSearch: () => void;
  clearCategoryFilter: () => void;
  clearAllFilters: () => void;
  isSearchActive: boolean;
  isCategoryFilterActive: boolean;
}
