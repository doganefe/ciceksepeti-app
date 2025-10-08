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
      <header className="header container">
        <button className="hamburger-menu" onClick={handleMenuClick}>
          <img src={categoryIcon} alt="Menu" className="menu-icon" />
        </button>

        <div className="header-logo">
          <img src={ciceksepetiIcon} alt="ÇiçekSepeti Logo" />
        </div>

        <div className="header-searchbar">
          <SearchBar />
        </div>

        <div className="header-shopping-cart">
          <ShoppingCart />
        </div>
      </header>

      <div className="h1-bar">
        <p className="h1-title container">ÇiçekSepeti H1</p>
      </div>

      <CategoryDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default Header;
