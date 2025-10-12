// generated-with-AI (revised)
// Search store - handles text-based search functionality (3+ character rule)
import { create } from "zustand";
import type { SearchState } from "../types/search.types";

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  isSearchActive: false,

  setSearchTerm: (term: string) => {
    set({
      searchTerm: term,
      isSearchActive: term.length >= 3,
    });
  },

  clearSearch: () => {
    set({
      searchTerm: "",
      isSearchActive: false,
    });
  },
}));
