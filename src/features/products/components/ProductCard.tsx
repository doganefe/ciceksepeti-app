import React from "react";
import "./ProductCard.scss";
import { useCartStore } from "../../../shared/store";
import type { ProductCardProps } from "../types/product-card.types";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  image2x,
  hasFreeDelivery = false,
}) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCartStore();
  const cartQuantity = getItemQuantity(id);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      hasFreeDelivery,
    });
  };

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} srcSet={`${image} 1x, ${image2x} 2x`} alt={name} />
      </div>

      <div className="product-info">
        <div className="product-name">{name}</div>
        <div
          className="delivery-info"
          style={{ visibility: hasFreeDelivery ? "visible" : "hidden" }}
        >
          Ücretsiz Teslimat
        </div>
        <div className="product-price">{price}</div>

        <div className="product-actions">
          {cartQuantity > 0 ? (
            <div className="quantity-selector">
              <img
                src="/src/assets/minus-icon.png"
                alt="minus"
                onClick={() => handleQuantityChange(cartQuantity - 1)}
              />
              <span>{cartQuantity}</span>
              <img
                src="/src/assets/plus-icon.svg"
                alt="plus"
                onClick={() => handleQuantityChange(cartQuantity + 1)}
              />
            </div>
          ) : (
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Sepete Ekle
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
