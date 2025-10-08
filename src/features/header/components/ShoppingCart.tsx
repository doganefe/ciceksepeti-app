import React from "react";
import "./ShoppingCart.scss";
import { useCartStore } from "../../../shared/store";
import FreeCargoProgressBar from "./FreeCargoProgressBar";
import { shoppingCartIcon } from "../../../assets";

interface ShoppingCartProps {
  onCartClick?: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const { totalItems } = useCartStore();

  return (
    <div className="shopping-cart-container">
      <button className="shopping-cart-button">
        <img src={shoppingCartIcon} className="cart-icon" alt="Shopping Cart" />
        <span className="cart-text">Sepetim</span>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>

      <FreeCargoProgressBar />
    </div>
  );
};

export default ShoppingCart;
