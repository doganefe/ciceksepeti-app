import { create } from "zustand";
import type { SearchState } from "../types/search.types";

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  selectedCategoryId: "1",
  isSearchActive: false,
  isCategoryFilterActive: false,

  setSearchTerm: (term: string) => {
    set({
      searchTerm: term,
      isSearchActive: term.length >= 3,
    });
  },

  setSelectedCategory: (categoryId: string | null) => {
    set((state) => {
      const newCategoryId =
        state.selectedCategoryId === categoryId ? null : categoryId;

      return {
        selectedCategoryId: newCategoryId,
        isCategoryFilterActive: newCategoryId !== null && newCategoryId !== "1", // "1" = "Tüm Kategoriler"
      };
    });
  },

  clearSearch: () => {
    set({
      searchTerm: "",
      isSearchActive: false,
    });
  },

  clearCategoryFilter: () => {
    set({
      selectedCategoryId: null,
      isCategoryFilterActive: false,
    });
  },

  clearAllFilters: () => {
    set({
      searchTerm: "",
      selectedCategoryId: null,
      isSearchActive: false,
      isCategoryFilterActive: false,
    });
  },
}));
