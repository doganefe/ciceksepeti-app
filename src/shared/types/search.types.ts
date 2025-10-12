// Search Types
export interface SearchState {
  searchTerm: string;
  isSearchActive: boolean;
  setSearchTerm: (term: string) => void;
  clearSearch: () => void;
}
