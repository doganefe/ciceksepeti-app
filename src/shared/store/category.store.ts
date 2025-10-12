import { create } from "zustand";
import type { CategoryState } from "../types/category.types";

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategoryId: "1",
  selectedCategoryName: "Tüm Kategoriler",
  isCategoryFilterActive: false,

  setSelectedCategory: (categoryId: string | null, categoryName?: string) => {
    set((state) => {
      const newCategoryId =
        state.selectedCategoryId === categoryId ? null : categoryId;

      return {
        selectedCategoryId: newCategoryId,
        selectedCategoryName:
          newCategoryId === null
            ? "Tüm Kategoriler"
            : categoryName || "Tüm Kategoriler",
        isCategoryFilterActive: newCategoryId !== null && newCategoryId !== "1", // "1" = "Tüm Kategoriler"
      };
    });
  },

  clearCategory: () => {
    set({
      selectedCategoryId: null,
      selectedCategoryName: "Tüm Kategoriler",
      isCategoryFilterActive: false,
    });
  },
}));
