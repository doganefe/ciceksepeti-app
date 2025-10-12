import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.scss";
import { useSearchStore, useCategoryStore } from "../../../shared/store";
import type { ProductGridProps } from "../types/product-grid.types";
import { yaprakIcon } from "../../../assets";

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { searchTerm, isSearchActive } = useSearchStore();
  const { selectedCategoryId, selectedCategoryName, isCategoryFilterActive } =
    useCategoryStore();

  // Arama terimi ve kategori filtrelemesine göre ürünleri filtrele
  const filteredProducts = React.useMemo(() => {
    let filtered = products;

    // Kategori filtrelemesi
    if (isCategoryFilterActive && selectedCategoryId) {
      filtered = filtered.filter(
        (product) => product.categoryId === selectedCategoryId
      );
    }

    // Arama terimi filtrelemesi
    if (isSearchActive && searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [
    products,
    searchTerm,
    isSearchActive,
    selectedCategoryId,
    isCategoryFilterActive,
  ]);

  return (
    <div className="container product-grid-container">
      <h3 className="product-grid-title">
        <img src={yaprakIcon} alt="Leaf" className="leaf-icon" />
        {selectedCategoryName}
      </h3>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="no-results">
            <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
