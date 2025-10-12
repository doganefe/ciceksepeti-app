// generated-with-AI (revised)
// Self-contained component - imports CATEGORIES directly instead of receiving as props
import React from "react";
import "./CategoryNavigation.scss";
import { useCategoryStore } from "../../../shared/store";
import { CATEGORIES } from "../constants";
import CategoryButton from "./CategoryButton";
import { categoryIcon } from "../../../assets";

const CategoryNavigation: React.FC = () => {
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
        {CATEGORIES.map((category) => (
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
