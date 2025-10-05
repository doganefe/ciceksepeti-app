import React from "react";
import "./CategoryButton.scss";
import type { Category } from "../types/category-navigation.types";

interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: (categoryId: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isActive,
  onClick,
}) => {
  const handleClick = () => {
    onClick(category.id);
  };

  return (
    <button
      className={`category-button ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <span className="category-name">{category.name}</span>
      {category.count && (
        <span className="category-count">({category.count})</span>
      )}
    </button>
  );
};

export default CategoryButton;
