import React from "react";
import "./CategoryNavigation.scss";
import { useSearchStore } from "../../../shared/store";
import CategoryButton from "./CategoryButton";
import type { CategoryNavigationProps } from "../types/category-navigation.types";

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
}) => {
  const { selectedCategoryId, setSelectedCategory } = useSearchStore();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="category-navigation container">
      <div className="category-header">
        <h2>Kategoriler</h2>
        <div className="all-categories-link">
          <img
            src="/src/assets/Path 218.svg"
            alt="Leaf"
            className="leaf-icon"
          />
          <span>Tüm Kategoriler</span>
        </div>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={selectedCategoryId === category.id}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryNavigation;
