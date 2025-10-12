import React from "react";
import "./CategoryNavigation.scss";
import { useCategoryStore } from "../../../shared/store";
import CategoryButton from "./CategoryButton";
import type { CategoryNavigationProps } from "../types/category-navigation.types";
import { categoryIcon } from "../../../assets";

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
}) => {
  const { selectedCategoryId, setSelectedCategory } = useCategoryStore();

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    setSelectedCategory(categoryId, categoryName);
  };

  return (
    <div className="category-navigation container">
      <div className="category-header">
        <div className="category-header-left">
          <img src={categoryIcon} alt="Leaf" className="leaf-icon" />
          <h2>Kategoriler</h2>
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
