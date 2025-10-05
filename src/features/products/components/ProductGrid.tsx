import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.scss";
import { useSearchStore } from "../../../shared/store";
import type { ProductGridProps } from "../types/product-grid.types";

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const {
    searchTerm,
    isSearchActive,
    selectedCategoryId,
    isCategoryFilterActive,
  } = useSearchStore();

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
    <div className="product-grid container">
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
  );
};

export default ProductGrid;
