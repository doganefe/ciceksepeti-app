import React from "react";
import "./CategoryDrawer.scss";
import { useCategoryStore } from "../../../shared/store";
import { CATEGORIES } from "../../navigation/constants";

interface CategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({ isOpen, onClose }) => {
  const { selectedCategoryId, setSelectedCategory } = useCategoryStore();

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    setSelectedCategory(categoryId, categoryName);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose} />}
      <div className={`category-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h2>Kategoriler</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="drawer-content">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`category-item ${
                selectedCategoryId === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id, category.name)}
            >
              <span className="category-name">{category.name}</span>
              {category.count && (
                <span className="category-count">({category.count})</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryDrawer;
