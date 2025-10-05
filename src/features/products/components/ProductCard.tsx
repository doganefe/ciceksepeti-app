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
              <button onClick={() => handleQuantityChange(cartQuantity - 1)}>
                -
              </button>
              <span>{cartQuantity}</span>
              <button onClick={() => handleQuantityChange(cartQuantity + 1)}>
                +
              </button>
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
