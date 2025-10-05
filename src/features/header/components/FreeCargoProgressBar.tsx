import React from "react";
import "./FreeCargoProgressBar.scss";
import { useCartStore } from "../../../shared/store";

const FreeCargoProgressBar: React.FC = () => {
  const { items, totalItems } = useCartStore();

  const totalAmount = items.reduce((total, item) => {
    const priceValue = parseFloat(
      item.price.replace(/[^\d,]/g, "").replace(",", ".")
    );
    return total + priceValue * item.quantity;
  }, 0);

  const freeShippingThreshold = 500;
  const remainingAmount = Math.max(0, freeShippingThreshold - totalAmount);
  const progressPercentage = Math.min(
    100,
    (totalAmount / freeShippingThreshold) * 100
  );

  const isFreeShipping = totalAmount >= freeShippingThreshold;

  return (
    <div
      className={`free-cargo-progress-bar ${
        totalItems === 0 ? "hidden" : "visible"
      }`}
    >
      <div className="progress-content">
        <div className="progress-icon">
          <img src="/src/assets/simsek.svg" alt="Lightning" />
        </div>

        <div className="progress-text">
          {isFreeShipping ? (
            <span className="free-shipping-text">Kargo Bedava</span>
          ) : (
            <span className="remaining-text">
              {remainingAmount.toFixed(2)} TL ürün daha ekleyin kargo bedava
            </span>
          )}
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default FreeCargoProgressBar;
