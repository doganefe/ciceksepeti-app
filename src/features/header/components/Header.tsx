import React, { useState } from "react";
import "./Header.scss";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import CategoryDrawer from "./CategoryDrawer";
import type { HeaderProps } from "../types/header.types";
import { categoryIcon, ciceksepetiIcon } from "../../../assets";

const Header: React.FC<HeaderProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="sticky-container">
        <header className="container sticky">
          <div className="header">
            <button
              className="hamburger-menu"
              onClick={handleMenuClick}
              aria-label="Menu"
            >
              <img src={categoryIcon} alt="Menu" className="menu-icon" />
            </button>

            <div className="header-left">
              <div className="header-logo">
                <img src={ciceksepetiIcon} alt="ÇiçekSepeti Logo" />
              </div>

              <div className="header-searchbar">
                <SearchBar />
              </div>
            </div>

            <div className="header-right">
              <div className="header-shopping-cart">
                <ShoppingCart />
              </div>
            </div>
          </div>
        </header>
      </div>

      <CategoryDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />

      <div className="h1-bar">
        <p className="h1-title container">ÇiçekSepeti H1</p>
      </div>
    </>
  );
};

export default Header;
